import { axios } from "@/lib/axios";
import { ProductTypes } from "@/types/product";
import { PostType } from "@/types/blogs";

export interface FavoriteItem {
  id: number;
  favorable_type: "product" | "blog";
  favorable_id: number;
  favorable: ProductTypes | PostType;
  created_at: string;
  updated_at: string;
}

export const getFavorites = async (): Promise<FavoriteItem[]> => {
  const response = await axios.get("/favorites");
  return response.data ?? [];
};