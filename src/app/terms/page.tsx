import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LAST_UPDATED } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Service & Legal Disclaimer | HotJackpot',
  description: 'Terms of service, affiliate disclosure, and legal disclaimers governing the use of HotJackpot.',
  alternates: {
    canonical: 'https://hotjackpot.in/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0714] text-zinc-100 flex flex-col font-sans">
      <Header country="CA" />
      <main className="flex-1 py-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto space-y-6 w-full text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <nav className="text-xs text-zinc-400 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">Terms of Service</span>
        </nav>

        <h1 className="text-2xl sm:text-4xl font-black text-white">Terms of Service & Disclaimer</h1>
        <p className="text-zinc-400 text-xs">Last updated: {LAST_UPDATED}</p>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Informational Purpose Only</h2>
          <p>
            HotJackpot is strictly an informational and comparison portal. We are not a gambling operator and do
            not offer, facilitate, or accept real-money bets, deposits, or wagers. All reviews, guides, and ratings
            represent editorial opinions based on publicly available operator specifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Legal Jurisdiction and User Responsibility</h2>
          <p>
            Online gambling laws vary by country, state, and province. In Canada,
            Ontario maintains a commercial regime under iGaming Ontario (iGO). Users are solely responsible
            for verifying the legality of accessing third-party gaming platforms within their respective jurisdiction.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Affiliate Relationship Disclosure</h2>
          <p>
            HotJackpot participates in affiliate marketing programs. Clicking on referral links on this site may result
            in an affiliate commission paid to HotJackpot by third-party operators at zero additional expense to you.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Age Restrictions</h2>
          <p>
            You must be of legal gambling age in your jurisdiction (19+ in most Canadian provinces;
            18+ in Alberta and Quebec) to use this website.
          </p>
        </section>
      </main>
      <Footer country="CA" />
    </div>
  );
}
