'use client';

import React, { useState, useEffect } from 'react';
import { ELIGIBLE_COUNTRIES } from '@/data/site';

export function RegionUnavailableNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('region') === 'unavailable') {
        setShow(true);
      }
    }
  }, []);

  if (!show) return null;

  const countryNames: Record<string, string> = {
    CA: 'Canada',
    AU: 'Australia',
  };
  const eligibleList = ELIGIBLE_COUNTRIES.map((c) => countryNames[c] || c).join(', ');

  return (
    <aside aria-label="Region Availability" className="bg-amber-500/15 border-b border-amber-500/40 text-amber-200 px-4 py-2 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase tracking-wider text-amber-400 shrink-0">Region Notice:</span>
          <span>Offers are only shown to visitors in {eligibleList}.</span>
        </div>
        <button
          onClick={() => setShow(false)}
          aria-label="Dismiss regional availability notice"
          className="text-amber-300 hover:text-white font-black text-sm px-3 py-1 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer transition-colors"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}

