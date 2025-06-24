import { axios } from "@/lib/axios";
import { ProductsResponseTypes } from "@/types/product";

export const getProducts = async (
  page: number = 1,
  search: string = ""
): Promise<ProductsResponseTypes> => {
  const response = await axios.get("/products", {
    params: {
      page,
      q: search,
    },
  });
  return response.data;
};
