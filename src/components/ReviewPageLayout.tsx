'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CasinoOffer, Country } from '@/data/casinoOffers';
import { StarIcon, CheckCircleIcon, XCircleIcon, ExternalLinkIcon } from './Icons';

interface ReviewPageLayoutProps {
  offer: CasinoOffer;
  country: Country;
}

export function ReviewPageLayout({ offer, country }: ReviewPageLayoutProps) {
  const [activeCountry, setActiveCountry] = useState<Country>(country || 'AU');
  const [copiedCode, setCopiedCode] = useState(false);

  // Sync with URL query parameter ?country=ca or ?country=au if user navigated directly
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const c = urlParams.get('country')?.toUpperCase();
      if (c === 'CA' || c === 'AU') {
        setActiveCountry(c);
      }
    }
  }, []);

  const bonus = offer.bonus[activeCountry];
  const payout = offer.payoutSpeed[activeCountry];
  const payments = offer.paymentMethods[activeCountry];
  const pros = offer.pros[activeCountry];
  const cons = offer.cons[activeCountry];
  const editorial = offer.editorialReview[activeCountry];

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bonus.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Thing',
      name: offer.name,
      description: `${offer.name} online casino editorial overview for ${activeCountry === 'AU' ? 'Australia' : 'Canada'}. Stated welcome bonus: ${bonus.headline}.`,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: offer.rating.toString(),
      bestRating: '5',
    },
    author: {
      '@type': 'Organization',
      name: 'HotJackpot Editorial Desk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HotJackpot Reviews',
      url: 'https://hotjackpot.in',
    },
    reviewBody: editorial.summary,
  };

  return (
    <article className="min-h-screen bg-[#0a0714] text-zinc-100 py-6 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Breadcrumb & Regional Country Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-zinc-800/60 pb-3">
          <nav className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <Link href={activeCountry === 'AU' ? '/australia' : '/canada'} className="hover:text-amber-400">
              {activeCountry === 'AU' ? 'Australia Pokies Guide' : 'Canada Casino Guide'}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold truncate">{offer.name} Overview</span>
          </nav>

          {/* Regional Switcher Toggle */}
          <div className="flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0">
            <Link
              href={`/reviews/${offer.slug}`}
              onClick={() => setActiveCountry('AU')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCountry === 'AU'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>🇦🇺</span>
              <span>Australia (AUD)</span>
            </Link>
            <Link
              href={`/canada/reviews/${offer.slug}`}
              onClick={() => setActiveCountry('CA')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCountry === 'CA'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>🇨🇦</span>
              <span>Canada (CAD)</span>
            </Link>
          </div>
        </div>

        {/* Hero Card */}
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#19112e] via-[#120a24] to-[#0a0714] border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-amber-500/40 bg-zinc-950 flex items-center justify-center">
              <img
                src={offer.logoUrl}
                alt={`${offer.name} Official Logo`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-black tracking-wider uppercase mb-1 sm:mb-2">
                {offer.badge[activeCountry]}
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white">
                {offer.name} Editorial Overview ({activeCountry === 'AU' ? 'Australia 2026' : 'Canada 2026'})
              </h1>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm sm:text-base font-black text-white">{offer.rating} / 5</span>
                <span className="text-xs text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  {offer.ratingLabel}
                </span>
                <span className="text-xs text-zinc-500 ml-1">• Est. {offer.established}</span>
                <span className="text-xs text-zinc-400 font-medium px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                  Terms Checked Oct 2026
                </span>
              </div>
            </div>
          </div>

          {/* Quick Bonus Strip */}
          <div className="mt-5 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/60 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Operator Stated Welcome Package ({activeCountry === 'AU' ? 'AUD' : 'CAD'})
              </p>
              <h2 className="text-base sm:text-xl md:text-2xl font-black text-white mt-1 leading-snug">{bonus.headline}</h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">{bonus.subline}</p>
              
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 font-mono text-xs sm:text-sm font-bold border border-amber-500/40">
                    CODE: {bonus.code}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 border border-zinc-700 font-semibold transition-colors cursor-pointer"
                    title="Copy promo code"
                  >
                    {copiedCode ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <span className="text-xs text-zinc-400">Min: {bonus.minDeposit} • Wagering: {offer.wagering}</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end w-full md:w-auto">
              <a
                href={offer.goUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="w-full md:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all text-center shrink-0 flex items-center justify-center gap-2"
              >
                <span>VISIT OPERATOR SITE</span>
                <ExternalLinkIcon className="w-4 h-4 text-black shrink-0" />
              </a>
              <span className="text-[10px] text-zinc-500 mt-1.5">
                *Affiliate referral link • {activeCountry === 'AU' ? '18+' : '19+'} only • T&Cs Apply
              </span>
            </div>
          </div>
        </div>

        {/* Pros & Cons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/80 border border-emerald-500/30 shadow-lg">
            <h3 className="text-sm sm:text-base font-bold text-emerald-400 flex items-center gap-2 mb-3 sm:mb-4">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span>Key Strengths (Pros)</span>
            </h3>
            <ul className="space-y-2">
              {pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/80 border border-red-500/30 shadow-lg">
            <h3 className="text-sm sm:text-base font-bold text-red-400 flex items-center gap-2 mb-3 sm:mb-4">
              <XCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0" />
              <span>Important Considerations (Cons)</span>
            </h3>
            <ul className="space-y-2">
              {cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Unique Editorial Breakdown */}
        <div className="p-5 sm:p-8 rounded-xl sm:rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-2xl font-black text-white">
            Editorial Assessment & Operator Specifications ({activeCountry === 'AU' ? 'Australia' : 'Canada'})
          </h3>

          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">1. Platform Experience & Lobby Layout</h4>
              <p>{editorial.summary}</p>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">2. Banking Rails & Payout Timeframes</h4>
              <p>{editorial.bankingNotes}</p>
              <p className="mt-1 text-zinc-400">
                Stated payout speed: <strong className="text-emerald-400">{payout}</strong>. Accepted payment rails:{' '}
                <span className="text-amber-300">{payments.join(', ')}</span>.
              </p>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">3. Software Studios & Game Selection</h4>
              <p>{editorial.gameHighlights}</p>
              <p className="mt-1 text-zinc-400">Total catalogue size: <strong>{offer.gamesCount}</strong>.</p>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">4. Licensing & International Legal Framework</h4>
              <p>
                {offer.name} operates under an international gaming license issued in <strong>{offer.license}</strong>.
                {activeCountry === 'AU'
                  ? ' Under Australia’s Interactive Gambling Act 2001 (IGA), offshore operators operate without domestic state or federal licenses. Australian consumer dispute mechanisms do not apply.'
                  : ' In Canada, provincial rules govern online gaming. In Ontario, commercial operators require an operating agreement with iGaming Ontario (iGO). In other Canadian provinces, international offshore sites operate in a grey market.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action Banner */}
        <div className="text-center pt-2 sm:pt-4">
          <a
            href={offer.goUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span>VISIT {offer.name.toUpperCase()} (OFFICIAL OPERATOR SITE)</span>
            <ExternalLinkIcon className="w-4 h-4 text-black shrink-0" />
          </a>
        </div>
      </div>
    </article>
  );
}
