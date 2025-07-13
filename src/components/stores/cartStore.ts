import { addToCart } from "@/api/cart/addToCart";
import { deleteCartItem } from "@/api/cart/deleteFromCart";
import { getCart } from "@/api/cart/getCart";
import { toast } from "sonner";
import { create } from "zustand";

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
  isLoading: boolean;
  isInitialized: boolean;
  itemsCount: number;
  setCoupon: (coupon: string) => void;
  getCart: () => Promise<void>;
  addToCart: (
    itemable_type: string,
    itemable_id: number,
    quantity: number
  ) => Promise<void>;
  removeFromCart: (
    cartItemId: number,
    itemableId: number,
    itemableType: string,
    newQuantity?: number
  ) => Promise<void>;
  getItemsCount: () => number;
  fetchInitialCart: () => Promise<void>;
  initializeCart: () => Promise<void>;
  updateItemsCount: () => void;
}

const hasToken = () => {
  if (typeof window === "undefined") return false;
  return !!document.cookie.includes("tag-master-token=");
};

export const useCartStore = create<CartState>((set, get) => {
  const calculateItemsCount = (cart: Cart | null): number => {
    if (!cart || !Array.isArray(cart.items)) {
      return 0;
    }
    return cart.items.reduce(
      (sum, item) => sum + (Number(item.quantity) || 0),
      0
    );
  };

  const setCartAndUpdateCount = (cart: Cart | null) => {
    const newItemsCount = calculateItemsCount(cart);
    set({ cart, itemsCount: newItemsCount });
  };

  return {
    cart: null,
    coupon: "",
    isLoading: false,
    isInitialized: false,
    itemsCount: 0,

    setCoupon: (coupon) => set({ coupon }),

    getCart: async () => {
      if (get().isLoading) return;

      set({ isLoading: true });
      try {
        const coupon = get().coupon;
        const cartData = await getCart(coupon);
        setCartAndUpdateCount(cartData);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      } finally {
        set({ isLoading: false });
      }
    },

  addToCart: async (
      itemable_type: string,
      itemable_id: number,
      quantity: number
    ) => {
      try {
        await addToCart(itemable_type, itemable_id, quantity);
        toast.success("Cart updated successfully")
        const currentCart = get().cart;
        if (currentCart) {
          const existingItemIndex = currentCart.items.findIndex(
            (item) => item.itemable_id === itemable_id
          );

          let updatedItems;
          if (existingItemIndex >= 0) {
            updatedItems = currentCart.items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            updatedItems = [
              ...currentCart.items,
              {
                id: Date.now(), // temporary ID
                itemable_id,
                price: 0,
                quantity,
              },
            ];
          }

          const updatedCart = {
            ...currentCart,
            items: updatedItems,
          };

          setCartAndUpdateCount(updatedCart);
        }

        await get().getCart();
      } catch (error) {
        console.error("Failed to add product to cart", error);
        toast.error("فشل في إضافة المنتج للسلة");
        // Revert optimistic update by refetching from server
        await get().getCart();
      }
    },

    removeFromCart: async (cartItemId: number, itemableId: number, itemableType: string, newQuantity = 0) => {
      try {
        await deleteCartItem(cartItemId, itemableId, itemableType, newQuantity);

        await get().getCart();
        toast.success("Item removed from cart");
      } catch (error) {
        console.error("Failed to remove item from cart", error);
        toast.error("فشل في إزالة المنتج من السلة");
      }
    },

    updateItemsCount: () => {
      const { cart } = get();
      const newItemsCount = calculateItemsCount(cart);
      set({ itemsCount: newItemsCount });
    },

    getItemsCount: () => get().itemsCount,

    fetchInitialCart: async () => {
      if (get().isInitialized) return;

      try {
        await get().getCart();
      } catch (error) {
        console.error("Failed to fetch initial cart", error);
      } finally {
        set({ isInitialized: true });
      }
    },

    initializeCart: async () => {
      if (get().isInitialized) return;

      if (hasToken()) {
        await get().fetchInitialCart();
      } else {
        set({ isInitialized: true });
      }
    },
  };
});
