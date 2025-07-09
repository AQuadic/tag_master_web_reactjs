import { axios } from "@/lib/axios";

export const deleteCartItem = async (
  cartItemId: number,
  itemableId: number,
  itemableType: string,
  quantity: number
): Promise<void> => {
  await axios.delete(`/cart/${cartItemId}`, {
    data: {
      itemable_id: itemableId,
      itemable_type: itemableType,
      quantity,
    },
  });
};
