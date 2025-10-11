import { useState, useEffect } from "react";
import { ProductWithRelations } from "@/shared/types/product";
import { api } from "../lib/axios";

export interface UseProductsOptions {
  categories?: string[];
  brands?: string[];
  sortBy?: string;
}

export const useProducts = (options: UseProductsOptions = {}) => {
  const [products, setProducts] = useState<ProductWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { categories = [], brands = [], sortBy } = options;

  const fetchProducts = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const params: Record<string, string> = {};

    if (categories.length > 0) {
      params.categories = categories.join(",");
    }
    if (brands.length > 0) {
      params.brands = brands.join(",");
    }
    if (sortBy) {
      params.sortBy = sortBy;
    }

    try {
      const response = await api.get("/products", { params });
      setProducts(response.data);
    } catch (err: any) {
      console.error("Error fetching products in useProducts:", err);
      setErrorMessage(
        err.response?.data?.error || "Не удалось загрузить продукты",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [categories, brands, sortBy]);

  return {
    products,
    isLoading,
    errorMessage,
    refetch: fetchProducts,
  };
};
