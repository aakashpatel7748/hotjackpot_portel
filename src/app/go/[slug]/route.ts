import { NextRequest, NextResponse } from 'next/server';
import { CASINO_OFFERS } from '@/data/casinoOffers';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const offer = CASINO_OFFERS.find((o) => o.slug === slug);

  if (!offer || !offer.trackingUrl) {
    return NextResponse.redirect(new URL('/', request.url), 302);
  }

  // Preserve and append tracking parameters (UTMs)
  const incomingUrl = new URL(request.url);
  const targetUrl = new URL(offer.trackingUrl);

  // Transfer any incoming UTMs or set default portal UTMs
  const utmSource = incomingUrl.searchParams.get('utm_source') || 'hotjackpot';
  const utmMedium = incomingUrl.searchParams.get('utm_medium') || 'portal_review';
  const utmCampaign = incomingUrl.searchParams.get('utm_campaign') || slug;

  targetUrl.searchParams.set('utm_source', utmSource);
  targetUrl.searchParams.set('utm_medium', utmMedium);
  targetUrl.searchParams.set('utm_campaign', utmCampaign);

  // Return temporary redirect (307) with strict no-store cache to ensure fresh tracking
  return NextResponse.redirect(targetUrl.toString(), {
    status: 307,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
}

