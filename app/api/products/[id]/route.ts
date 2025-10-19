import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log('Requested ID:', params.id);

  try {
    if (!params.id || typeof params.id !== 'string') {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        images: true,
        brand: true,
        category: true,
        sizes: { include: { size: true } },
      },
    });

    console.log('Product found:', product ? 'Yes' : 'No');

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const response = NextResponse.json(product);

    response.headers.set(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=60'
    );

    return response;
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
