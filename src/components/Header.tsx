'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Country } from '@/data/casinoOffers';
import { TrophyIcon, ZapIcon } from './Icons';

interface HeaderProps {
  country: Country;
}

export function Header({ country }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCanada = pathname.includes('/canada') || country === 'CA';

  return (
    <header className="sticky top-0 z-50 bg-[#080511]/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl w-full">
      {/* Top Ticker Alert - Concise & Non-Overflowing */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-1.5 px-3 text-[10px] sm:text-xs font-black tracking-wide uppercase text-center flex items-center justify-center gap-1.5 overflow-hidden">
        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600 animate-ping shrink-0"></span>
        <span className="leading-tight text-center">
          {country === 'AU'
            ? '🔥 October 2026: Independent Australian Pokies & Bonus Guide'
            : '🔥 October 2026: Independent Canadian Casino & Banking Guide'}
        </span>
      </div>

      {/* Main Nav Container - Generous Inward Padding */}
      <div className="max-w-5xl mx-auto px-3 sm:px-8 md:px-12 lg:px-16 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
            <TrophyIcon className="w-4 h-4 text-black" />
          </div>
          <div className="min-w-0 flex items-center gap-1.5">
            <span className="text-sm sm:text-base font-black tracking-tight text-white whitespace-nowrap">
              HOT<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">JACKPOT</span>
            </span>
            <span className="hidden xs:inline-block text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 shrink-0">
              REVIEW
            </span>
          </div>
        </Link>

        {/* Center Nav Links - Desktop only */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-semibold text-zinc-300 shrink-0">
          <Link href="#top-offers" className="hover:text-amber-400 transition-colors">
            {country === 'AU' ? 'Top Pokies 2026' : 'Top Casinos 2026'}
          </Link>
          <Link href="#banking-guide" className="hover:text-amber-400 transition-colors">
            {country === 'AU' ? 'PayID Banking' : 'Interac e-Transfer'}
          </Link>
          <Link href="/how-we-rate" className="hover:text-amber-400 transition-colors">
            How We Rate
          </Link>
          <Link href="#faq" className="hover:text-amber-400 transition-colors">
            Legal FAQ
          </Link>
        </nav>

        {/* Right Section: Real URL Country Links & CTA & Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Country Switcher Toggle - Compact and Crawlable */}
          <div className="flex items-center p-0.5 bg-zinc-900 border border-zinc-700/60 rounded-lg shadow-inner shrink-0">
            <Link
              href="/australia"
              className={`flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-md text-xs font-bold transition-all ${
                !isCanada
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Switch to Australia Guide"
              title="Australia Pokies Guide"
            >
              <span>🇦🇺</span>
              <span className="hidden sm:inline">AU</span>
            </Link>
            <Link
              href="/canada"
              className={`flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-md text-xs font-bold transition-all ${
                isCanada
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Switch to Canada Guide"
              title="Canada Casino Guide"
            >
              <span>🇨🇦</span>
              <span className="hidden sm:inline">CA</span>
            </Link>
          </div>

          {/* Desktop Centralized Outbound CTA */}
          <a
            href="/go/wild-fortune"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all shrink-0"
          >
            <ZapIcon className="w-3.5 h-3.5 text-black" />
            <span>Featured Offer</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0818] border-b border-amber-500/30 px-3 sm:px-4 pt-3 pb-5 space-y-2 shadow-2xl w-full overflow-hidden">
          <nav className="flex flex-col space-y-2 font-semibold text-xs sm:text-sm text-zinc-200">
            <Link
              href="#top-offers"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:text-amber-400 flex items-center justify-between"
            >
              <span>{country === 'AU' ? '🎰 Featured Australian Pokies' : '🎰 Featured Canadian Casinos'}</span>
              <span className="text-xs text-amber-400 font-bold">Review →</span>
            </Link>
            <Link
              href="#banking-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:text-amber-400 flex items-center justify-between"
            >
              <span>{country === 'AU' ? '⚡ PayID Banking Guide' : '⚡ Interac Banking Guide'}</span>
              <span className="text-xs text-emerald-400 font-bold">Info →</span>
            </Link>
            <Link
              href="/how-we-rate"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:text-amber-400 flex items-center justify-between"
            >
              <span>⚖️ Editorial Rating Methodology</span>
              <span className="text-xs text-zinc-400 font-bold">Read →</span>
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:text-amber-400 flex items-center justify-between"
            >
              <span>❓ Legal & Regulatory FAQ</span>
              <span className="text-xs text-zinc-400 font-bold">Read →</span>
            </Link>
          </nav>

          {/* Mobile Direct Action Button */}
          <a
            href="/go/wild-fortune"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 px-3 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xl shadow-amber-500/20 active:scale-98 transition-all"
          >
            <ZapIcon className="w-4 h-4 text-black shrink-0" />
            <span className="truncate">VIEW FEATURED OPERATOR OFFER</span>
          </a>
        </div>
      )}
    </header>
  );
}
