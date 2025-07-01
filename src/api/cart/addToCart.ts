import { axios } from "@/lib/axios";

export const addToCart = async (itemId: number) => {
  const token = localStorage.getItem("tag-master-token");
  return await axios.post("/cart", {
    item_id: itemId,
    item_type: "product",
    quantity: 1,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
