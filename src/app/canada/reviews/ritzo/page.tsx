import type { Metadata } from 'next';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { ReviewPageLayout } from '@/components/ReviewPageLayout';

const offer = CASINO_OFFERS.find((o) => o.slug === 'ritzo')!;

export const metadata: Metadata = {
  title: 'Ritzo Casino Canada Review (2026): 1920s Gatsby High Roller & C$1,000 Bonus | HotJackpot',
  description:
    'Editorial review of Ritzo Casino for Canadian players. Review 1920s Art Deco styling, stated Interac and crypto banking, and C$1,000 + 100 Free Spins bonus.',
  keywords: [
    'ritzo casino canada review',
    'ritzo interac withdrawal canada',
    'ritzo promo code canada',
    'ritzo 1920s art deco casino',
  ],
  alternates: {
    canonical: 'https://hotjackpot.in/canada/reviews/ritzo',
    languages: {
      'en-AU': 'https://hotjackpot.in/reviews/ritzo',
      'en-CA': 'https://hotjackpot.in/canada/reviews/ritzo',
      'x-default': 'https://hotjackpot.in/canada/reviews/ritzo',
    },
  },
};

export default function RitzoCanadaReviewPage() {
  return <ReviewPageLayout offer={offer} country="CA" />;
}
