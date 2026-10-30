'use client';

import React from 'react';
import { useGeo } from './GeoProvider';

interface GeoGateProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loading?: React.ReactNode;
}

export function GeoGate({ children, fallback = null, loading = null }: GeoGateProps) {
  const { isEligible, isLoading } = useGeo();

  if (isLoading) {
    return <>{loading}</>;
  }

  if (isEligible) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

