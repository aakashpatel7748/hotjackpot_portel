import { NextRequest, NextResponse } from 'next/server';
import { getCountry, isEligibleCountry } from '@/lib/geo';

export async function GET(request: NextRequest) {
  const country = getCountry(request.headers);
  const isEligible = isEligibleCountry(country);

  return NextResponse.json(
    {
      country,
      isEligible,
    },
    {
      headers: {
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    }
  );
}
