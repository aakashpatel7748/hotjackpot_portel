import React from 'react';
import { Country } from '@/data/casinoOffers';
import { FAQS_AU, FAQS_CA, FAQItem } from '@/data/faqs';
import { FAQAccordion } from './FAQAccordion';

export { FAQS_AU, FAQS_CA };
export type { FAQItem };

interface FAQSectionProps {
  country: Country;
}

export function FAQSection({ country }: FAQSectionProps) {
  const faqs = country === 'AU' ? FAQS_AU : FAQS_CA;

  return (
    <section id="faq" className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Regulatory & Consumer Information
        </span>
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-white mt-1 break-words">
          {country === 'AU'
            ? 'Australian Online Pokies Regulatory FAQ'
            : 'Canadian Online Gaming Regulatory FAQ'}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl mx-auto">
          Essential legal context, consumer protections, and responsible gambling frameworks.
        </p>
      </div>

      <FAQAccordion faqs={faqs} />
    </section>
  );
}
