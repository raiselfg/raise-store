import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/shared/lib/prisma';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: query.toLowerCase().trim(),
          mode: 'insensitive',
        },
      },
      include: {
        images: true,
        brand: true,
        category: true,
        sizes: {
          include: {
            size: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });

    const response = NextResponse.json(products);

    response.headers.set(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=60'
    );

    return response;
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json([], { status: 500 });
  }
}
