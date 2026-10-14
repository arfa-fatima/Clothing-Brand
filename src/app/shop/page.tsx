"use client";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";



import { useState } from "react";
const CATEGORIES = ["All", "Pret", "Formal", "Unstitched"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white text-black px-4 py-10 sm:px-6 lg:px-12">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-serif tracking-tight">The Collection</h1>
        <p className="text-neutral-500 mt-2 text-sm"> Discover timeless silhouettes crafted with everyday elegance.</p>
      </div>

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-neutral-700 border border-neutral-200 hover:border-black"
            }`}>  {cat}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden rounded-md mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="flex flex-col flex-1">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                {product.category}
              </span>
              <h3 className="text-sm font-medium text-neutral-900 mt-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-neutral-900 mt-1">
                {product.price}
              </p>

            <Link  href={`/product/${product.id}`}
  className="block text-center w-full py-2 bg-black text-white text-xs uppercase tracking-wider rounded hover:bg-neutral-800 transition">  View Details
          </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}