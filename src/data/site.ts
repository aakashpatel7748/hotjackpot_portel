export const SITE_NAME = 'HotJackpot';
export const SITE_URL = 'https://hotjackpot.in';
export const CONTACT_EMAIL = 'contact@hotjackpot.in';
export const POSTAL_ADDRESS = 'HotJackpot Editorial Desk, Level 2, Connaught Circus, New Delhi 110001, India';
export const LAST_CHECKED = 'Oct 2026';
export const LAST_UPDATED = 'October 2026';

// Countries where Visit buttons / promo codes / /go redirects are active. Everything geo-related reads this one constant.
export const ELIGIBLE_COUNTRIES: readonly string[] = ['CA', 'AU'];

export function isEligible(country: string | null | undefined): boolean {
  if (!country) return false;
  return ELIGIBLE_COUNTRIES.includes(country.toUpperCase());
}

