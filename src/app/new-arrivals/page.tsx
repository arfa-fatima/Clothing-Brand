import Image from "next/image";
import Link from "next/link";
import { NewArrival } from "@/data/products";
// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: string;
//   image: string;
//   tag?: string;
// }

// const newArrivals: Product[] = [
//   {
//     id: 1,
//     name: "Embroidered Silk Kurti",
//     category: "Pret",
//     price: "Rs. 18,500",
//     image: "/newarrival1.jpeg",
//     tag: "Just In",
//   },
//   {
//     id: 2,
//     name: "Classic Velvet Kaftan",
//     category: "Formal",
//     price: "Rs. 32,000",
//     image: "/newarrival2.jpeg",
//     tag: "Trending",
//   },
//   {
//     id: 3,
//     name: "Lawn 3-Piece Floral Print",
//     category: "Unstitched",
//     price: "Rs. 12,500",
//     image: "/newarrival1.jpeg",
//     tag: "New",
//   },
//   {
//     id: 4,
//     name: "Minimalist Linen Tunic",
//     category: "Pret",
//     price: "Rs. 9,500",
//     image: "/newarrival2.jpeg",
//     tag: "New",
//   },
//   {
//     id: 5,
//     name: "Minimalist Linen Tunic",
//     category: "Pret",
//     price: "Rs. 9,500",
//     image: "/newarrival2.jpeg",
//     tag: "New",
//   },
//   {
//     id: 6,
//     name: "Minimalist Linen Tunic",
//     category: "Pret",
//     price: "Rs. 9,500",
//     image: "/newarrival2.jpeg",
//     tag: "New",
//   },
//   {
//     id: 7,
//     name: "Minimalist Linen Tunic",
//     category: "Pret",
//     price: "Rs. 9,500",
//     image: "/newarrival2.jpeg",
//     tag: "New",
//   },
// ];

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pb-24">
      <section className="pt-12 pb-8 text-center px-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-2 block">Fresh From The Studio</span>
        <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-neutral-900"> New Arrivals</h1>
        <p className="mt-3 text-sm text-neutral-600 font-light">
          Explore our latest seasonal silhouettes, artisanal embroideries, and contemporary cuts.</p>
      </section>

      <section className="w-[94%] max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {NewArrival.map((product) => (
            <div key={product.id} className="group flex flex-col">
    
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-100">
                <img src={product.image} alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"/>

                {product.tag && (
                  <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button type="button" className="w-full py-2.5 bg-white/95 text-neutral-900 text-xs font-semibold uppercase tracking-wider rounded-md shadow-md hover:bg-black hover:text-white transition-colors"> Quick Add</button>
                </div>
              </div>

            
              <div className="pt-4 flex flex-col items-center text-center">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  {product.category}
                </span>
                <h3 className="mt-1 text-sm font-medium text-neutral-800 group-hover:text-black transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}