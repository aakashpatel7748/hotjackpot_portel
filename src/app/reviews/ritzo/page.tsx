import type { Metadata } from 'next';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { ReviewPageLayout } from '@/components/ReviewPageLayout';

const offer = CASINO_OFFERS.find((o) => o.slug === 'ritzo')!;

export const metadata: Metadata = {
  title: 'Ritzo Casino Editorial Overview (2026): Stated Banking & Table Limits | HotJackpot',
  description:
    'Editorial review of Ritzo Casino. Overview of European luxury salon theme, stated Interac and PayID processing speeds, stated 35x bonus wagering terms, and 2,200+ games.',
  keywords: [
    'ritzo casino review',
    'ritzo canada bonus',
    'ritzo login',
    'ritzo casino fast withdrawal',
    'ritzo vip club',
  ],
  alternates: {
    canonical: 'https://hotjackpot.in/reviews/ritzo',
    languages: {
      'en-AU': 'https://hotjackpot.in/reviews/ritzo',
      'en-CA': 'https://hotjackpot.in/canada/reviews/ritzo',
      'x-default': 'https://hotjackpot.in/canada/reviews/ritzo',
    },
  },
};

export default function RitzoReviewPage() {
  return <ReviewPageLayout offer={offer} country="AU" />;
}

