import { create } from "zustand";
import { addToCart } from "@/api/cart/addToCart";
import { getCart } from "@/api/cart/getCart"; 
import { toast } from "sonner";

interface CartItem {
  id: number;
  itemable_id: number;
  price: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  calculations: {
    total: number;
    subtotal: number;
    tax: number;
    discount: number;
    delivery_fees: number;
  };
  session: {
    session_id: number;
    new_session: boolean;
  };
}


interface CartState {
  cart: Cart | null;
  coupon: string;
  setCoupon: (coupon: string) => void;
  getCart: () => Promise<void>;
  addToCart: (itemable_type: string, itemable_id: number, quantity: number) => Promise<void>;
  getItemsCount: () => number;
  fetchInitialCart: () => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: null,
  coupon: "",

  setCoupon: (coupon) => set({ coupon }),

  getCart: async () => {
    try {
      const coupon = get().coupon;
      const cartData = await getCart(coupon);
      set({ cart: cartData });
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  },

  addToCart: async (itemable_type: string, itemable_id: number, quantity: number) => {
    try {
      const response = await addToCart(itemable_type, itemable_id, quantity);
      console.log("Added to cart:", response);
      await get().getCart()
    } catch (error) {
      console.error("Failed to add product to cart", error);
      toast.error("فشل في إضافة المنتج للسلة");
    }
  },

getItemsCount: () => {
  const { cart } = get();
  return cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
},


  fetchInitialCart: async () => {
    try {
      await get().getCart();
    } catch (error) {
      console.error("Failed to fetch initial cart", error);
    }
  },

}));
