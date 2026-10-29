import type { Metadata } from 'next';
import { PortalApp } from '@/components/PortalApp';

export const metadata: Metadata = {
  title: 'Online Pokies Australia & Canadian Online Casinos Guide (2026) | HotJackpot',
  description:
    'Independent editorial comparison of online casinos in Australia & Canada. Review stated welcome offers up to AU$2,000 / C$2,000, PayID & Interac banking, and game varieties.',
  keywords: [
    'online pokies australia guide',
    'payid online pokies review',
    'online casino canada review',
    'interac online casino canada',
    'wild fortune casino review',
    'casino rocket review',
    'ritzo casino review',
  ],
  openGraph: {
    title: 'Online Pokies & Casino Guide 2026 | HotJackpot Reviews',
    description:
      'Independent editorial guide for Australia and Canada. Fast banking overviews, stated wagering requirements, and welcome promotions.',
    url: 'https://hotjackpot.in',
    siteName: 'HotJackpot Reviews',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Pokies Australia & Casinos Canada 2026 Guide',
    description: 'PayID & Interac Banking Overviews • Stated AU$2,000 / C$2,000 Welcome Packages',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hotjackpot.in',
  },
};

export default function HomePage() {
  return <PortalApp initialCountry="AU" />;
}
