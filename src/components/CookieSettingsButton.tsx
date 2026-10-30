'use client';

import React from 'react';

export function CookieSettingsButton() {
  const handleResetCookies = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      localStorage.removeItem('hotjackpot_cookie_consent');
      window.dispatchEvent(new Event('hotjackpot-consent-updated'));
    } catch {
      // localstorage error handling
    }
  };

  return (
    <button
      onClick={handleResetCookies}
      className="text-zinc-400 hover:text-amber-400 underline transition-colors cursor-pointer text-xs py-2 inline-flex items-center min-h-[44px]"
      aria-label="Manage cookie settings"
    >
      ⚙️ Cookie Settings
    </button>
  );
}

