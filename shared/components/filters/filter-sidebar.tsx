// 'use client';

// import { useRouter, useSearchParams } from 'next/navigation';
// import { useState, useTransition } from 'react';

// import { FilterCheckbox } from './filter-checkbox';
// import { Brand, Category } from '@/app/generated/prisma';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/shared/components/ui/select';
// import { Button } from '../ui/button';
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from '@/shared/components/ui/sheet';

// interface FilterSidebarProps {
//   brands: Brand[];
//   categories: Category[];
//   currentParams: { brands?: string; categories?: string; sortBy?: string };
// }

// export function FilterSidebar({
//   brands,
//   categories,
//   currentParams,
// }: FilterSidebarProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();
//   const [globalParams, setGlobalParams] = useState<string>('');

//   const selectedBrands = currentParams.brands?.split(',') || [];
//   const selectedCategories = currentParams.categories?.split(',') || [];
//   const selectedSort = currentParams.sortBy || '';

//   const updateFilter = (
//     type: 'brands' | 'categories' | 'sortBy',
//     value: string,
//     checked?: boolean
//   ) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (type === 'sortBy') {
//       if (value) {
//         params.set(type, value);
//       } else {
//         params.delete(type);
//       }
//     } else {
//       const currentValues = params.get(type)?.split(',') || [];

//       let newValues: string[];
//       if (checked) {
//         newValues = [...currentValues, value];
//       } else {
//         newValues = currentValues.filter((item) => item !== value);
//       }

//       if (newValues.length > 0) {
//         params.set(type, newValues.join(','));
//       } else {
//         params.delete(type);
//       }
//     }

//     setGlobalParams(params.toString());
//     // startTransition(() => {
//     //   router.push(`/catalog?${params.toString()}`, { scroll: false });
//     // });
//   };

//   const applyFilters = (params: string) => {
//     startTransition(() => {
//       router.push(`/catalog?${params.toString()}`, { scroll: false });
//     });
//   };

//   const handleSortChange = (value: string) => {
//     updateFilter('sortBy', value);
//   };

//   return (
//     <div className="flex justify-between">
//       <div className="flex gap-12">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button>filters</Button>
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle>Filters</SheetTitle>
//             </SheetHeader>
//             <div className="px-4 flex flex-col gap-5">
//               <div className="space-y-3">
//                 <h3 className="font-medium">Brands</h3>
//                 <div className="space-y-2">
//                   {brands.map((brand) => (
//                     <FilterCheckbox
//                       key={brand.id}
//                       id={brand.id}
//                       label={brand.name}
//                       type="brands"
//                       checked={selectedBrands.includes(brand.id)}
//                       onCheckedChange={(checked) =>
//                         updateFilter('brands', brand.id, checked)
//                       }
//                       disabled={isPending}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <h3 className="font-medium">Categories</h3>
//                 <div className="space-y-2">
//                   {categories.map((category) => (
//                     <FilterCheckbox
//                       key={category.id}
//                       id={category.id}
//                       label={category.name}
//                       type="categories"
//                       checked={selectedCategories.includes(category.id)}
//                       onCheckedChange={(checked) =>
//                         updateFilter('categories', category.id, checked)
//                       }
//                       disabled={isPending}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <SheetFooter>
//               <Button onClick={() => applyFilters(globalParams)}>
//                 Save changes
//               </Button>
//               <SheetClose asChild>
//                 <Button variant="outline">Close</Button>
//               </SheetClose>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>
//       <Select
//         value={selectedSort}
//         onValueChange={handleSortChange}
//         disabled={isPending}
//       >
//         <SelectTrigger className="w-[280px]">
//           <SelectValue placeholder="Select sorting" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="newest">Newest First</SelectItem>
//           <SelectItem value="oldest">Oldest First</SelectItem>
//           <SelectItem value="price-asc">Price: Low to High</SelectItem>
//           <SelectItem value="price-desc">Price: High to Low</SelectItem>
//           <SelectItem value="name-asc">Name: A to Z</SelectItem>
//           <SelectItem value="name-desc">Name: Z to A</SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';

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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';

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

  // Локальное состояние для выбранных фильтров
  const [localSelectedBrands, setLocalSelectedBrands] = useState<string[]>(
    currentParams.brands?.split(',') || []
  );
  const [localSelectedCategories, setLocalSelectedCategories] = useState<
    string[]
  >(currentParams.categories?.split(',') || []);

  const selectedSort = currentParams.sortBy || '';

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setLocalSelectedBrands((prev) => [...prev, brandId]);
    } else {
      setLocalSelectedBrands((prev) => prev.filter((id) => id !== brandId));
    }
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setLocalSelectedCategories((prev) => [...prev, categoryId]);
    } else {
      setLocalSelectedCategories((prev) =>
        prev.filter((id) => id !== categoryId)
      );
    }
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    // Добавляем выбранные бренды
    if (localSelectedBrands.length > 0) {
      params.set('brands', localSelectedBrands.join(','));
    }

    // Добавляем выбранные категории
    if (localSelectedCategories.length > 0) {
      params.set('categories', localSelectedCategories.join(','));
    }

    // Добавляем сортировку
    if (selectedSort) {
      params.set('sortBy', selectedSort);
    }

    startTransition(() => {
      router.push(`/catalog?${params.toString()}`, { scroll: false });
    });
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('sortBy', value);
    } else {
      params.delete('sortBy');
    }

    startTransition(() => {
      router.push(`/catalog?${params.toString()}`, { scroll: false });
    });
  };

  const clearAllFilters = () => {
    setLocalSelectedBrands([]);
    setLocalSelectedCategories([]);

    const params = new URLSearchParams();
    if (selectedSort) {
      params.set('sortBy', selectedSort);
    }

    startTransition(() => {
      router.push(`/catalog?${params.toString()}`, { scroll: false });
    });
  };

  const clearBrands = () => {
    setLocalSelectedBrands([]);
  };

  const clearCategories = () => {
    setLocalSelectedCategories([]);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-12">
        <Sheet>
          <SheetTrigger asChild>
            <Button>Filters</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="px-4 flex flex-col gap-5">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Brands</h3>
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <FilterCheckbox
                      key={brand.id}
                      id={brand.id}
                      label={brand.name}
                      type="brands"
                      checked={localSelectedBrands.includes(brand.id)}
                      onCheckedChange={(checked) =>
                        handleBrandChange(brand.id, checked)
                      }
                      disabled={isPending}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <FilterCheckbox
                      key={category.id}
                      id={category.id}
                      label={category.name}
                      type="categories"
                      checked={localSelectedCategories.includes(category.id)}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(category.id, checked)
                      }
                      disabled={isPending}
                    />
                  ))}
                </div>
              </div>
            </div>
            <SheetFooter className="flex gap-2">
              <Button
                variant="outline"
                onClick={clearAllFilters}
                disabled={
                  localSelectedBrands.length === 0 &&
                  localSelectedCategories.length === 0
                }
              >
                Clear All
              </Button>
              <Button onClick={applyFilters} disabled={isPending}>
                Apply Filters
              </Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <Select
        value={selectedSort}
        onValueChange={handleSortChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-max">
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
  );
}
