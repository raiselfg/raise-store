'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

import { FilterCheckbox } from './filter-checkbox';
import { Brand, Category } from '@/app/generated/prisma';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Button } from '../ui/button';

interface FilterSidebarProps {
  brands: Brand[];
  categories: Category[];
  currentParams: { brands?: string; categories?: string; sortBy?: string };
}

export function FilterSidebar({
  brands,
  categories,
  currentParams,
}: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const selectedBrands = currentParams.brands?.split(',') || [];
  const selectedCategories = currentParams.categories?.split(',') || [];
  const selectedSort = currentParams.sortBy || '';

  const updateFilter = (
    type: 'brands' | 'categories' | 'sortBy',
    value: string,
    checked?: boolean
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (type === 'sortBy') {
      if (value) {
        params.set(type, value);
      } else {
        params.delete(type);
      }
    } else {
      const currentValues = params.get(type)?.split(',') || [];

      let newValues: string[];
      if (checked) {
        newValues = [...currentValues, value];
      } else {
        newValues = currentValues.filter((item) => item !== value);
      }

      if (newValues.length > 0) {
        params.set(type, newValues.join(','));
      } else {
        params.delete(type);
      }
    }

    startTransition(() => {
      router.push(`/catalog?${params.toString()}`, { scroll: false });
    });
  };

  const handleSortChange = (value: string) => {
    updateFilter('sortBy', value);
  };

  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-12">
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
                  updateFilter('brands', brand.id, checked)
                }
                disabled={isPending}
              />
            ))}
          </div>
        </div>

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
                  updateFilter('categories', category.id, checked)
                }
                disabled={isPending}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-medium text-center">Sort by</h3>
        <Select
          value={selectedSort}
          onValueChange={handleSortChange}
          disabled={isPending}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
