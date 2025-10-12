import { ProductCard } from "../shared/product-card";

interface ProductListProps {
  initialProducts: any[];
  searchParams: { brands?: string; categories?: string };
}

export async function ProductList({
  initialProducts,
  searchParams,
}: ProductListProps) {
  const hasFilters = searchParams.brands || searchParams.categories;

  if (initialProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">
          {hasFilters ? "Try adjusting your filters" : "No products available"}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Статистика */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {initialProducts.length} product
          {initialProducts.length !== 1 ? "s" : ""}
          {hasFilters && " with applied filters"}
        </p>
      </div>

      {/* Сетка продуктов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {initialProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
