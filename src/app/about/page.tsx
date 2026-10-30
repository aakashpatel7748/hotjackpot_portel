import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrophyIcon, ShieldCheckIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About HotJackpot: Independent iGaming Comparison & Editorial Desk',
  description:
    'Learn about HotJackpot, an independent editorial platform reviewing stated terms, banking options, and wagering rules for Australian and Canadian audiences.',
  alternates: {
    canonical: 'https://hotjackpot.in/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0714] text-zinc-100 flex flex-col font-sans">
      <Header country="CA" />
      <main className="flex-1 py-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto space-y-8 w-full">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-400 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">About Us</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">About HotJackpot</span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Independent iGaming Comparison & Stated Terms Research
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            HotJackpot is an independent digital comparison portal and review guide. We collect,
            summarize, and benchmark publicly stated welcome bonuses, wagering requirements, and banking rails
            (such as PayID and Interac) for readers researching international online casinos.
          </p>
        </div>

        {/* Who Runs This Site */}
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
          <h2 className="text-lg font-bold text-white">Who Runs This Site</h2>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-xl flex items-center justify-center shrink-0">
              <TrophyIcon className="w-7 h-7 text-amber-400" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong>HotJackpot Editorial Desk</strong> — Independent Research & Review Publication
              </p>
              <p className="text-zinc-400">
                HotJackpot was created to cut through confusing casino promotional banners by listing the actual
                stated wagering multipliers, minimum qualifying deposits, processing speeds, and available payment
                methods in clear side-by-side comparison tables.
              </p>
              <p className="text-zinc-400">
                HotJackpot does not operate casino games, process real-money wagers, or handle player funds. All
                information is compiled directly from public operator terms and conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Editorial Standards</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We present operator-stated bonus details, wagering conditions, and payment methods plainly, without
              fabricated player reviews, fake laboratory audits, or exaggerated payout claims.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <h2 className="text-base font-bold text-white">How We Are Funded</h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              HotJackpot is 100% free to access. We earn referral commissions through affiliate links when visitors
              register or deposit at featured operators. These commercial relationships do not alter stated operator terms.
            </p>
          </div>
        </div>

        {/* Legal Advisory & Responsible Gaming */}
        <div className="p-6 rounded-2xl bg-black/50 border border-amber-500/20 text-xs sm:text-sm text-zinc-400 space-y-3">
          <h3 className="font-bold text-white">Important Legal Disclaimer & Responsible Gambling</h3>
          <p className="leading-relaxed">
            Online gambling legislation varies by region. In Australia, under the Interactive Gambling Act 2001 (IGA),
            offshore casino services are not licensed domestically. In Canada, commercial gaming in Ontario is
            regulated by iGaming Ontario (iGO). We strongly advise consulting qualified legal counsel in your
            jurisdiction.
          </p>
          <p className="leading-relaxed">
            Gambling carries financial risk. If you or someone you know is struggling with gambling harm, free support
            is available in Australia via Gambling Help Online (1800 858 858, www.gamblinghelponline.org.au) or
            BetStop (www.betstop.gov.au), and in Canada via ConnexOntario (1-866-531-2600). Strictly 18+/19+ only.
          </p>
        </div>
      </main>
      <Footer country="CA" />
    </div>
  );
}
