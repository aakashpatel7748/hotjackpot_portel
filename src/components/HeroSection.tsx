import React from 'react';
import { Country } from '@/data/casinoOffers';
import { ShieldCheckIcon, ZapIcon, LockIcon, TrophyIcon } from './Icons';

interface HeroSectionProps {
  country: Country;
}

export function HeroSection({ country }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-8 sm:pb-12 bg-gradient-to-b from-[#080511] via-[#120a22] to-[#080511] border-b border-zinc-800/80 w-full">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container - Generous Inward Padding for Desktop & Mobile Safety */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 text-center">
        {/* Editorial Pill */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 shadow-lg max-w-full">
          <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">
            {country === 'AU'
              ? 'Independent Editorial Guide • 2026 Pokies Benchmark'
              : 'Independent Editorial Guide • 2026 Casino Benchmark'}
          </span>
        </div>

        {/* Main H1 Headline - Safe Responsive Typography that won't break awkwardly */}
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-3 sm:mb-4 break-words">
          {country === 'AU' ? (
            <>
              Top-Rated Online Pokies in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 inline-block">
                Australia (2026)
              </span>
            </>
          ) : (
            <>
              Top-Rated Online Casinos in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 inline-block">
                Canada (2026)
              </span>
            </>
          )}
        </h1>

        {/* Subtitle - Honest & Objective */}
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
          {country === 'AU'
            ? 'An objective editorial comparison of popular offshore online casinos accepting Australian players. We evaluate stated bonus terms, wagering conditions, game variety, and PayID banking rails.'
            : 'An objective editorial comparison of international online casinos accepting Canadian players. Review stated welcome offers, Interac e-Transfer banking, and game selections.'}
        </p>

        {/* 4 Feature Benchmark Badges - Robust Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto">
          <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-2 text-left">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ZapIcon className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">
                {country === 'AU' ? 'PayID Banking' : 'Interac Banking'}
              </p>
              <p className="text-[8px] sm:text-[9px] text-zinc-400 truncate">Fast processing</p>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-2 text-left">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">Major Studios</p>
              <p className="text-[8px] sm:text-[9px] text-zinc-400 truncate">Pragmatic, Relax</p>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-2 text-left">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <LockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">SSL Encrypted</p>
              <p className="text-[8px] sm:text-[9px] text-zinc-400 truncate">256-Bit Security</p>
            </div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-2 text-left">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <TrophyIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">Native Currency</p>
              <p className="text-[8px] sm:text-[9px] text-zinc-400 truncate">{country === 'AU' ? 'AUD Options' : 'CAD Options'}</p>
            </div>
          </div>
        </div>

        {/* Clear Regulatory Notice */}
        <div className="mt-4 p-2.5 sm:p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] sm:text-[11px] text-zinc-400 max-w-2xl mx-auto text-left flex items-start gap-2">
          <span className="text-amber-400 font-bold shrink-0">ℹ️</span>
          <span className="leading-relaxed">
            {country === 'AU'
              ? 'Editorial Notice: Interactive gambling is subject to Australia’s Interactive Gambling Act 2001 (IGA). The operators listed here are licensed offshore (Curacao) and operate outside Australian domestic licensing. 18+ only.'
              : 'Editorial Notice: In Canada, commercial gaming in Ontario is regulated by iGaming Ontario (iGO). Operators listed here operate under international offshore licenses. 19+ (18+ AB/QC).'}
          </span>
        </div>
      </div>
    </section>
  );
}
