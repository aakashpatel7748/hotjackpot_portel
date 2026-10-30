import { ELIGIBLE_COUNTRIES } from '@/data/site';

/**
 * Extracts country code from request headers.
 * Reads ONLY `x-vercel-ip-country` unless `process.env.GEO_PROVIDER === 'cloudflare'`.
 * Returns uppercase 2-letter country code or null.
 */
export function getCountry(headers: Headers): string | null {
  const vercel = headers.get('x-vercel-ip-country');
  if (vercel && vercel.trim()) {
    return vercel.trim().toUpperCase();
  }

  if (process.env.GEO_PROVIDER === 'cloudflare') {
    const cf = headers.get('cf-ipcountry');
    if (cf && cf.trim()) {
      return cf.trim().toUpperCase();
    }
  }

  return null;
}

/**
 * Checks if country is in ELIGIBLE_COUNTRIES.
 * Rule:
 * - If header is missing AND NODE_ENV !== 'production' -> eligible (local dev).
 * - If header is missing in production -> NOT eligible (fail closed).
 */
export function isEligibleCountry(country: string | null): boolean {
  if (!country) {
    return process.env.NODE_ENV !== 'production';
  }
  return ELIGIBLE_COUNTRIES.includes(country.toUpperCase());
}

