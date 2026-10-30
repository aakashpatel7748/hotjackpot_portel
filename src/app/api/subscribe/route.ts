import { NextRequest, NextResponse } from 'next/server';

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

    const { email, firstName, country, hp_website, turnstileToken } = await request.json();

    // Silent honeypot rejection: if bot filled hidden field, return success without saving
    if (hp_website && typeof hp_website === 'string' && hp_website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Thanks, you're subscribed." });
    }

    // Cloudflare Turnstile token validation if TURNSTILE_SECRET_KEY is configured
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken) {
        return NextResponse.json({ message: 'Missing bot verification token.' }, { status: 400 });
      }
      try {
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: ip,
          }),
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json({ message: 'Security verification failed. Please try again.' }, { status: 400 });
        }
      } catch (verifyErr) {
        console.error('Turnstile verification error:', verifyErr);
        return NextResponse.json({ message: 'Security verification temporarily unavailable.' }, { status: 500 });
      }
    }

    if (!email || typeof email !== 'string' || email.length > 254 || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ message: 'Please provide a valid personal email address.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const rawName = typeof firstName === 'string' && firstName.trim() ? firstName.trim().slice(0, 60) : 'Friend';
    // Defuse spreadsheet formula injection for Google Sheets payload
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

    const googleSheetWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // Fail closed in production if webhook URL is not configured
    if (process.env.NODE_ENV === 'production' && !googleSheetWebhook) {
      return NextResponse.json(
        { message: 'Subscription service temporarily unavailable' },
        { status: 503 }
      );
    }

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

    return NextResponse.json({
      success: true,
      message: "Thanks, you're subscribed.",
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
