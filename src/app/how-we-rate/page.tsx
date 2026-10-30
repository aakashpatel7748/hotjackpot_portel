import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Editorial Rating Methodology: How We Evaluate Online Casinos | HotJackpot',
  description:
    'Detailed breakdown of our 5-pillar editorial review methodology. Learn how we evaluate stated wagering requirements, payment rails, software providers, and licensing.',
  alternates: {
    canonical: 'https://hotjackpot.in/how-we-rate',
  },
};

export default function HowWeRatePage() {
  return (
    <div className="min-h-screen bg-[#0a0714] text-zinc-100 flex flex-col font-sans">
      <Header country="CA" />
      <main className="flex-1 py-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto space-y-8 w-full">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-400 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">How We Rate</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Transparency & Editorial Standards
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Our 5-Pillar Editorial Rating Methodology
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Ratings displayed on HotJackpot are subjective editorial evaluations based on our qualitative assessment
            of publicly stated operator terms, banking options, and software suites. They are not automated algorithmic
            scores or regulatory laboratory test certifications. Below is the 5-pillar editorial framework we use
            to guide our opinions:
          </p>
        </div>

        {/* 5 Pillars */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">1. Stated Bonus Terms & Wagering Fairness (25% Weight)</h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-bold">25%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We scrutinize the operator&apos;s promotional terms:
            </p>
            <ul className="text-xs sm:text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li><strong>Wagering multiplier:</strong> Under 40x is considered player-friendly; over 50x lowers the rating score.</li>
              <li><strong>Deposit qualification:</strong> Realistic minimum deposit thresholds (e.g. AU$20 / C$20).</li>
              <li><strong>Game contribution:</strong> Clear disclosure of pokie/slot wagering weightings vs. table games.</li>
              <li><strong>Transparency:</strong> Whether terms are easily accessible in the cashier prior to depositing.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">2. Banking Rails & Payout Timeframes (20% Weight)</h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold">20%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Fast, reliable funds movement is critical:
            </p>
            <ul className="text-xs sm:text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li><strong>Local rail availability:</strong> PayID for Australian accounts; Interac e-Transfer for Canadian accounts.</li>
              <li><strong>Processing transparency:</strong> Stated cashout clearance timeframes without artificial hold periods.</li>
              <li><strong>Currency handling:</strong> Support for native AUD and CAD balances to avoid foreign exchange markups.</li>
              <li><strong>Withdrawal limits:</strong> Reasonable weekly and monthly cashout caps for standard accounts.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">3. Software Providers & Game Selection (20% Weight)</h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-bold">20%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              The quality of the gaming library is determined by tier-1 software partnerships:
            </p>
            <ul className="text-xs sm:text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li><strong>Studio pedigree:</strong> Presence of certified studios such as Pragmatic Play, Relax Gaming, Nolimit City, and Evolution.</li>
              <li><strong>Format variety:</strong> Balance between modern Hold & Win pokies, Megaways, classic 3-reel slots, and live table games.</li>
              <li><strong>Mobile compatibility:</strong> Responsive HTML5 performance across modern mobile and desktop browsers.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">4. Licensing & Regulatory Disclosure (25% Weight)</h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 font-bold">25%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We require operators to clearly disclose their operational entity and licensing jurisdiction:
            </p>
            <ul className="text-xs sm:text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li><strong>License validation:</strong> Active offshore master license credentials (e.g. Curacao eGaming).</li>
              <li><strong>Data security:</strong> Active 256-bit SSL encryption across all cashier and registration pages.</li>
              <li><strong>Clear legal standing:</strong> Explicit notices regarding jurisdictional limitations (e.g., Australian IGA 2001 and Ontario iGO framework).</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">5. Customer Support & Responsible Gaming Tools (10% Weight)</h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 font-bold">10%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Player safety and assistance mechanisms:
            </p>
            <ul className="text-xs sm:text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li><strong>Support availability:</strong> 24/7 responsive live chat and ticket desks.</li>
              <li><strong>Player control tools:</strong> Built-in deposit limits, cooling-off periods, and self-exclusion options in account settings.</li>
              <li><strong>Responsible gambling links:</strong> Visible signposts to Gambler&apos;s Help, BetStop, and ConnexOntario.</li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="p-6 rounded-2xl bg-black/60 border border-amber-500/20 text-xs text-zinc-400 space-y-2">
          <h3 className="font-bold text-white uppercase tracking-wider text-xs">Affiliate Relationship Disclosure</h3>
          <p>
            HotJackpot earns affiliate referral commissions when visitors click outbound links and register at
            partner casinos. However, commercial agreements do not alter our 5-pillar rating formula. Operators
            with unfair wagering or opaque terms receive lower ratings or are excluded entirely.
          </p>
        </div>
      </main>
      <Footer country="CA" />
    </div>
  );
}
