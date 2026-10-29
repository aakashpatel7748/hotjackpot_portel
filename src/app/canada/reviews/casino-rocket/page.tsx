import type { Metadata } from 'next';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { ReviewPageLayout } from '@/components/ReviewPageLayout';

const offer = CASINO_OFFERS.find((o) => o.slug === 'casino-rocket')!;

export const metadata: Metadata = {
  title: 'Casino Rocket Canada Review (2026): Interac Payouts & C$1,000 Bonus | HotJackpot',
  description:
    'Editorial review of Casino Rocket for Canada. Review stated 2-6 hour Interac processing, VIP loyalty tiers, and C$1,000 + 150 Free Spins bonus terms.',
  keywords: [
    'casino rocket canada review',
    'casino rocket interac payment',
    'casino rocket canada bonus code',
    'casino rocket loyalty tiers',
  ],
  alternates: {
    canonical: 'https://hotjackpot.in/canada/reviews/casino-rocket',
  },
};

export default function CasinoRocketCanadaReviewPage() {
  return <ReviewPageLayout offer={offer} country="CA" />;
}

