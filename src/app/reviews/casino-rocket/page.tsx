import type { Metadata } from 'next';
import { CASINO_OFFERS } from '@/data/casinoOffers';
import { ReviewPageLayout } from '@/components/ReviewPageLayout';

const offer = CASINO_OFFERS.find((o) => o.slug === 'casino-rocket')!;

export const metadata: Metadata = {
  title: 'Casino Rocket Editorial Overview (2026): Stated VIP Program & Banking | HotJackpot',
  description:
    'Editorial review of Casino Rocket for Australian & Canadian players. Overview of stated 1-3 hour PayID banking, 2,500+ pokies from top studios, and stated AU$1,000 / C$1,000 welcome bundle terms.',
  keywords: [
    'casino rocket review',
    'casino rocket australia bonus',
    'casino rocket vip login',
    'casino rocket payid',
    'casino rocket canada',
  ],
  alternates: {
    canonical: 'https://hotjackpot.in/reviews/casino-rocket',
  },
};

export default function CasinoRocketReviewPage() {
  return <ReviewPageLayout offer={offer} country="AU" />;
}
