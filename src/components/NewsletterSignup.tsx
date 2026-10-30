'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Country } from '@/data/casinoOffers';
import { ShieldCheckIcon, ZapIcon } from './Icons';

interface NewsletterSignupProps {
  country: Country;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          'error-callback'?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

export function NewsletterSignup({ country }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [hpWebsite, setHpWebsite] = useState('');
  const [consented, setConsented] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileContainerRef.current) return;

    const renderWidget = () => {
      if (window.turnstile && turnstileContainerRef.current) {
        window.turnstile.render(turnstileContainerRef.current, {
          sitekey: turnstileSiteKey,
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const existingScript = document.getElementById('cf-turnstile-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'cf-turnstile-script';
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback';
        script.async = true;
        script.defer = true;
        window.onloadTurnstileCallback = renderWidget;
        document.head.appendChild(script);
      }
    }
  }, [turnstileSiteKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consented) {
      setErrorMessage(`Please confirm you are of legal gambling age (${country === 'AU' ? '18+' : '19+'}) and agree to receive updates.`);
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setErrorMessage('Please complete the verification check.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          country,
          hp_website: hpWebsite,
          turnstileToken,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      setEmail('');
      setFirstName('');
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(msg);
    }
  };

  return (
    <section className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#160d2e] via-[#0f0920] to-[#0a0614] border border-amber-500/30 p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ZapIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Bonus Alerts &amp; Banking Updates</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-white leading-tight break-words">
            Stay Updated on Welcome Offers &amp; Banking Changes
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {country === 'AU'
              ? 'Receive notifications when Australian pokie platforms update PayID limits, wagering rules, or update promotional terms. Zero spam, unsubscribe at any time.'
              : 'Receive notifications when Canadian casino operators update Interac rails, CAD reload terms, or licensing status. Zero spam, unsubscribe at any time.'}
          </p>

          {status === 'success' ? (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 mt-4">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Thanks, you&apos;re subscribed.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-3 text-left">
              {/* Spam bot honeypot field - invisible to human visitors */}
              <input
                type="text"
                name="hp_website"
                value={hpWebsite}
                onChange={(e) => setHpWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="min-h-[44px] px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 sm:w-1/3"
                />
                <input
                  type="email"
                  required
                  placeholder="Enter your personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-[44px] flex-1 px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="min-h-[44px] px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 shrink-0 disabled:opacity-50 cursor-pointer flex items-center justify-center"
                >
                  {status === 'loading' ? 'Joining...' : 'Subscribe'}
                </button>
              </div>

              {/* Turnstile widget container when site key is configured */}
              {turnstileSiteKey && (
                <div ref={turnstileContainerRef} className="pt-2 flex justify-center sm:justify-start"></div>
              )}

              {/* Explicit Legal Consent Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={consented}
                  onChange={(e) => setConsented(e.target.checked)}
                  className="min-h-[20px] min-w-[20px] mt-0.5 rounded border-zinc-700 bg-black/50 text-amber-500 focus:ring-0 shrink-0 cursor-pointer"
                />
                <span className="text-xs text-zinc-400 leading-snug">
                  I confirm that I am {country === 'AU' ? '18+' : '19+'} years of age and consent to receiving
                  editorial casino guides and promotional alerts. I understand I can unsubscribe anytime via the
                  link in every email.
                </span>
              </label>

              {errorMessage && (
                <p className="text-xs text-red-400 font-medium pt-1 text-center sm:text-left">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
