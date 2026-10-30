'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieNotice() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('hotjackpot_cookie_consent');
      if (!consent) {
        setShowBanner(true);
      }
    } catch {
      // localStorage may be disabled in private browsing
    }
  }, []);

  const handleAccept = (choice: 'all' | 'essential') => {
    try {
      localStorage.setItem('hotjackpot_cookie_consent', choice);
      window.dispatchEvent(new Event('hotjackpot-consent-updated'));
    } catch {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#0d091a] border-t border-amber-500/30 shadow-2xl transition-all"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        <p className="text-xs text-zinc-300 leading-relaxed text-center sm:text-left">
          We use functional cookies to remember your regional preferences and anonymous traffic metrics.
          Read our{' '}
          <Link href="/privacy" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
            Terms
          </Link>.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleAccept('essential')}
            className="min-h-[44px] px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={() => handleAccept('all')}
            className="min-h-[44px] px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}

