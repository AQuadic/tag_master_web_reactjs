import { axios } from "@/lib/axios";
import { getSessionId } from "@/lib/session";

export const addToCart = async (
  itemable_type: string,
  itemable_id: number
) => {
  const session_id = getSessionId();
  return await axios.post("/cart", {
    itemable_id,
    itemable_type,
    quantity: 1,
    session_id,
  });
};
