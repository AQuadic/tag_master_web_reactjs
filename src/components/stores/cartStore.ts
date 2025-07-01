import { create } from "zustand";
import { addToCart } from "@/api/cart/addToCart"; 

interface CartState {
  addToCart: (itemId: number) => Promise<void>;
}

export const useCartStore = create<CartState>(() => ({
  addToCart: async (itemId: number) => {
    try {
      const response = await addToCart(itemId);
      console.log("Added to cart:", response);
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }
  },
}));
