import React from 'react';
import Link from 'next/link';
import { Country } from '@/data/casinoOffers';
import { TrophyIcon, ShieldCheckIcon, LockIcon } from './Icons';

interface FooterProps {
  country: Country;
}

export function Footer({ country }: FooterProps) {
  return (
    <footer className="bg-[#07050d] border-t border-zinc-800/80 pt-10 sm:pt-14 pb-8 sm:pb-12 text-zinc-400 text-xs w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-8 sm:space-y-10">
        {/* Top Responsible Gambling Alert Banner */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-950 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-5 justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-600/20 text-red-500 font-black text-base sm:text-xl flex items-center justify-center shrink-0 border border-red-500/40">
              {country === 'AU' ? '18+' : '19+'}
            </span>
            <div>
              <h4 className="font-bold text-white text-xs sm:text-sm">
                Play Responsibly • Set Limits & Stay in Control
              </h4>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                {country === 'AU'
                  ? 'Gambling involves significant financial risk. If you need support, contact Gambling Help Online at 1800 858 858 or visit www.betstop.gov.au.'
                  : 'Gambling can be addictive. If you need assistance, contact ConnexOntario at 1-866-531-2600 or visit www.responsiblegambling.org.'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md sm:rounded-lg bg-zinc-900 text-zinc-300 font-bold text-[10px] sm:text-xs border border-zinc-800 hover:text-white transition-colors"
            >
              BeGambleAware.org
            </a>
            {country === 'AU' ? (
              <a
                href="https://www.gamblinghelponline.org.au"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md sm:rounded-lg bg-zinc-900 text-zinc-300 font-bold text-[10px] sm:text-xs border border-zinc-800 hover:text-white transition-colors"
              >
                GamblingHelpOnline.org.au
              </a>
            ) : (
              <a
                href="https://www.connexontario.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md sm:rounded-lg bg-zinc-900 text-zinc-300 font-bold text-[10px] sm:text-xs border border-zinc-800 hover:text-white transition-colors"
              >
                ConnexOntario.ca
              </a>
            )}
          </div>
        </div>

        {/* Brand & Editorial Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                <TrophyIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white">HOTJACKPOT.IN</span>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed text-[11px] sm:text-xs">
              HotJackpot is an independent editorial portal providing reviews, payment guides, and operator comparisons.
              We analyze stated terms, wagering requirements, and banking options for Australian and Canadian audiences.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-zinc-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" /> Editorial Standards
              </span>
              <span className="flex items-center gap-1">
                <LockIcon className="w-3.5 h-3.5 text-emerald-400" /> SSL Encrypted
              </span>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
              {country === 'AU' ? 'Featured Pokies Reviews' : 'Featured Casino Reviews'}
            </h5>
            <ul className="space-y-1.5 sm:space-y-2 text-zinc-400 text-[11px] sm:text-xs">
              <li>
                <Link href={country === 'CA' ? "/canada/reviews/wild-fortune" : "/reviews/wild-fortune"} className="hover:text-amber-400 transition-colors">
                  Wild Fortune Overview
                </Link>
              </li>
              <li>
                <Link href={country === 'CA' ? "/canada/reviews/casino-rocket" : "/reviews/casino-rocket"} className="hover:text-amber-400 transition-colors">
                  Casino Rocket Overview
                </Link>
              </li>
              <li>
                <Link href={country === 'CA' ? "/canada/reviews/ritzo" : "/reviews/ritzo"} className="hover:text-amber-400 transition-colors">
                  Ritzo Casino Overview
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">Regional & Trust Pages</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-zinc-400 text-[11px] sm:text-xs">
              <li>
                <Link href="/australia" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>🇦🇺</span> Australia Pokies Guide
                </Link>
              </li>
              <li>
                <Link href="/canada" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>🇨🇦</span> Canada Casino Guide
                </Link>
              </li>
              <li>
                <Link href="/how-we-rate" className="hover:text-amber-400 transition-colors">
                  ⚖️ How We Rate Methodology
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  ℹ️ About HotJackpot
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  🔒 Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  📄 Terms & Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  ✉️ Editorial Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Transparent Affiliate & Legal Disclaimer */}
        <div className="border-t border-zinc-800/60 pt-4 sm:pt-6 text-[10px] text-zinc-500 leading-relaxed space-y-2">
          <p>
            <strong>Affiliate & Advertising Disclosure:</strong> HotJackpot is an independent review and comparison
            website supported by affiliate marketing relationships. Links displayed on this website are referral
            links. When users click on these links and register or deposit at an online casino, HotJackpot may receive
            monetary compensation from the operator. HotJackpot is not a gambling operator and does not handle bets,
            deposits, or player funds.
          </p>
          <p>
            <strong>Legal & Regulatory Disclaimer:</strong> Interactive gambling regulations vary significantly by
            jurisdiction. In Australia, the Interactive Gambling Act 2001 (IGA) prohibits operators from offering online
            casino games to Australian residents; the operators reviewed on this site operate under international
            offshore licenses (e.g. Curacao). In Canada, Ontario regulates commercial gaming through iGaming Ontario (iGO).
            Users are solely responsible for ensuring compliance with the laws of their state, province, or country.
            Gambling is strictly restricted to individuals {country === 'AU' ? '18+' : '19+'} years of age.
          </p>
          <p>
            © 2026 HotJackpot.in. All rights reserved. Editorial Inquiries: <a href="mailto:john@hotjackpot.in" className="text-zinc-400 hover:text-amber-400 underline">john@hotjackpot.in</a> • Postal Correspondence: HotJackpot Editorial Desk, Level 2, Connaught Circus, New Delhi 110001, India. For informational and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
