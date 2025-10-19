import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    const response = NextResponse.json(categories);

    response.headers.set(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=60'
    );

    return response;
  } catch (error) {
    console.error('Categories API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
