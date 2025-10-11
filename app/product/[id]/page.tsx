// import { formatPriceUSD } from '@/shared/lib/format-price'
// import { Button } from '@/shared/components/ui/button'
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardAction,
//   CardContent,
//   CardFooter,
// } from '@/shared/components/ui/card'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from '@/shared/components/ui/carousel'
// import { Container } from '@/shared/components/ui/container'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/shared/components/ui/select'
// import Image from 'next/image'
// import { notFound } from 'next/navigation'
// import { ProductService } from '@/shared/services/product-service'

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string }
// }) {
// const product = await ProductService.getById(params.id)

// if (!product) notFound()

// const price = formatPriceUSD(product.price)

// return (
//   <Container className="flex justify-between">
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         {product.images.map((img) => (
//           <CarouselItem key={img.id}>
//             <Image
//               src={img.url}
//               alt="asd"
//               width={673}
//               height={898}
//               style={{ objectFit: 'contain' }}
//               unoptimized={true}
//             />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>

//     <section>
//       <Card className="w-sm">
//         <CardHeader>
//           <CardTitle>{product.name}</CardTitle>
//           <CardDescription>{product.description}</CardDescription>
//         </CardHeader>
//         <CardContent className="text-xl">{price}</CardContent>
//         <CardFooter className="flex-col gap-2">
//           <Select>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Выберите размер" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Размеры</SelectLabel>
//                 {product.variants.map((variant) => (
//                   <SelectItem
//                     key={variant.id}
//                     value={variant.size.name}
//                     disabled={variant.quantity < 1}
//                     className={
//                       variant.quantity < 1
//                         ? 'cursor-not-allowed bg-red-500/40'
//                         : ''
//                     }
//                   >
//                     <div className="flex gap-3">
//                       <p>{variant.size.name}</p>
//                       <p>
//                         {variant.quantity < 1 ? (
//                           <span>нет в наличии</span>
//                         ) : (
//                           <span>{variant.quantity} шт.</span>
//                         )}
//                       </p>
//                     </div>
//                   </SelectItem>
//                 ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//           <Button type="submit" className="w-full">
//             В корзину
//           </Button>
//           <Button variant="outline" className="w-full">
//             В избранное
//           </Button>
//         </CardFooter>
//       </Card>
//     </section>
//   </Container>
// )
// }
