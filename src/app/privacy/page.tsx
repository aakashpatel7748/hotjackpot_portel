import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | HotJackpot',
  description: 'Our privacy policy explains how HotJackpot collects, uses, and safeguards your information.',
  alternates: {
    canonical: 'https://hotjackpot.in/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0714] text-zinc-100 flex flex-col font-sans">
      <Header country="AU" />
      <main className="flex-1 py-10 px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto space-y-6 w-full text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <nav className="text-xs text-zinc-400 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">Privacy Policy</span>
        </nav>

        <h1 className="text-2xl sm:text-4xl font-black text-white">Privacy Policy</h1>
        <p className="text-zinc-400 text-xs">Last updated: October 2026</p>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Who Operates HotJackpot</h2>
          <p>
            HotJackpot (https://hotjackpot.in) is operated as an independent digital comparison and editorial website
            by the HotJackpot Editorial Desk. We do not operate casino games, process real-money bets, or
            hold player funds.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Information We Collect &amp; Where It Is Stored</h2>
          <p>
            We collect minimal information necessary to deliver our services:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
            <li>
              <strong>Newsletter Subscribers:</strong> When you subscribe to our VIP Bonus Alerts, we collect your
              email address, optional first name, regional preference (AU or CA), and timestamp.
            </li>
            <li>
              <strong>Data Storage:</strong> Subscriber records are transmitted via secure HTTPS and stored in our
              cloud Google Sheets database and email service provider infrastructure. We do not sell, rent, or lease
              your email data to third parties.
            </li>
            <li>
              <strong>Technical Log Data:</strong> Non-identifying server logs (browser type, device viewport, referring
              page, and general geographic country) are collected to ensure site performance and security.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Cookies &amp; Outbound Referral Links</h2>
          <p>
            Our website uses session cookies to remember your country preference (Australia or Canada) and anonymous
            traffic metrics. When you click outbound links on this site (such as operator review links), you are redirected
            to third-party websites with referral attribution parameters (UTM tags). Third-party casino websites maintain
            their own independent privacy policies and terms of service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Email Marketing Compliance (Spam Act &amp; CASL)</h2>
          <p>
            We adhere to international anti-spam legislation, including Australia’s Spam Act 2003 and Canada’s Anti-Spam
            Legislation (CASL). All marketing emails we transmit include:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
            <li>Clear sender identification from HotJackpot.</li>
            <li>A working, instant one-click unsubscribe mechanism in the footer.</li>
            <li>A genuine reply-to address (john@hotjackpot.in) and verifiable physical/postal correspondence address (HotJackpot Editorial Desk, Level 2, Connaught Circus, New Delhi 110001, India).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">5. Your Data Rights &amp; Erasure Requests</h2>
          <p>
            You have the right to request access to, correction of, or permanent deletion of your stored subscriber details.
            To request full data erasure, please submit a request via our{' '}
            <Link href="/contact" className="text-amber-400 underline">
              Contact Page
            </Link>{' '}
            or directly email us at <a href="mailto:john@hotjackpot.in" className="text-amber-400 underline">john@hotjackpot.in</a>.
          </p>
        </section>
      </main>
      <Footer country="AU" />
    </div>
  );
}
