import React from 'react';
import { Country } from '@/data/casinoOffers';
import { ZapIcon } from './Icons';

interface BankingGuideProps {
  country: Country;
}

export function BankingGuide({ country }: BankingGuideProps) {
  if (country === 'AU') {
    return (
      <section id="banking-guide" className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#120a22] via-[#1a0f30] to-[#120a22] border border-amber-500/30 p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5">
              <ZapIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Australian Banking Rails</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight mb-2.5 break-words">
              Why Australian Pokie Players Demand <span className="text-amber-400">PayID</span> in 2026
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 max-w-2xl">
              PayID operates on Australia&apos;s New Payments Platform (NPP), enabling near-instant fund transfers
              between Australian financial institutions. Many international gaming platforms accept PayID to allow
              Australian users to deposit directly from their bank without sharing credit or debit card details.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-xs sm:text-sm mb-2.5">
                    1
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm mb-1">Direct Bank Settlement</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Direct compatibility with Commonwealth Bank (CommBank), ANZ, NAB, Westpac, and Bendigo Bank.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-xs sm:text-sm mb-2.5">
                    2
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm mb-1">Zero Conversion Fees</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Transactions settle in pure Australian Dollars (AUD). Never pay 3-5% hidden foreign FX exchange markups.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-black flex items-center justify-center text-xs sm:text-sm mb-2.5">
                    3
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm mb-1">Total Privacy</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Use only your registered phone number or email as the PayID identifier. Never reveal credit card numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="banking-guide" className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#120a22] via-[#1a0f30] to-[#120a22] border border-amber-500/30 p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-2.5">
            <ZapIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Canadian Banking Rails</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight mb-2.5 break-words">
            How <span className="text-red-400">Interac e-Transfer</span> Operates for Canadian Players
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 max-w-2xl">
            Interac e-Transfer is Canada&apos;s primary domestic funds transfer network, connecting directly to
            RBC, TD Canada Trust, Scotiabank, BMO, and CIBC accounts. Canadian players commonly use Interac for
            deposits due to its high reliability and Canadian Dollar settlement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-500/20 text-red-400 font-black flex items-center justify-center text-xs sm:text-sm mb-2.5">
                  1
                </div>
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">Direct Canadian Bank Link</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Direct connection with all Big 5 Canadian banks without requiring third-party payment gateways.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-xs sm:text-sm mb-2.5">
                  2
                </div>
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">CAD Currency Handling</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Deposits and withdrawals are processed directly in Canadian Dollars (CAD) to eliminate FX penalties.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/50 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-black flex items-center justify-center text-xs sm:text-sm mb-2.5">
                  3
                </div>
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">High Transaction Reliability</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Interac e-Transfer avoids common credit card transaction flags, offering seamless deposit approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
