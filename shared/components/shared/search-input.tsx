// "use client";

// import { cn } from "@/shared/lib/clsx";
// import { formatPriceUSD } from "@/shared/lib/format-price";
// import { Search, X } from "lucide-react";
// import Link from "next/link";
// import { useRef, useState } from "react";
// import { useClickAway, useDebounce } from "react-use";

// interface Props {
//   className?: string;
// }

// export const SearchInput = ({ className }: Props) => {
//   const [focused, setFocused] = useState<boolean>(false);
//   const [queryValue, setQueryValue] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

//   const inputRef = useRef<HTMLInputElement>(null);
//   const dropdownRef = useRef(null);

//   useDebounce(
//     () => {
//       if (!queryValue.trim()) {
//         setFilteredProducts([]);
//         return;
//       }

//       const filtered = allProducts.filter((product) =>
//         product.name.toLowerCase().includes(queryValue.toLowerCase()),
//       );

//       setFilteredProducts(filtered);
//     },
//     500,
//     [queryValue],
//   );

//   useClickAway(dropdownRef, () => {
//     setFocused(false);
//   });

//   const onLinkClick = () => {
//     setFocused(false);
//     setQueryValue("");
//     setFilteredProducts([]);
//   };

//   const clearInput = () => {
//     setQueryValue("");
//     setFilteredProducts([]);
//     inputRef.current?.focus();
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQueryValue(value);
//   };

//   return (
//     <>
//       {focused && <div className="fixed inset-0 z-30 bg-black/50" />}

//       <div
//         ref={dropdownRef}
//         className={cn(
//           "bg-background border-foreground relative z-30 w-full rounded-2xl border",
//           className,
//         )}
//       >
//         <div className="relative flex items-center">
//           <Search size={20} className="text-foreground/70 absolute left-3" />

//           <input
//             ref={inputRef}
//             type="text"
//             onFocus={() => setFocused(true)}
//             value={queryValue}
//             onChange={handleInputChange}
//             className="placeholder:text-foreground/70 h-10 w-full rounded-2xl border pr-8 pl-10 outline-none focus:border-0"
//             placeholder="Поиск..."
//             aria-label="Поиск товаров"
//           />

//           {queryValue && (
//             <button
//               onClick={clearInput}
//               className="text-foreground/50 hover:text-foreground absolute right-3"
//               aria-label="Очистить поиск"
//             >
//               <X size={20} />
//             </button>
//           )}
//         </div>

//         {focused && (filteredProducts.length > 0 || queryValue) && (
//           <div className="bg-background absolute z-40 mt-1 w-full overflow-hidden rounded-xl shadow-lg">
//             {isLoading ? (
//               <div className="p-4 text-center text-sm text-gray-500">
//                 Загрузка товаров...
//               </div>
//             ) : (
//               <>
//                 {filteredProducts.length > 0 ? (
//                   <div className="max-h-80 overflow-y-auto">
//                     {filteredProducts.map((product) => (
//                       <Link
//                         key={product.id}
//                         href={`/products/${product.id}`}
//                         onClick={onLinkClick}
//                         className="hover:bg-foreground/30 flex items-center border-b p-4 transition-colors last:border-b-0"
//                       >
//                         {product.images[0] && (
//                           <div className="mr-3 flex-shrink-0">
//                             <img
//                               src={product.images[0].url}
//                               alt={product.name}
//                               className="h-12 w-12 object-cover"
//                             />
//                           </div>
//                         )}
//                         <div className="min-w-0 flex-1">
//                           <h3 className="line-clamp-2 text-sm font-medium">
//                             {product.name}
//                           </h3>
//                           <p className="text-accent-foreground text-sm">
//                             {formatPriceUSD(product.price)}
//                           </p>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 ) : queryValue && !isLoading ? (
//                   <div className="text-accent-foreground p-4 text-center text-sm">
//                     Ничего не найдено
//                   </div>
//                 ) : null}
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
