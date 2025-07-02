import { axios } from "@/lib/axios";
import { getSessionId } from "@/lib/session";

export const getCart = async (coupon: string) => {
  const session_id = getSessionId();
  const res = await axios.get(`/cart?coupon=${coupon}&session_id=${session_id}`);
  return res.data;
};
