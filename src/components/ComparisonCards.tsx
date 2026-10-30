'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASINO_OFFERS, Country } from '@/data/casinoOffers';
import { StarIcon, CheckCircleIcon, ZapIcon, ExternalLinkIcon, ClockIcon } from './Icons';
import { LAST_CHECKED } from '@/data/site';
import { GeoGate } from './GeoGate';

interface ComparisonCardsProps {
  country: Country;
}

export function ComparisonCards({ country }: ComparisonCardsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="top-offers" className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-zinc-800 gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {country === 'AU' ? 'Australia Pokies Comparison' : 'Canada Casino Comparison'}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-1">
            {country === 'AU' ? 'Featured Online Pokies (Editorial Ranking)' : 'Featured Online Casinos (Editorial Ranking)'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400">
          Evaluated by editorial team • {country === 'AU' ? '🇦🇺 Australia Guide' : '🇨🇦 Canada Guide'} • Checked {LAST_CHECKED}
        </p>
      </div>

      {/* Cards Stack */}
      <div className="space-y-6 sm:space-y-8">
        {CASINO_OFFERS.map((offer) => {
          const bonus = offer.bonus[country];
          const badge = offer.badge[country];
          const payoutSpeed = offer.payoutSpeed[country];
          const payments = offer.paymentMethods[country];
          const features = offer.keyFeatures[country];

          const isTopRank = offer.rank === 1;

          return (
            <div
              key={offer.id}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                isTopRank
                  ? 'bg-gradient-to-b from-[#18102e] via-[#120a22] to-[#0a0614] border-2 border-amber-500/50 shadow-amber-500/10'
                  : offer.rank === 2
                  ? 'bg-gradient-to-b from-[#121622] via-[#0d101a] to-[#090b12] border border-slate-700/70 hover:border-slate-600'
                  : 'bg-gradient-to-b from-[#171115] via-[#110d10] to-[#0a080a] border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Top Accent Ribbon */}
              <div
                className={`px-3.5 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-black tracking-wider uppercase ${
                  isTopRank
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black'
                    : offer.rank === 2
                    ? 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-slate-100'
                    : 'bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 py-0.5 rounded bg-black/25 text-current font-black shrink-0 text-xs">
                    RANK #{offer.rank}
                  </span>
                  <span className="font-extrabold text-xs tracking-wide">
                    {badge}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 text-xs font-semibold">
                  <ZapIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{offer.ratingLabel}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                {/* Brand Header Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-zinc-800/80 pb-3 sm:pb-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-black/40 shrink-0 border border-amber-500/30 bg-zinc-950 flex items-center justify-center">
                      <img
                        src={offer.logoUrl}
                        alt={`${offer.name} Logo`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white leading-tight">
                        {offer.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <div className="flex" aria-label={`Rating: ${offer.rating} out of 5 stars`}>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-black text-white">{offer.rating} / 5</span>
                        <span className="text-xs text-zinc-400">• Est. {offer.established}</span>
                        <span className="text-xs text-zinc-400 font-medium px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                          {LAST_CHECKED}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/80 text-xs font-semibold text-zinc-300">
                      License: {offer.license}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300">
                      {offer.gamesCount}
                    </span>
                  </div>
                </div>

                {/* Stated Welcome Package Banner */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-purple-950/20 border border-amber-500/30 space-y-3">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Stated Welcome Offer ({country === 'AU' ? 'AUD' : 'CAD'}):
                    </span>
                    <p className="text-base sm:text-lg lg:text-xl font-black text-white mt-1 leading-snug">
                      {bonus.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-1">{bonus.subline}</p>
                  </div>

                  {/* Spec Strip: Code + Wagering + Min Deposit */}
                  <div className="pt-3 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-2.5">
                    <GeoGate
                      loading={
                        <div className="h-8 w-32 bg-zinc-800 animate-pulse rounded-md"></div>
                      }
                      fallback={
                        <div className="flex items-center gap-1.5">
                          <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-300 text-xs font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>Code: Restricted in Your Region</span>
                          </span>
                        </div>
                      }
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                          CODE: {bonus.code}
                        </span>
                        <button
                          onClick={() => handleCopyCode(offer.id, bonus.code)}
                          aria-label={`Copy bonus code for ${offer.name}`}
                          className="min-h-[36px] px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
                        >
                          {copiedId === offer.id ? '✓ Copied' : 'Copy'}
                        </button>
                      </div>
                    </GeoGate>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-400">
                      <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800">
                        Wagering: <strong className="text-zinc-200">{offer.wagering}</strong>
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800">
                        Min Deposit: <strong className="text-zinc-200">{bonus.minDeposit}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features & Payment Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Stated Platform Features:
                    </p>
                    <div className="space-y-1.5">
                      {features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Badges */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Listed Payment Rails:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {payments.map((pm, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-zinc-800 text-xs font-medium text-zinc-300 border border-zinc-700/60"
                        >
                          {pm}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5 pt-1">
                      <ClockIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Estimated Payout: <strong className="text-emerald-400">{payoutSpeed}</strong></span>
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/80">
                  <Link
                    href={country === 'AU' ? `/reviews/${offer.slug}` : `/canada/reviews/${offer.slug}`}
                    className="text-xs sm:text-sm text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4 decoration-amber-500/40 hover:decoration-amber-300 transition-colors order-2 sm:order-1 text-center min-h-[44px] flex items-center"
                  >
                    Read Detailed Editorial Overview of {offer.name} →
                  </Link>

                  <div className="flex flex-col items-center sm:items-end w-full sm:w-auto order-1 sm:order-2">
                    <GeoGate
                      loading={
                        <div className="w-full sm:w-48 h-12 bg-zinc-800 animate-pulse rounded-xl"></div>
                      }
                      fallback={
                        <>
                          <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-800/90 border border-zinc-700/80 text-zinc-400 font-semibold text-xs text-center flex items-center justify-center gap-2 min-h-[44px]">
                            <span className="w-2 h-2 rounded-full bg-amber-500/80 shrink-0"></span>
                            <span>Not available in your region</span>
                          </div>
                          <span className="text-xs text-zinc-400 mt-1">
                            *Real-money registrations restricted based on your location
                          </span>
                        </>
                      }
                    >
                      <>
                        <a
                          href={offer.goUrl}
                          target="_blank"
                          rel="sponsored nofollow noopener noreferrer"
                          aria-label={`Visit official operator site for ${offer.name}`}
                          className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs sm:text-sm tracking-wider uppercase text-center shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                          <span>VISIT {offer.name.toUpperCase()}</span>
                          <ExternalLinkIcon className="w-4 h-4 text-black shrink-0" />
                        </a>
                        <span className="text-xs text-zinc-400 mt-1">
                          *Affiliate link • {country === 'AU' ? '18+' : '19+'} only • T&Cs apply
                        </span>
                      </>
                    </GeoGate>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
