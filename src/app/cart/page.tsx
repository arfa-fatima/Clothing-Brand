"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const parsePrice = (priceStr: string) => {
    const numeric = priceStr.replace(/[^0-9]/g, "");
    return Number(numeric) || 0;
  };

  const subtotal = cart.reduce((total, item) => {
    return total + parsePrice(item.product.price) * item.quantity;
  }, 0);

  
  if (cart.length === 0) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-400">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-serif text-neutral-900 mb-2">Your Bag is Empty</h1>
        <p className="text-sm text-neutral-500 mb-6 max-w-sm">
          Discover our latest collection and timeless silhouettes to add to your bag.
        </p>
        <Link
          href="/shop"
          className="px-8 py-3 bg-black text-white text-xs uppercase tracking-widest font-medium rounded hover:bg-neutral-800 transition"
        >
          Explore Collection
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-6 py-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-8">
        <h1 className="text-3xl font-serif tracking-tight text-neutral-900">Shopping Bag</h1>
        <button
          onClick={clearCart}
          className="text-xs text-neutral-500 hover:text-red-600 transition underline cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
        <div className="lg:col-span-7 space-y-6">
          {cart.map((item) => {
            const imageSrc = item.product.image.startsWith("/")
              ? item.product.image
              : `/${item.product.image}`;

            return (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 p-4 border border-neutral-100 rounded-lg hover:border-neutral-200 transition">
               
                <div className="relative w-24 h-32 bg-neutral-100 rounded overflow-hidden shrink-0">
                  <Image src={imageSrc}  alt={item.product.name} fill className="object-cover" />
                </div>

                
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link
                        href={`/product/${item.product.id}`}
                        className="text-base font-medium text-neutral-900 hover:underline" >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-neutral-400 hover:text-red-500 transition p-1 cursor-pointer"
                        title="Remove Item"  >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-neutral-500 mt-0.5">Category: {item.product.category} </p>
                    <p className="text-xs font-medium text-neutral-700 mt-1">
                      Size: <span className="uppercase text-neutral-900">{item.size}</span>
                    </p>
                  </div>

                
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-neutral-200 rounded">
                      <button type="button" onClick={() => {
                          if (item.quantity > 1) {
                            addToCart(item.product, -1, item.size);
                          } else {
                            removeFromCart(item.product.id, item.size);
                          }
                        }}
                        className="px-2.5 py-1 text-sm text-neutral-600 hover:bg-neutral-100 transition cursor-pointer"> -
                      </button>
                      <span className="px-3 text-xs font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(item.product, 1, item.size)}
                        className="px-2.5 py-1 text-sm text-neutral-600 hover:bg-neutral-100 transition cursor-pointer">  +
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-neutral-900">
                      PKR {(parsePrice(item.product.price) * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-600 hover:text-black transition pt-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
          </Link>
        </div>

        <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200/80 rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-serif text-neutral-900 pb-3 border-b border-neutral-200">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm text-neutral-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-neutral-900"> PKR {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span className="text-neutral-900 font-medium">Free</span>
            </div>
            <div className="flex justify-between text-xs text-neutral-500">
              <span>Taxes</span>
              <span>Included</span>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-4 flex justify-between items-center text-base font-semibold text-neutral-900">
            <span>Total</span>
            <span className="text-xl">PKR {subtotal.toLocaleString()}</span>
          </div>

         <Link href="/checkout" className="block text-center w-full py-4 bg-black text-white text-xs uppercase tracking-widest font-semibold rounded hover:bg-neutral-800 transition"> Proceed to Checkout
</Link>

          <p className="text-[11px] text-center text-neutral-500">
            Complimentary shipping across Pakistan on all orders.
          </p>
        </div>
      </div>
    </main>
  );
}