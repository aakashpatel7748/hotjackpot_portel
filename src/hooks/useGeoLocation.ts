'use client';

import { useGeo, GeoContextValue } from '@/components/GeoProvider';

export type GeoState = GeoContextValue;

export function useGeoLocation(): GeoState {
  return useGeo();
}

export { useGeo };
