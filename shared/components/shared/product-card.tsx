import { formatPriceUSD } from '@/shared/lib/format-price';
import { ProductWithRelations } from '@/shared/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: ProductWithRelations;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Link href={`catalog/product/${product.id}`}>
        <div className="mx-auto flex flex-col">
          <div>
            <img src={product.images[0].url} alt={product.name} />
            <p className="line-clamp-2 min-h-14 text-left">{product.name}</p>
          </div>
          <p className="w-max">{formatPriceUSD(product.price)}</p>
        </div>
      </Link>
    </>
  );
};
