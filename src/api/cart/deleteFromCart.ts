import { axios } from "@/lib/axios";

export const deleteCartItem = async (cartItemId: number): Promise<void> => {
    await axios.delete(`/cart/${cartItemId}`);
};
