"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Search } from "lucide-react";
export default function Navbar() {
    const {cart} =useCart();
    const totalItems = cart.reduce((total,item)=>total+item.quantity,0);
    return (
        <div className="bg-white rounded-sm text-black flex justify-between p-4">
            <div >
                <span className="text-2xl font-bold">Faah</span>
            </div>
            <div className="hidden md:flex flex  items-center gap-2">
                <Link href="/" className="border-b-2 border-transparent hover:border-black transition-colors" >Home</Link>|
                <Link href="/shop" className=" border-b-2 border-transparent hover:border-black transition-colors"  >Shop</Link>|
                <Link href="/new-arrivals" className="border-b-2 border-transparent hover:border-black transition-colors" >New Arrival</Link>|
                <Link href="/about" className="border-b-2 border-transparent hover:border-black transition-colors" >About</Link>|
                <Link href="/contact" className="border-b-2 border-transparent hover:border-black transition-colors" >Contact</Link>
            </div>


            {/* <div className="flex items-center border rounded-lg p-1 shrink-0">
                <input type="text" placeholder="Search..."
                    className="w-24 sm:w-40 md:w-56 border-none outline-none px-2 text-sm bg-transparent"
                />
                <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>

            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />

           {totalItems > 0 && (
      <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
        {totalItems}
      </span>
    )} */}





    {/* 1. Group the Search bar and Cart Link in the same flex container */}
<div className="flex items-center gap-3 pr-8">
  {/* Your existing Search input stays exactly as it is */}
  <div className="relative flex items-center border rounded-lg p-1 shrink-0">
    <input
      type="text"
      placeholder="Search..."
      className="..."
    />
    <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
  </div>

  <Link
    href="/cart"
    className="relative p-1 text-neutral-800 hover:text-black flex items-center justify-center"
  >
    <ShoppingBag className="w-6 h-6" />

    {totalItems > 0 && (
      <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
        {totalItems}
      </span>
    )}
  </Link>
</div>
        </div>
    );
}