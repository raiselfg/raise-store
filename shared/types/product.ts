import {
  Product,
  ProductImage,
  Brand,
  Category,
  ProductSize,
  Size,
} from "@/app/generated/prisma";

export type ProductWithRelations = Product & {
  images: ProductImage[];
  brand: Brand;
  category: Category;
  sizes: (ProductSize & {
    size: Size;
  })[];
};
