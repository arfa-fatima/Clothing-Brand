"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "Lahore",
    paymentMethod: "COD",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const parsePrice = (priceStr: string) => {
    const numeric = priceStr.replace(/[^0-9]/g, "");
    return Number(numeric) || 0;
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderPayload = {
      customer: formData,
      items: cart.map((item) => ({
        productId: item.product.id,
        name: item.product.name,
        price: parsePrice(item.product.price),
        quantity: item.quantity,
        size: item.size,
      })),
      totalAmount: subtotal,
      currency: "PKR",
      placedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to place order.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setOrderPlaced(true);
      clearCart();
    } catch (err) {
      console.error("Order submission failed:", err);
      alert("A network error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-xl font-serif mb-2">No items to check out</h2>
        <p className="text-sm text-neutral-500 mb-6">Your shopping bag is empty.</p>
        <Link  href="/shop" className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest rounded"> Return to Shop
        </Link>
      </main>
    );
  }

  if (orderPlaced) {
    return (
      <main className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
        <CheckCircle2 className="w-16 h-16 text-black mb-4 stroke-[1.5]" />
        <h1 className="text-3xl font-serif text-neutral-900 mb-2">Order Confirmed!</h1>
        <p className="text-sm text-neutral-600 max-w-md mb-8">
          Thank you for choosing Faah, <span className="font-semibold">{formData.fullName}</span>. 
          Your order will be delivered to <span className="font-semibold">{formData.city}</span> via Cash on Delivery.
        </p>
        <button
          onClick={() => router.push("/shop")}
          className="px-8 py-3 bg-black text-white text-xs uppercase tracking-widest font-semibold rounded hover:bg-neutral-800 transition"> Continue Shopping
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] text-neutral-900 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/cart"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 hover:text-black mb-6 transition">
          <ArrowLeft className="w-4 h-4" /> Return to Bag
        </Link>

        <h1 className="text-3xl font-serif tracking-tight mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <form  onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200/80 shadow-sm space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold text-neutral-900 mb-4"> Delivery Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-medium text-neutral-600 mb-1"> Full Name *
                  </label>
                  <input  type="text"  name="fullName" required value={formData.fullName}  onChange={handleChange} placeholder="e.g. A. Fatima"
                    className="w-full text-sm border border-neutral-300 rounded px-3.5 py-2.5 focus:outline-none focus:border-black"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-neutral-600 mb-1"> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0300-1234567"
                      className="w-full text-sm border border-neutral-300 rounded px-3.5 py-2.5 focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-medium text-neutral-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full text-sm border border-neutral-300 rounded px-3.5 py-2.5 focus:outline-none focus:border-black"/>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-neutral-600 mb-1">
                    Street Address *
                  </label>
                  <input type="text"  name="address" required value={formData.address} onChange={handleChange}
                    placeholder="House/Apartment #, Street, Area"  className="w-full text-sm border border-neutral-300 rounded px-3.5 py-2.5 focus:outline-none focus:border-black"/>
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium text-neutral-600 mb-1">
                    City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full text-sm border border-neutral-300 rounded px-3.5 py-2.5 bg-white focus:outline-none focus:border-black" >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                Payment Method
              </h2>

              <div className="space-y-3">
                <label
                  htmlFor="cod"
                  className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer transition ${
                    formData.paymentMethod === "COD"
                      ? "border-black bg-neutral-50 ring-1 ring-black"
                      : "border-neutral-200 hover:border-neutral-300" }`}>
                  <div className="flex items-center gap-3">
                    <input  type="radio" name="paymentMethod" id="cod" value="COD" checked={formData.paymentMethod === "COD"} onChange={handleChange}
                      className="accent-black w-4 h-4 cursor-pointer"/>
                    <div>
                      <span className="text-sm font-medium text-neutral-900 block">
                        Cash on Delivery (COD)
                      </span>
                      <span className="text-xs text-neutral-500">Pay when your order arrives</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-neutral-900">Default</span>
                </label>

                <label
                  htmlFor="online"
                  className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer transition ${
                    formData.paymentMethod === "ONLINE"
                      ? "border-black bg-neutral-50 ring-1 ring-black"
                      : "border-neutral-200 hover:border-neutral-300" }`} >
                  <div className="flex items-center gap-3">
                    <input type="radio" name="paymentMethod" id="online"  value="ONLINE" checked={formData.paymentMethod === "ONLINE"}  onChange={handleChange}
                      className="accent-black w-4 h-4 cursor-pointer"/>
                    <div>
                      <span className="text-sm font-medium text-neutral-900 block">
                        Online Payment / Card
                      </span>
                      <span className="text-xs text-neutral-500">Debit / Credit Card / Bank Transfer</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-black text-white text-xs uppercase tracking-widest font-semibold rounded hover:bg-neutral-800 disabled:bg-neutral-400 transition cursor-pointer" >
              {isSubmitting ? "Placing Order..." : `Place Order — PKR ${subtotal.toLocaleString()}`}
            </button>
          </form>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-neutral-200/80 shadow-sm space-y-5">
            <h2 className="text-sm uppercase tracking-wider font-semibold text-neutral-900 pb-3 border-b border-neutral-200">
              Summary ({cart.length} {cart.length === 1 ? "item" : "items"})
            </h2>

            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex justify-between items-center text-sm" >
                  <div>
                    <p className="font-medium text-neutral-900">{item.product.name}</p>
                    <p className="text-xs text-neutral-500">
                      Size: {item.size} × {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-neutral-900">
                    PKR {(parsePrice(item.product.price) * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-4 space-y-2 text-sm text-neutral-600">
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-neutral-900 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-neutral-900 pt-2 border-t border-neutral-100">
                <span>Total</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}