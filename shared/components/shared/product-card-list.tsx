"use client";

import { useProducts } from "@/shared/hooks/useProducts";
import { Skeleton } from "../ui/skeleton";
import { ProductCard } from "./product-card";
import { useFilterStore } from "@/shared/store/filters-store";

export const ProductCardList = () => {
  const { categories, brands, sortBy } = useFilterStore();
  const { products, isLoading, errorMessage } = useProducts({
    categories,
    brands,
    sortBy,
  });

  return (
    <div>
      {errorMessage && (
        <div className="bg-destructive/10 border-destructive/20 mb-4 rounded-md border p-4">
          <p className="text-destructive text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!isLoading
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-90 w-70" />
            ))}
      </div>

      {!isLoading && products.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">Товары не найдены</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Попробуйте изменить параметры фильтрации
          </p>
        </div>
      )}
    </div>
  );
};
