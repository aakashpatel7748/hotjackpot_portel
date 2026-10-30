'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ELIGIBLE_COUNTRIES } from '@/data/site';

export interface GeoContextValue {
  country: string | null;
  isEligible: boolean;
  isLoading: boolean;
}

const GeoContext = createContext<GeoContextValue>({
  country: null,
  isEligible: false,
  isLoading: true,
});

const CACHE_KEY = 'hotjackpot_geo_v2';
const TTL_MS = 10 * 60 * 1000; // 10 minutes

export function GeoProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GeoContextValue>({
    country: null,
    isEligible: false,
    isLoading: true,
  });

  useEffect(() => {
    // 1. URL preview override: ?geo=ca / ?geo=au / ?geo=restricted
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const forcedGeo = urlParams.get('geo')?.toUpperCase();
      if (forcedGeo) {
        const isElig = ELIGIBLE_COUNTRIES.includes(forcedGeo);
        setState({
          country: forcedGeo,
          isEligible: isElig,
          isLoading: false,
        });
        return;
      }
    }

    // 2. Read from sessionStorage (try/catch protected)
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.expiry && parsed.expiry > Date.now()) {
          setState({
            country: parsed.country ?? null,
            isEligible: Boolean(parsed.isEligible),
            isLoading: false,
          });
          return;
        }
      }
    } catch {
      // sessionStorage unavailable
    }

    // 3. Single fetch to /api/geo
    fetch('/api/geo')
      .then((res) => {
        if (!res.ok) throw new Error('geo fetch failed');
        return res.json();
      })
      .then((data) => {
        const value = {
          country: data.country ?? null,
          isEligible: Boolean(data.isEligible),
          isLoading: false,
        };
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ ...value, expiry: Date.now() + TTL_MS })
          );
        } catch {
          // sessionStorage full or blocked
        }
        setState(value);
      })
      .catch(() => {
        // On fetch error, show the buttons (server-side /go check still enforces)
        setState({
          country: null,
          isEligible: true,
          isLoading: false,
        });
      });
  }, []);

  return <GeoContext.Provider value={state}>{children}</GeoContext.Provider>;
}

export function useGeo(): GeoContextValue {
  return useContext(GeoContext);
}

