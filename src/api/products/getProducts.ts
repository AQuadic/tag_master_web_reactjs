import { axios } from "@/lib/axios";
import { ProductsResponseTypes } from "@/types/product";

export const getProducts = async (
  page: number = 1,
  search: string = "",
  filter: string = "",
  token?: string
): Promise<ProductsResponseTypes & { total_pages: number }> => {
  const params: Record<string, string | number> = {
    page,
    per_page: 15,
  };

  if (search) {
    params.q = search;
  }

  if (filter) {
    params.category = filter;
  }

  try {
    const response = await axios.get("/products", {
      params,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    const hasNextPage = response.data.next_page_url !== null;
    const currentPage = response.data.current_page;

    const totalPages = hasNextPage ? currentPage + 1 : currentPage;

    return {
      ...response.data,
      total_pages: totalPages,
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    if (error instanceof Error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
    throw new Error("Failed to fetch products");
  }
};
