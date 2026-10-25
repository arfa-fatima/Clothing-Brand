import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-6 mb-10">
          <h1 className="text-3xl font-serif text-neutral-900 tracking-tight">
            All Collections
          </h1>
          <p className="text-sm text-neutral-500 mt-2">
            Explore all latest arrivals and timeless outfits
          </p>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-24 text-neutral-400">
            No products found in the catalog.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => {
              const imageSrc = product.image
                ? product.image.startsWith("/")
                  ? product.image
                  : `/${product.image}`
                : "/placeholder.png";

              return (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group flex flex-col bg-white rounded-xl border border-neutral-200/80 p-3 hover:shadow-md hover:border-neutral-300 transition duration-200"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-full bg-neutral-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Card Details */}
                  <div className="flex flex-col flex-grow px-1">
                    <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                      {product.category}
                    </span>
                    <h2 className="text-sm font-medium text-neutral-800 truncate group-hover:text-black">
                      {product.name}
                    </h2>
                    <p className="text-sm font-bold text-neutral-900 mt-2">
                      Rs. {Number(product.price).toLocaleString()}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}