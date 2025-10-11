export type ProductCategory =
  | 't-shirt'
  | 'hoodie'
  | 'jacket'
  | 'pants'
  | 'shoes';
export type ProductBrand =
  | 'Rick Owens'
  | 'Undercover'
  | 'Enfants Riches Déprimés'
  | 'Prada';
export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name';

export const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 't-shirt', label: 'Футболки' },
  { id: 'hoodie', label: 'Худи' },
  { id: 'jacket', label: 'Куртки' },
  { id: 'pants', label: 'Штаны' },
  { id: 'shoes', label: 'Обувь' },
];

export const BRANDS: { id: ProductBrand; label: string }[] = [
  { id: 'Rick Owens', label: 'Rick Owens' },
  { id: 'Undercover', label: 'Undercover' },
  { id: 'Enfants Riches Déprimés', label: 'Enfants Riches Déprimés' },
  { id: 'Prada', label: 'Prada' },
];

export const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'newest', label: 'Сначала новые' },
  { id: 'price-asc', label: 'По возрастанию цены' },
  { id: 'price-desc', label: 'По убыванию цены' },
  { id: 'name', label: 'По названию' },
];
