import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    const response = NextResponse.json(brands);

    response.headers.set(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=60'
    );

    return response;
  } catch (error) {
    console.error('Brands API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch brands' },
      { status: 500 }
    );
  }
}
