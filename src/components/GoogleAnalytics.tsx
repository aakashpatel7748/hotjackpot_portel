'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check initial consent from localStorage
    try {
      const consent = localStorage.getItem('hotjackpot_cookie_consent');
      if (consent === 'all') {
        setHasConsent(true);
      }
    } catch {}

    // Listen for real-time consent updates from CookieNotice banner
    const handleConsentUpdate = () => {
      try {
        const consent = localStorage.getItem('hotjackpot_cookie_consent');
        if (consent === 'all') {
          setHasConsent(true);
        } else {
          setHasConsent(false);
        }
      } catch {}
    };

    window.addEventListener('hotjackpot-consent-updated', handleConsentUpdate);
    return () => {
      window.removeEventListener('hotjackpot-consent-updated', handleConsentUpdate);
    };
  }, []);

  // Strict privacy: if GA ID is missing OR user did not consent to 'all', load nothing
  if (!gaId || !hasConsent) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname
            });
          `,
        }}
      />
    </>
  );
}
