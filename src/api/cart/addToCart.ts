import { axios } from "@/lib/axios";
import { getSessionId } from "@/lib/session";

export const addToCart = async (
  itemable_type: string,
  itemable_id: number,
  quantity: number
) => {
  const session_id = getSessionId();
  return await axios.post("/cart", {
    itemable_id,
    itemable_type,
    quantity,
    session_id,
  });
};
