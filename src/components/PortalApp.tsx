import React from 'react';
import { Country } from '@/data/casinoOffers';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ComparisonCards } from '@/components/ComparisonCards';
import { ComparisonTable } from '@/components/ComparisonTable';
import { BankingGuide } from '@/components/BankingGuide';
import { FAQSection } from '@/components/FAQSection';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

interface PortalAppProps {
  initialCountry?: Country;
}

export function PortalApp({ initialCountry = 'AU' }: PortalAppProps) {
  return (
    <div className="min-h-screen bg-[#0a0714] text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      <JsonLd country={initialCountry} />
      <Header country={initialCountry} />
      <main className="flex-1">
        <HeroSection country={initialCountry} />
        <ComparisonCards country={initialCountry} />
        <ComparisonTable country={initialCountry} />
        <BankingGuide country={initialCountry} />
        <NewsletterSignup country={initialCountry} />
        <FAQSection country={initialCountry} />
      </main>
      <Footer country={initialCountry} />
    </div>
  );
}
