import type { Metadata } from 'next';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { ReviewPageLayout } from '@/components/ReviewPageLayout';

const offer = CASINO_OFFERS.find((o) => o.slug === 'wild-fortune')!;

export const metadata: Metadata = {
  title: 'Wild Fortune Casino Editorial Overview (2026): Stated Terms & Banking | HotJackpot',
  description:
    'Editorial review of Wild Fortune Casino. Overview of stated 1-2 hour PayID and Interac payout windows, 2,800+ pokie catalogue, and stated AU$2,000 / C$2,000 welcome package terms.',
  keywords: [
    'wild fortune review',
    'wild fortune casino australia',
    'wild fortune bonus code',
    'wild fortune payid withdrawal',
    'wild fortune canada',
  ],
  alternates: {
    canonical: 'https://hotjackpot.in/reviews/wild-fortune',
  },
};

export default function WildFortuneReviewPage() {
  return <ReviewPageLayout offer={offer} country="AU" />;
}
