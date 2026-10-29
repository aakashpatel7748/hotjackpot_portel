import type { Metadata } from 'next';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { ReviewPageLayout } from '@/components/ReviewPageLayout';

const offer = CASINO_OFFERS.find((o) => o.slug === 'wild-fortune')!;

export const metadata: Metadata = {
  title: 'Wild Fortune Casino Canada Review (2026): Interac Banking & C$2,000 Bonus | HotJackpot',
  description:
    'Editorial review of Wild Fortune Casino for Canadian players. Review stated 1-4 hour Interac e-Transfer payouts, 3,000+ slots, and C$2,000 welcome package terms.',
  keywords: [
    'wild fortune canada review',
    'wild fortune online casino canada',
    'wild fortune interac deposit',
    'wild fortune promo code canada',
  ],
  alternates: {
    canonical: 'https://hotjackpot.in/canada/reviews/wild-fortune',
  },
};

export default function WildFortuneCanadaReviewPage() {
  return <ReviewPageLayout offer={offer} country="CA" />;
}

