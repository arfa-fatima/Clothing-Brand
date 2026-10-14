"use client";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Truck, RotateCcw, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.id === Number(resolvedParams.id));

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const { cart,addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const isUnstitched = product.category.toLowerCase().includes("unstitched");

 const handleAddToCart = async () => {
  try {
    const chosenSize = isUnstitched ? "Unstitched" : selectedSize;

    const res = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product.id,
        name: product.name,
        price: product.price,
        size: chosenSize,
        quantity: quantity,
      }),
    });

    if (res.ok) {
      addToCart(product, quantity, chosenSize);
    }
  } catch (error) {
    console.error("Failed to add item to bag:", error);
  }
};

const handleBuyItNow = () => {
  if (cart.length === 0) {
    const chosenSize = isUnstitched ? "Unstitched" : selectedSize;
    addToCart(product, quantity, chosenSize);
  }
  router.push("/checkout");
};

  return (
    <main className="min-h-screen bg-white text-black px-6 py-10 max-w-6xl mx-auto m-10 rounded-lg">
      <Link  href="/shop" className="inline-flex items-center text-xs tracking-wider uppercase text-neutral-500 hover:text-black mb-8 transition"> ← Back to Collection</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
     




        <div className="relative aspect-[3/4] w-full bg-neutral-100 rounded-lg overflow-hidden shadow-sm">
          <Image src={product.image.startsWith("/") ? product.image : `/${product.image}`}  alt={product.name} fill className="object-cover" priority />
        </div>

   
        <div className="flex flex-col space-y-6">
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              {product.category}
            </span>
            <h1 className="text-3xl font-serif text-neutral-900 mt-1"> {product.name}</h1>
            <p className="text-2xl font-medium text-neutral-900 mt-3"> {product.price}</p>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Crafted from high-grade fabric with delicate craftsmanship. Perfect for
            casual elegance or festive gatherings with intricate styling.
          </p>

       
          {!isUnstitched ? (
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                  Select Size
                </span>
                <button
                  type="button"
                  className="text-xs text-neutral-500 underline hover:text-black cursor-pointer">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 text-xs font-medium border rounded transition cursor-pointer ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-black"}`}>{size}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-xs text-neutral-600 font-medium bg-neutral-100 px-3 py-2 rounded"> Type: Standard Unstitched Fabric (Includes Shirt, Trouser & Dupatta)
            </div>
          )}

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block mb-2">Quantity</span>
            <div className="flex items-center border border-neutral-300 w-fit rounded">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3.5 py-1.5 text-base text-neutral-600 hover:bg-neutral-100 transition cursor-pointer">-
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3.5 py-1.5 text-base text-neutral-600 hover:bg-neutral-100 transition cursor-pointer"> +
              </button>
            </div>
          </div>

         
          <div className="space-y-2 pt-2">
            <button type="button" onClick={handleAddToCart}
              className="w-full bg-black text-white py-3.5 text-sm font-medium tracking-wide uppercase rounded hover:bg-neutral-800 transition cursor-pointer" >
              Add to Bag
            </button>
            <button type="button" onClick={handleBuyItNow}
              className="w-full border border-black text-black py-3 text-sm font-medium tracking-wide uppercase rounded hover:bg-neutral-50 transition cursor-pointer" >
              Buy It Now
            </button>
          </div>

          <div className="border-t border-neutral-200 pt-6 space-y-3 text-xs text-neutral-600">
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-neutral-800 shrink-0" />
              <span><strong>Delivery:</strong> Standard delivery within 3-5 working days</span>
            </div>

            <div className="flex items-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-neutral-800 shrink-0" />
              <span><strong>Easy Returns:</strong> 7 days exchange policy</span>
            </div>

            <div className="flex items-center gap-2.5">
              <CreditCard className="w-4 h-4 text-neutral-800 shrink-0" />
              <span><strong>Payment:</strong> Cash on Delivery (COD) & Online Cards</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}