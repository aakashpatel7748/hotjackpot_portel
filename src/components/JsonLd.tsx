import React from 'react';
import { CASINO_OFFERS, Country } from '@/data/casinoOffers';
import { FAQS_AU, FAQS_CA } from '@/data/faqs';

interface JsonLdProps {
  country: Country;
}

export function JsonLd({ country }: JsonLdProps) {
  const faqs = country === 'AU' ? FAQS_AU : FAQS_CA;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: country === 'AU' ? 'Featured Australian Online Pokies Guide 2026' : 'Featured Canadian Online Casinos Guide 2026',
    description:
      country === 'AU'
        ? 'Editorial overview of international online casinos accepting Australian players, reviewing stated welcome packages and PayID banking.'
        : 'Editorial overview of international online casinos accepting Canadian players with Interac e-Transfer banking and stated promotions.',
    itemListElement: CASINO_OFFERS.map((offer, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: offer.name,
        description: `${offer.name} - ${offer.badge[country]}. Stated Welcome: ${offer.bonus[country].headline}`,
      },
    })),
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HotJackpot Reviews',
    url: 'https://hotjackpot.in',
    description: 'Independent iGaming editorial reviews and payment rail benchmarks for Australia and Canada.',
    publisher: {
      '@type': 'Organization',
      name: 'HotJackpot Editorial Desk',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
