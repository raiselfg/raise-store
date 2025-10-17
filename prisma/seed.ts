import { PrismaClient } from '@/app/generated/prisma';
import { brands, categories, products, sizes } from './constants';

const prisma = new PrismaClient();

interface ProductSizeInput {
  sizeName: string;
  quantity: number;
}

interface ProductInput {
  name: string;
  description: string;
  price: number;
  brandName: { name: string };
  categoryName: { name: string };
  images: any[];
  sizes?: ProductSizeInput[];
}

async function createProductSizes(
  productId: string,
  productSizes: ProductSizeInput[]
) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const dbSizes = await prisma.size.findMany();

  const productSizesData = productSizes.map((ps) => {
    const sizeRecord = dbSizes.find((s) => s.name === ps.sizeName);
    if (!sizeRecord) throw new Error(`Size ${ps.sizeName} not found`);
    return {
      productId,
      sizeId: sizeRecord.id,
      quantity: ps.quantity,
    };
  });

  await prisma.productSize.createMany({ data: productSizesData });
}

async function up() {
  console.log('Starting seed...');

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.brand.createMany({
    data: brands,
  });

  await prisma.size.createMany({
    data: sizes,
  });

  console.log('Basic entities created');

  const dbBrands = await prisma.brand.findMany();
  const dbCategories = await prisma.category.findMany();

  console.log(
    `Found ${dbBrands.length} brands, ${dbCategories.length} categories`
  );

  const createdProducts = [];
  for (const p of products) {
    console.log(`Creating product: ${p.name}`);

    const brand = dbBrands.find((b) => b.name === p.brandName.name);
    const category = dbCategories.find((c) => c.name === p.categoryName.name);

    if (!brand || !category) {
      console.error(`Brand or category not found for product: ${p.name}`);
      continue;
    }

    const product = await prisma.product.create({
      data: {
        name: p.name,
        description: p.description,
        price: p.price,
        brandId: brand.id,
        categoryId: category.id,
        images: p.images ? { create: p.images } : undefined,
      },
    });

    createdProducts.push(product);

    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  console.log(`Created ${createdProducts.length} products`);

  for (let i = 0; i < createdProducts.length; i++) {
    const product = createdProducts[i];
    const productSizes = products[i].sizes || [];

    if (productSizes.length > 0) {
      console.log(`Creating sizes for product: ${product.name}`);
      await createProductSizes(product.id, productSizes);

      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  console.log('Seed completed successfully');
}

async function down() {
  console.log('Cleaning database...');

  await prisma.cartItem.deleteMany();
  await prisma.favoriteItem.deleteMany();
  await prisma.productSize.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.size.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();

  await prisma.cart.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.order.deleteMany();

  console.log('Database cleaned');
}

async function main() {
  try {
    console.log('Starting seed process...');
    await down();
    await up();
    console.log('Seed finished successfully');
  } catch (e) {
    console.error('Seed failed:', e);
    throw e;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Fatal error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
