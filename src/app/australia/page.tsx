import type { Metadata } from 'next';
import { PortalApp } from '@/components/PortalApp';

export const metadata: Metadata = {
  title: 'Online Pokies Australia 2026: Editorial Guide & PayID Banking | HotJackpot',
  description:
    'Independent editorial guide to online pokies accepting Australian players. Compare stated bonus terms up to AU$2,000 + 250 Free Spins, PayID banking details, and software providers at Wild Fortune & Casino Rocket.',
  keywords: [
    'online pokies australia guide',
    'pokies payid banking',
    'wild fortune australia review',
    'casino rocket australia bonus',
    'australian online pokies 2026',
  ],
  openGraph: {
    title: 'Online Pokies Australia 2026 (Editorial Overview)',
    description: 'PayID banking overview, AUD currency options, stated wagering, and AU$2,000 welcome bonuses.',
    url: 'https://hotjackpot.in/australia',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Pokies Australia 2026: Editorial Guide & PayID Banking | HotJackpot',
    description: 'PayID banking overview, AUD currency options, stated wagering, and AU$2,000 welcome bonuses.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://hotjackpot.in/australia',
    languages: {
      'en-AU': 'https://hotjackpot.in/australia',
      'en-CA': 'https://hotjackpot.in/canada',
      'x-default': 'https://hotjackpot.in/canada',
    },
  },
};

export default function AustraliaPage() {
  return <PortalApp initialCountry="AU" />;
}

