import type { Metadata } from 'next';
import { PortalApp } from '@/components/PortalApp';

export const metadata: Metadata = {
  title: 'Online Casinos Canada 2026: Editorial Guide & Interac Banking | HotJackpot',
  description:
    'Independent editorial comparison of online casinos in Canada. Review stated CAD welcome bonuses up to C$2,000, Interac e-Transfer banking, and game selections at Wild Fortune, Casino Rocket, and Ritzo.',
  keywords: [
    'online casino canada guide',
    'interac casino canada review',
    'fast payout casino canada',
    'ritzo casino canada review',
    'wild fortune canada bonus',
    'casino rocket canada',
  ],
  openGraph: {
    title: 'Online Casinos Canada 2026 (Editorial Overview) | HotJackpot',
    description:
      'Interac e-Transfer banking overview, CAD currency options, top slots, and stated C$2,000 welcome packages.',
    url: 'https://hotjackpot.in',
    siteName: 'HotJackpot Reviews',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Casinos Canada 2026 Guide | HotJackpot',
    description: 'Interac Banking Overviews • Stated C$2,000 Welcome Packages',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hotjackpot.in',
    languages: {
      'en-CA': 'https://hotjackpot.in',
      'x-default': 'https://hotjackpot.in',
    },
  },
};

export default function HomePage() {
  return <PortalApp initialCountry="CA" />;
}
