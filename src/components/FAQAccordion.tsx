'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqs';
import { ChevronDownIcon } from './Icons';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-content-${index}`;
        const buttonId = `faq-btn-${index}`;

        return (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-colors hover:border-zinc-700"
          >
            <button
              id={buttonId}
              onClick={() => toggleFAQ(index)}
              className="w-full min-h-[44px] py-3.5 sm:py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-white text-xs sm:text-sm md:text-base focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="leading-snug">{faq.question}</span>
              <span
                className={`text-amber-400 transform transition-transform shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </button>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

