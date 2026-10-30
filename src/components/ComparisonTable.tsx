import { CASINO_OFFERS, Country } from '@/data/casinoOffers';
import { StarIcon, ExternalLinkIcon } from './Icons';
import { GeoGate } from './GeoGate';

interface ComparisonTableProps {
  country: Country;
}

export function ComparisonTable({ country }: ComparisonTableProps) {
  return (
    <section id="comparison-table" className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="mb-4 sm:mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Side-By-Side Technical Specifications
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-1 break-words">
          {country === 'AU' ? 'Compare Australian Pokies Platforms' : 'Compare Canadian Casino Platforms'}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Direct overview of operator-stated wagering multipliers, estimated processing speeds, and minimum qualifying deposits.
        </p>

        {/* Mobile Swipe Cue */}
        <div className="md:hidden mt-3 py-1.5 px-3 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center gap-2">
          <span>👉</span>
          <span>Swipe table horizontally to compare all specs</span>
          <span>👈</span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-xl w-full">
        <table className="w-full text-left border-collapse min-w-[580px]">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/90 text-xs font-black uppercase tracking-wider text-zinc-400">
              <th className="py-3 sm:py-4 px-3 sm:px-5">Casino Operator</th>
              <th className="py-3 sm:py-4 px-3">Stated Welcome Offer</th>
              <th className="py-3 sm:py-4 px-3">Wagering</th>
              <th className="py-3 sm:py-4 px-3">Min Deposit</th>
              <th className="py-3 sm:py-4 px-3">{country === 'AU' ? 'PayID Speed' : 'Interac Speed'}</th>
              <th className="py-3 sm:py-4 px-3">Editor Rating</th>
              <th className="py-3 sm:py-4 px-3 sm:px-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
            {CASINO_OFFERS.map((offer) => {
              const bonus = offer.bonus[country];
              const payout = offer.payoutSpeed[country];

              return (
                <tr key={offer.id} className="hover:bg-zinc-800/40 transition-colors">
                  {/* Name + Rank */}
                  <td className="py-3 sm:py-4 px-3 sm:px-5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-zinc-800 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 border border-zinc-700">
                        #{offer.rank}
                      </span>
                      <img
                        src={offer.logoUrl}
                        alt=""
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover border border-amber-500/30 shrink-0 bg-zinc-950"
                      />
                      <div>
                        <p className="font-extrabold text-white text-xs sm:text-sm">{offer.name}</p>
                        <p className="text-xs text-zinc-400">{offer.gamesCount}</p>
                      </div>
                    </div>
                  </td>

                  {/* Bonus */}
                  <td className="py-3 sm:py-4 px-3">
                    <p className="font-bold text-amber-300 text-xs leading-snug">{bonus.headline}</p>
                    <GeoGate
                      loading={<span className="text-xs text-zinc-400">Checking...</span>}
                      fallback={
                        <p className="text-xs text-zinc-400 font-mono mt-0.5">
                          Code: Restricted
                        </p>
                      }
                    >
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">
                        Code: {bonus.code}
                      </p>
                    </GeoGate>
                  </td>

                  {/* Wagering */}
                  <td className="py-3 sm:py-4 px-3 text-xs font-semibold text-zinc-300">{offer.wagering}</td>

                  {/* Min Deposit */}
                  <td className="py-3 sm:py-4 px-3 text-xs font-semibold text-white">{bonus.minDeposit}</td>

                  {/* Payout */}
                  <td className="py-3 sm:py-4 px-3 text-xs font-medium text-emerald-400">{payout.split('(')[0]}</td>

                  {/* Rating */}
                  <td className="py-3 sm:py-4 px-3">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white text-xs">{offer.rating}</span>
                    </div>
                  </td>

                  {/* CTA */}
                  <td className="py-3 sm:py-4 px-3 sm:px-5 text-right">
                    <GeoGate
                      loading={
                        <span className="inline-block w-16 h-8 bg-zinc-800 animate-pulse rounded-lg"></span>
                      }
                      fallback={
                        <span className="inline-block px-2.5 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium whitespace-nowrap">
                          Restricted
                        </span>
                      }
                    >
                      <a
                        href={offer.goUrl}
                        target="_blank"
                        rel="sponsored nofollow noopener noreferrer"
                        aria-label={`Visit official site of ${offer.name}`}
                        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                      >
                        <span>Visit</span>
                        <ExternalLinkIcon className="w-3 h-3 text-black" />
                      </a>
                    </GeoGate>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-zinc-400 mt-2 text-right">
        *Affiliate disclosure: We may earn a commission if you register via our links. Stated bonus terms set by operators. {country === 'AU' ? '18+' : '19+'} only.
      </p>
    </section>
  );
}
