import { useSet } from "react-use";
import { useFilterStore } from "../store/filters-store";
import { useCallback, useEffect } from "react";

export const useProductFilters = () => {
  const { categories, brands, sortBy, setCategories, setBrands, setSortBy } =
    useFilterStore();

  const [
    selectedCategories,
    { toggle: toggleCategory, reset: resetCategories },
  ] = useSet<string>(new Set(categories));
  const [selectedBrands, { toggle: toggleBrand, reset: resetBrands }] =
    useSet<string>(new Set(brands));

  // Синхронизируем store при изменении selectedCategories
  useEffect(() => {
    setCategories(Array.from(selectedCategories));
  }, [selectedCategories, setCategories]);

  // Синхронизируем store при изменении selectedBrands
  useEffect(() => {
    setBrands(Array.from(selectedBrands));
  }, [selectedBrands, setBrands]);

  // Простые обработчики с toggle
  const handleCategoryChange = useCallback(
    (category: string) => {
      toggleCategory(category);
    },
    [toggleCategory],
  );

  const handleBrandChange = useCallback(
    (brand: string) => {
      toggleBrand(brand);
    },
    [toggleBrand],
  );

  const handleSortChange = useCallback(
    (sort: string) => {
      setSortBy(sort);
    },
    [setSortBy],
  );

  const handleResetAll = useCallback(() => {
    resetCategories();
    resetBrands();
  }, [resetCategories, resetBrands]);

  return {
    categories: Array.from(selectedCategories),
    brands: Array.from(selectedBrands),
    sortBy,

    selectedCategories,
    selectedBrands,

    handleCategoryChange,
    handleBrandChange,
    handleSortChange,
    handleResetAll,
  };
};
