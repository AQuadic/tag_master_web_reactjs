import { axios } from "@/lib/axios";
import { getSessionId } from "@/lib/session";

export const addToCart = async (itemId: number) => {
  const session_id = getSessionId();
  return await axios.post("/cart", {
    item_id: itemId,
    item_type: "product",
    quantity: 1,
    session_id, 
  },
  );
};
