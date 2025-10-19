import { FilterSidebar } from '@/shared/components/filters/filter-sidebar';
import prisma from '@/shared/lib/prisma';
import { Suspense } from 'react';
import ProductsLoading from './loading';
import { ProductList } from '@/shared/components/filters/product-list';
import { Container } from '@/shared/components/ui/container';
import { api } from '@/shared/lib/axios';
import { Brand, Category } from '../generated/prisma';
import { Skeleton } from '@/shared/components/ui/skeleton';

interface ProductsPageProps {
  searchParams: Promise<{
    brands?: string;
    categories?: string;
    sortBy?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  const [brands, categories, initialProducts] = await Promise.all([
    api.get<Brand[]>('brands'),
    api.get<Category[]>('categories'),
    getFilteredProducts(params),
  ]);

  return (
    <Container>
      <div className="flex flex-col">
        <Suspense>
          <FilterSidebar
            brands={brands.data}
            categories={categories.data}
            currentParams={params}
          />
        </Suspense>

        <div>
          <Suspense fallback={<ProductsLoading />}>
            <ProductList
              initialProducts={initialProducts}
              searchParams={params}
            />
          </Suspense>
        </div>
      </div>
    </Container>
  );
}

async function getFilteredProducts(params: {
  brands?: string;
  categories?: string;
  sortBy?: string;
}) {
  const whereConditions = [];
  let orderByCondition;
  if (params.brands) {
    whereConditions.push({
      brandId: { in: params.brands.split(',') },
    });
  }

  if (params.categories) {
    whereConditions.push({
      categoryId: { in: params.categories.split(',') },
    });
  }

  if (params.sortBy) {
    switch (params.sortBy) {
      case 'price-asc':
        orderByCondition = { price: 'asc' };
        break;
      case 'price-desc':
        orderByCondition = { price: 'desc' };
        break;
      case 'name-asc':
        orderByCondition = { name: 'asc' };
        break;
      case 'name-desc':
        orderByCondition = { name: 'desc' };
      case 'newest':
        orderByCondition = { createdAt: 'desc' };
        break;
      case 'oldest':
        orderByCondition = { createdAt: 'asc' };
        break;
    }
  }

  return await prisma.product.findMany({
    where: whereConditions.length > 0 ? { AND: whereConditions } : {},
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
    orderBy: orderByCondition as object,
  });
}
