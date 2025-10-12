// app/products/page.tsx
import { FilterSidebar } from "@/shared/components/filters/filter-sidebar";
import prisma from "@/shared/lib/prisma";
import { Suspense } from "react";
import ProductsLoading from "./loading";
import { ProductList } from "@/shared/components/filters/product-list";
import { Container } from "@/shared/components/ui/container";

interface ProductsPageProps {
  searchParams: Promise<{
    brands?: string;
    categories?: string;
    page?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  // Разрешаем searchParams (Next.js 15+)
  const params = await searchParams;

  // Параллельно получаем данные для фильтров и продуктов
  const [brands, categories, initialProducts] = await Promise.all([
    prisma.brand.findMany({ orderBy: { name: "asc" } }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    getFilteredProducts(params), // Функция для фильтрации
  ]);

  return (
    <Container>
      <div className="flex flex-col gap-4">
        {/* Клиентский компонент фильтров */}
        <FilterSidebar
          brands={brands}
          categories={categories}
          currentParams={params}
        />

        {/* Серверный компонент продуктов */}
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

// Функция для получения отфильтрованных продуктов
async function getFilteredProducts(params: {
  brands?: string;
  categories?: string;
}) {
  const whereConditions = [];

  if (params.brands) {
    whereConditions.push({
      brandId: { in: params.brands.split(",") },
    });
  }

  if (params.categories) {
    whereConditions.push({
      categoryId: { in: params.categories.split(",") },
    });
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
    orderBy: { name: "asc" },
  });
}
