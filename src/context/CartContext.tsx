"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size: string) => void;
  removeFromCart: (productId: number, size: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); 

  
  useEffect(() => {
    try {
      const saved = localStorage.getItem("faah_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoaded(true); 
    }
  }, []);

 


  useEffect(() => {
    if (!isLoaded) return; 

    try {
      localStorage.setItem("faah_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }}, [cart, isLoaded]);

  

const addToCart = (product: Product, quantity: number, size: string) => {
  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );
















    if (existingIndex > -1) {
   


      return prevCart.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );





    }

    return [...prevCart, { product, quantity, size }];
  });




};

  const removeFromCart = (productId: number, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}




export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}