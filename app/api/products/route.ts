import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categories = searchParams.get('category');
    const brands = searchParams.get('brand');
    const sortBy = searchParams.get('sortBy');

    console.log('Request params:', { categories, brands, sortBy });

    const where: any = {};

    if (categories) {
      const categoryArray = categories.split(',');
      where.category = {
        name: {
          in: categoryArray,
        },
      };
    }

    if (brands) {
      const brandArray = brands.split(',');
      where.brand = {
        name: {
          in: brandArray,
        },
      };
    }

    let orderBy: any = { createdAt: 'desc' };
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          orderBy = { price: 'asc' };
          break;
        case 'price-desc':
          orderBy = { price: 'desc' };
          break;
        case 'name-asc':
          orderBy = { name: 'asc' };
          break;
        case 'name-desc':
          orderBy = { name: 'desc' };
        case 'newest':
          orderBy = { createdAt: 'desc' };
          break;
        case 'oldest':
          orderBy = { createdAt: 'asc' };
          break;
      }
    }

    const products = await prisma.product.findMany({
      where,
      orderBy,
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
    });

    return NextResponse.json(products);
  } catch (error: any) {
    console.error('Error fetching products:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера', details: error.message },
      { status: 500 }
    );
  }
}
