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
  cart_items: CartItem[];
  total_price?: number;
  final_total?: number;
  discount_amount?: number;
  tax_value?: number;
}

interface CartState {
  cart: Cart | null;
  coupon: string;
  setCoupon: (coupon: string) => void;
  getCart: () => Promise<void>;
  addToCart: (itemId: number) => Promise<void>;
  getItemsCount: () => number;
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

  addToCart: async (itemId: number) => {
    try {
      const response = await addToCart(itemId);
      console.log("Added to cart:", response);
      await get().getCart()
    } catch (error) {
      console.error("Failed to add product to cart", error);
      toast.error("فشل في إضافة المنتج للسلة");
    }
  },

   getItemsCount: () => {
  const { cart } = get();
  return cart?.cart_items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
},

}));
