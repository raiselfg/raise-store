'use client';

import { formatPriceUSD } from '@/shared/lib/format-price';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { ProductWithRelations } from '@/shared/types/product';

interface ProductCardProps {
  product: ProductWithRelations;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const formattedPrice: string = formatPriceUSD(product?.price);

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="mx-auto flex flex-col">
            <div>
              <img src={product.images[0].url} alt={product.name} />
              <p className="line-clamp-2 min-h-14 text-left">{product.name}</p>
            </div>
            <p className="w-max">{formattedPrice}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="h-[90vh] w-full max-w-6xl overflow-auto sm:max-w-5xl lg:max-w-7xl">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
          </DialogHeader>
          <Card className="w-full">
            <CardContent className="flex flex-col gap-6 lg:flex-row">
              <Carousel className="mx-auto w-full max-w-sm lg:max-w-md">
                <CarouselContent>
                  {product.images.map((img) => (
                    <CarouselItem key={img.id}>
                      <div className="relative h-[350px] w-full lg:h-[450px]">
                        <Image
                          src={img.url}
                          alt={img.id}
                          fill
                          style={{ objectFit: 'contain' }}
                          unoptimized={true}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <section className="w-full lg:w-1/2">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xl">
                    {formattedPrice}
                  </CardContent>
                  <CardFooter className="flex-col gap-2">
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
                    <Button type="submit" className="w-full">
                      В корзину
                    </Button>
                    <Button variant="outline" className="w-full">
                      В избранное
                    </Button>
                  </CardFooter>
                </Card>
              </section>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};
