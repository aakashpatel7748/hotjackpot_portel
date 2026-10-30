import { NextRequest, NextResponse } from 'next/server';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { getCountry, isEligibleCountry } from '@/lib/geo';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const country = getCountry(request.headers);

  // 1. Server-side geo enforcement
  if (!isEligibleCountry(country)) {
    const unavailableUrl = new URL('/', request.url);
    unavailableUrl.searchParams.set('region', 'unavailable');
    return NextResponse.redirect(unavailableUrl.toString(), {
      status: 302,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  const offer = CASINO_OFFERS.find((o) => o.slug === slug);

  if (!offer || !offer.trackingUrl) {
    return NextResponse.redirect(new URL('/', request.url), 302);
  }

  // 2. Structured click logging (no IP, no personal data)
  const ts = new Date().toISOString();
  const clickData = {
    type: 'click',
    slug,
    country: country || (process.env.NODE_ENV !== 'production' ? 'DEV' : 'UNKNOWN'),
    ts,
  };
  console.log(JSON.stringify(clickData));

  // 3. Optional webhook with 2s timeout (never blocking redirect)
  const webhookUrl = process.env.CLICK_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clickData),
        signal: controller.signal,
      })
        .catch(() => {})
        .finally(() => clearTimeout(timeoutId));
    } catch {
      // Non-blocking fallback
    }
  }

  // 4. Preserve and append tracking parameters (UTMs)
  const incomingUrl = new URL(request.url);
  const targetUrl = new URL(offer.trackingUrl);

  const utmSource = incomingUrl.searchParams.get('utm_source') || 'hotjackpot';
  const utmMedium = incomingUrl.searchParams.get('utm_medium') || 'portal_review';
  const utmCampaign = incomingUrl.searchParams.get('utm_campaign') || slug;

  targetUrl.searchParams.set('utm_source', utmSource);
  targetUrl.searchParams.set('utm_medium', utmMedium);
  targetUrl.searchParams.set('utm_campaign', utmCampaign);

  // 5. Temporary 307 redirect with noindex
  return NextResponse.redirect(targetUrl.toString(), {
    status: 307,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      'X-Robots-Tag': 'noindex',
    },
  });
}
