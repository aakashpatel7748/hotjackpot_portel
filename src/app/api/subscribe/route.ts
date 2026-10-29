import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// In-memory rate limiter: max 5 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now - record.firstRequest > windowMs) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

// Prevent CSV / Spreadsheet Formula Injection (=, +, -, @, tab, cr)
function sanitizeCsvValue(val: string): string {
  let cleaned = val.replace(/"/g, '""').trim();
  if (/^[=+\-@\t\r]/.test(cleaned)) {
    cleaned = `'${cleaned}`;
  }
  return cleaned;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: 'Too many subscription attempts. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const { email, firstName, country, hp_website } = await request.json();

    // Silent honeypot rejection: if bot filled hidden field, return success without saving
    if (hp_website && typeof hp_website === 'string' && hp_website.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    }

    if (!email || typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ message: 'Please provide a valid personal email address.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const rawName = typeof firstName === 'string' && firstName.trim() ? firstName.trim().slice(0, 60) : 'Friend';
    // Defuse spreadsheet formula injection for Google Sheets payload without doubling quotes
    const sheetSafeName = /^[=+\-@\t\r]/.test(rawName) ? `'${rawName}` : rawName;
    const selectedCountry = country === 'CA' ? 'CA' : 'AU';
    const nowIso = new Date().toISOString();

    // Disposable spam domains filter
    const disposableDomains = [
      'tempmail.com',
      'throwaway.com',
      '10minutemail.com',
      'guerrillamail.com',
      'mailinator.com',
      'sharklasers.com',
      'yopmail.com',
    ];
    const domain = cleanEmail.split('@')[1];
    if (disposableDomains.includes(domain)) {
      return NextResponse.json({ message: 'Please provide a permanent personal email address.' }, { status: 400 });
    }

    // 1. Live Google Sheets Webhook
    const googleSheetWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetWebhook) {
      try {
        await fetch(googleSheetWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            firstName: sheetSafeName,
            country: selectedCountry,
            timestamp: nowIso,
          }),
          redirect: 'follow',
        });
      } catch (sheetErr) {
        console.error('Google Sheets webhook delivery error:', sheetErr);
      }
    }

    // 2. Local CSV backup with CSV formula injection sanitization
    try {
      const subscribersDir = path.resolve(process.cwd(), '..', 'mailer_app', 'Email_lists', 'SendXEmailList');
      if (!fs.existsSync(subscribersDir)) {
        fs.mkdirSync(subscribersDir, { recursive: true });
      }

      const subscribersFile = path.join(subscribersDir, 'PORTAL_NEWSLETTER_SUBSCRIBERS.csv');
      const csvName = sanitizeCsvValue(rawName);
      const row = `"${sanitizeCsvValue(cleanEmail)}","${csvName}","${selectedCountry}","${nowIso}"\n`;

      if (!fs.existsSync(subscribersFile)) {
        fs.writeFileSync(subscribersFile, 'Email,First Name,Country,Subscribed At\n', 'utf-8');
      }

      fs.appendFileSync(subscribersFile, row, 'utf-8');
    } catch (fsErr) {
      // Ignored in cloud serverless environments
      console.log('Local disk write skipped in cloud environment:', fsErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
