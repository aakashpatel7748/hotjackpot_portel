'use client';

import React, { useState } from 'react';
import { Country } from '@/data/casinoOffers';
import { FAQS_AU, FAQS_CA, FAQItem } from '@/data/faqs';
import { ChevronDownIcon } from './Icons';

export { FAQS_AU, FAQS_CA };
export type { FAQItem };

interface FAQSectionProps {
  country: Country;
}

export function FAQSection({ country }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = country === 'AU' ? FAQS_AU : FAQS_CA;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
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

      <div className="space-y-2.5 sm:space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-colors hover:border-zinc-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-3 sm:py-4 px-3.5 sm:px-6 text-left flex items-center justify-between gap-2.5 sm:gap-4 font-bold text-white text-xs sm:text-sm md:text-base focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="leading-snug">{faq.question}</span>
                <span className={`text-amber-400 transform transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </button>
              {isOpen && (
                <div className="px-3.5 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
