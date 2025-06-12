import { axios } from "@/lib/axios";
import { ProductsResponseTypes } from "@/types/product";

export const getProducts = async (
  page: number = 1
): Promise<ProductsResponseTypes> => {
  const response = await axios.get("/products", {
    params: {
      page,
    },
  });
  return response.data;
};
