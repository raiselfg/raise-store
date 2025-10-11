import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterStore {
  categories: string[];
  brands: string[];
  sortBy: string;
  setCategories: (categories: string[]) => void;
  setBrands: (brands: string[]) => void;
  setSortBy: (sortBy: string) => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      categories: [],
      brands: [],
      sortBy: "newest",
      setCategories: (categories) => set({ categories }),
      setBrands: (brands) => set({ brands }),
      setSortBy: (sortBy) => set({ sortBy }),
      resetFilters: () =>
        set({
          categories: [],
          brands: [],
          sortBy: "newest",
        }),
    }),
    {
      name: "product-filters",
    },
  ),
);
