import type { Metadata } from 'next';
import { PortalApp } from '@/components/PortalApp';

export const metadata: Metadata = {
  title: 'Online Casinos Canada 2026: Editorial Guide & Interac Banking | HotJackpot',
  description:
    'Compare Canadian online casinos with Interac e-Transfer banking. Review stated CAD bonuses up to C$2,000, slot selections, and wagering requirements at Wild Fortune, Casino Rocket, and Ritzo.',
  keywords: [
    'online casino canada guide',
    'interac casino canada review',
    'fast payout casino canada',
    'ritzo casino canada review',
    'wild fortune canada bonus',
  ],
  openGraph: {
    title: 'Online Casinos Canada 2026 (Editorial Overview)',
    description: 'Interac e-Transfer banking overview, CAD currency options, top slots, and C$2,000 welcome passes.',
    url: 'https://hotjackpot.in/canada',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://hotjackpot.in/canada',
    languages: {
      'en-AU': 'https://hotjackpot.in/australia',
      'en-CA': 'https://hotjackpot.in/canada',
      'x-default': 'https://hotjackpot.in/canada',
    },
  },
};

export default function CanadaPage() {
  return <PortalApp initialCountry="CA" />;
}
