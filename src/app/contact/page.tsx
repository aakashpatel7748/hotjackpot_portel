import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CONTACT_EMAIL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us | HotJackpot Editorial Desk',
  description: 'Get in touch with the HotJackpot editorial team for inquiries, corrections, or feedback.',
  alternates: {
    canonical: 'https://hotjackpot.in/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0714] text-zinc-100 flex flex-col font-sans">
      <Header country="CA" />
      <main className="flex-1 py-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto space-y-6 w-full text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <nav className="text-xs text-zinc-400 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">Contact Us</span>
        </nav>

        <h1 className="text-2xl sm:text-4xl font-black text-white">Contact the Editorial Desk</h1>
        <p className="text-sm text-zinc-400">
          Have a question about our reviews, an operator correction, or general inquiry? We welcome your input.
        </p>

        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4 max-w-xl">
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Direct Editorial Contact</h2>
            <p className="text-zinc-400 mt-1">
              For direct editorial questions, review feedback, or operator corrections:
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 font-semibold hover:underline mt-1 block">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="border-t border-zinc-800 pt-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">General & Support</h2>
            <p className="text-zinc-400 mt-1">
              For newsletter unsubscriptions or privacy inquiries:
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 font-semibold hover:underline mt-1 block">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 text-xs text-zinc-400 max-w-xl">
          <strong>Note on Casino Support:</strong> HotJackpot is an independent review guide, not a gambling operator.
          If you require customer service regarding a casino account, please reach out directly to the respective
          casino operator&apos;s support desk via their official website.
        </div>
      </main>
      <Footer country="CA" />
    </div>
  );
}
