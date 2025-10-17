'use client';

import { useRef, useState } from 'react';
import { Input } from '../ui/input';
import { useClickAway, useDebounce } from 'react-use';
import { ProductWithRelations } from '@/shared/types/product';
import Link from 'next/link';
import { formatPriceUSD } from '@/shared/lib/format-price';
import Image from 'next/image';

export const SearchInput = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [products, setProducts] = useState<ProductWithRelations[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useClickAway(searchRef, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      if (!queryValue.trim()) {
        setProducts([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(queryValue)}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Search failed:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    },
    350,
    [queryValue]
  );

  return (
    <div ref={searchRef} className="relative w-full">
      <Input
        onFocus={() => setFocused(true)}
        value={queryValue}
        onChange={(e) => setQueryValue(e.target.value)}
        type="search"
        placeholder="Search.."
      />
      {focused && queryValue && (
        <div className="absolute bg-foreground p-2 my-1 w-full rounded-xl z-10 max-h-80 overflow-y-auto">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : products.length >= 1 ? (
            <div className="flex flex-col gap-2">
              {products.map((product) => (
                <Link
                  href=""
                  key={product.id}
                  className="flex gap-2 items-center rounded-xl hover:bg-background/10"
                >
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    height={48}
                    width={48}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-background">{product.name}</p>
                    <p className="text-background">
                      {formatPriceUSD(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            queryValue && (
              <div className="p-2 text-muted-foreground">No products found</div>
            )
          )}
        </div>
      )}
    </div>
  );
};
