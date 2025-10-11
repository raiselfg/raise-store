"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { useProductFilters } from "@/shared/hooks/useFilters";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { CATEGORIES, BRANDS, SORT_OPTIONS } from "@/shared/types/filters";
import { Button } from "../ui/button";

export const ProductFilters = () => {
  const {
    selectedCategories,
    handleCategoryChange,
    selectedBrands,
    handleBrandChange,
    sortBy,
    handleSortChange,
  } = useProductFilters();

  return (
    <div className="bg-muted/50 mb-6 rounded-lg p-4">
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Категории:</h2>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${cat.id}`}
                  checked={selectedCategories.has(cat.id)}
                  onCheckedChange={() => handleCategoryChange(cat.id)}
                />
                <Label
                  htmlFor={`category-${cat.id}`}
                  className="cursor-pointer text-sm"
                >
                  {cat.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Бренды:</h2>
          <div className="flex flex-col gap-2">
            {BRANDS.map((brand) => (
              <div key={brand.id} className="flex items-center gap-2">
                <Checkbox
                  id={`brand-${brand.id}`}
                  checked={selectedBrands.has(brand.id)}
                  onCheckedChange={() => handleBrandChange(brand.id)}
                />
                <Label
                  htmlFor={`brand-${brand.id}`}
                  className="cursor-pointer text-sm"
                >
                  {brand.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Сортировка:</h3>
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Выберите сортировку" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.id} value={opt.id}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
