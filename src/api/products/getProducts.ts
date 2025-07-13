import { axios } from "@/lib/axios";
import { ProductsResponseTypes } from "@/types/product";

export const getProducts = async (
  page: number = 1,
  search: string = "",
  filter: string = ""
): Promise<ProductsResponseTypes> => {
  const params: Record<string, string | number> = {
    page,
  };

  if (search) {
    params.q = search;
  }

  if (filter) {
    params.category = filter;
  }

  const response = await axios.get("/products", {
    params,
  });
  console.log(response);
  return response.data;
};
