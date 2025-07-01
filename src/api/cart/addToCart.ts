import { axios } from "@/lib/axios";

export const addToCart = async (itemId: number) => {
  return await axios.post("/cart", {
    item_id: itemId,
    item_type: "product",
    quantity: 1,
  },
  );
};
