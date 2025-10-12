"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { FilterCheckbox } from "./filter-checkbox";
import { Brand, Category } from "@/app/generated/prisma";

interface FilterSidebarProps {
  brands: Brand[];
  categories: Category[];
  currentParams: { brands?: string; categories?: string };
}

export function FilterSidebar({
  brands,
  categories,
  currentParams,
}: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Получаем текущие выбранные значения
  const selectedBrands = currentParams.brands?.split(",") || [];
  const selectedCategories = currentParams.categories?.split(",") || [];

  const updateFilter = (
    type: "brands" | "categories",
    id: string,
    checked: boolean,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValues = params.get(type)?.split(",") || [];

    let newValues: string[];
    if (checked) {
      newValues = [...currentValues, id];
    } else {
      newValues = currentValues.filter((item) => item !== id);
    }

    if (newValues.length > 0) {
      params.set(type, newValues.join(","));
    } else {
      params.delete(type);
    }

    startTransition(() => {
      router.push(`/catalog?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="flex gap-6">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
      </div> */}

      {/* Бренды */}
      <div className="space-y-3">
        <h3 className="font-medium">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <FilterCheckbox
              key={brand.id}
              id={brand.id}
              label={brand.name}
              type="brands"
              checked={selectedBrands.includes(brand.id)}
              onCheckedChange={(checked) =>
                updateFilter("brands", brand.id, checked)
              }
              disabled={isPending}
            />
          ))}
        </div>
      </div>

      {/* Категории */}
      <div className="space-y-3">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <FilterCheckbox
              key={category.id}
              id={category.id}
              label={category.name}
              type="categories"
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={(checked) =>
                updateFilter("categories", category.id, checked)
              }
              disabled={isPending}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
