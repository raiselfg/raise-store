import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/shared/components/ui/card';
import { Container } from '@/shared/components/ui/container';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { api } from '@/shared/lib/axios';
import { formatPriceUSD } from '@/shared/lib/format-price';
import { ProductWithRelations } from '@/shared/types/product';
import { notFound } from 'next/navigation';

const fetchProduct = async (id: string) => {
  try {
    const response = await api.get<ProductWithRelations>(`products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {product.images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={`${product.name}-img-${image.id}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription className="text-base">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {formatPriceUSD(product.price)}
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите размер" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Размеры</SelectLabel>
                    {product.sizes.map((prodSize) => (
                      <SelectItem
                        key={prodSize.id}
                        value={prodSize.size.name}
                        disabled={prodSize.quantity < 1}
                        className={
                          prodSize.quantity < 1
                            ? 'cursor-not-allowed bg-red-500/40'
                            : ''
                        }
                      >
                        <div className="flex gap-3">
                          <p>{prodSize.size.name}</p>
                          <p>
                            {prodSize.quantity < 1 ? (
                              <span>нет в наличии</span>
                            ) : (
                              <span>{prodSize.quantity} шт.</span>
                            )}
                          </p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full" size="lg">
                В корзину
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                В избранное
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Container>
  );
}
