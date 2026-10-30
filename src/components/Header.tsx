'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Country } from '@/data/casinoOffers';
import { TrophyIcon, ZapIcon } from './Icons';
import { LAST_CHECKED, ELIGIBLE_COUNTRIES } from '@/data/site';
import { GeoGate } from './GeoGate';

interface HeaderProps {
  country?: Country;
}

export function Header({ country = 'CA' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const showAu = ELIGIBLE_COUNTRIES.includes('AU');

  const isCanada = pathname.includes('/canada') || country === 'CA';

  return (
    <header className="sticky top-0 z-50 bg-[#080511] border-b border-amber-500/20 shadow-2xl w-full">
      {/* Top Ticker Alert - Clean, No Ping, No Fire Emoji */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-1.5 px-3 text-xs font-black tracking-wide uppercase text-center flex items-center justify-center gap-2 overflow-hidden">
        <span className="inline-block w-2 h-2 rounded-full bg-red-700 shrink-0"></span>
        <span className="leading-tight text-center">
          {LAST_CHECKED}: {country === 'AU' ? 'Independent Aussie Pokies & PayID Banking Guide' : 'Independent Canadian Casino & Banking Guide'}
        </span>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 min-w-0 py-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
            <TrophyIcon className="w-5 h-5 text-black" />
          </div>
          <div className="min-w-0 flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-black tracking-tight text-white whitespace-nowrap">
              HOT<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">JACKPOT</span>
            </span>
            <span className="hidden xs:inline-block text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 shrink-0">
              EDITORIAL
            </span>
          </div>
        </Link>

        {/* Center Nav Links - Desktop only */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-semibold text-zinc-300 shrink-0">
          <Link href="#top-offers" className="hover:text-amber-400 transition-colors py-2">
            {country === 'AU' ? 'Top Pokies 2026' : 'Top Casinos 2026'}
          </Link>
          <Link href="#banking-guide" className="hover:text-amber-400 transition-colors py-2">
            {country === 'AU' ? 'PayID Banking' : 'Interac e-Transfer'}
          </Link>
          <Link href="/how-we-rate" className="hover:text-amber-400 transition-colors py-2">
            How We Rate
          </Link>
          <Link href="#faq" className="hover:text-amber-400 transition-colors py-2">
            FAQ
          </Link>
        </nav>

        {/* Right Section: Country Switcher & GeoGated CTA & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Country Switcher (AU shown only if eligible) */}
          {showAu && (
            <div className="flex items-center p-1 bg-zinc-900 border border-zinc-700/60 rounded-lg shrink-0">
              <Link
                href="/australia"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all min-h-[44px] ${
                  !isCanada
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Switch to Australia Guide"
              >
                <span>🇦🇺</span>
                <span className="hidden sm:inline">AU</span>
              </Link>
              <Link
                href="/canada"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-bold transition-all min-h-[44px] ${
                  isCanada
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Switch to Canada Guide"
              >
                <span>🇨🇦</span>
                <span className="hidden sm:inline">CA</span>
              </Link>
            </div>
          )}

          {/* Desktop Centralized Outbound CTA - GeoGated */}
          <GeoGate
            loading={<div className="hidden lg:block w-36 h-10 rounded-xl bg-zinc-800/60 animate-pulse" />}
          >
            <a
              href="/go/wild-fortune"
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              aria-label="Visit Wild Fortune (featured operator, opens in new tab)"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all shrink-0 min-h-[44px]"
            >
              <ZapIcon className="w-4 h-4 text-black" />
              <span>Featured Offer</span>
            </a>
          </GeoGate>

          {/* Mobile Hamburger Button (44x44 tap area) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0818] border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl w-full">
          <nav className="flex flex-col space-y-2 font-semibold text-xs text-zinc-200">
            <Link
              href="#top-offers"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-amber-400 flex items-center justify-between min-h-[44px]"
            >
              <span>🎰 {country === 'AU' ? 'Featured Aussie Pokies' : 'Featured Canadian Casinos'}</span>
              <span className="text-xs text-amber-400 font-bold">Review →</span>
            </Link>
            <Link
              href="#banking-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-amber-400 flex items-center justify-between min-h-[44px]"
            >
              <span>⚡ {country === 'AU' ? 'PayID Banking Guide' : 'Interac Banking Guide'}</span>
              <span className="text-xs text-emerald-400 font-bold">Info →</span>
            </Link>
            <Link
              href="/how-we-rate"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-amber-400 flex items-center justify-between min-h-[44px]"
            >
              <span>⚖️ Editorial Rating Methodology</span>
              <span className="text-xs text-zinc-400 font-bold">Read →</span>
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:text-amber-400 flex items-center justify-between min-h-[44px]"
            >
              <span>❓ Legal & Regulatory FAQ</span>
              <span className="text-xs text-zinc-400 font-bold">Read →</span>
            </Link>
          </nav>

          {/* Mobile Direct Action Button - GeoGated */}
          <GeoGate
            loading={<div className="w-full h-12 rounded-lg bg-zinc-800/60 animate-pulse" />}
            fallback={
              <div className="w-full py-3 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs text-center font-medium min-h-[44px] flex items-center justify-center">
                Offers restricted in your region (Canada only)
              </div>
            }
          >
            <a
              href="/go/wild-fortune"
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              aria-label="Visit Wild Fortune (featured operator, opens in new tab)"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-98 transition-all min-h-[44px]"
            >
              <ZapIcon className="w-4 h-4 text-black shrink-0" />
              <span>VIEW FEATURED OPERATOR OFFER</span>
            </a>
          </GeoGate>
        </div>
      )}
    </header>
  );
}
