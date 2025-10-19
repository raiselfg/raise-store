import { ProductCard } from '../shared/product-card';

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
          {hasFilters ? 'Try adjusting your filters' : 'No products available'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid py-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initialProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
