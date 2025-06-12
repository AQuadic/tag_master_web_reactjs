import { axios } from "@/lib/axios";
import { ProductTypes } from "@/types/product";

export const getSingleProduct = async (id: string): Promise<ProductTypes> => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};
