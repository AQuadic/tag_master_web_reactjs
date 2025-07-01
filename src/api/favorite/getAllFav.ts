import { axios } from "@/lib/axios";
import { ProductTypes } from "@/types/product";

export interface FavoriteItem {
  id: number;
  favorable_type: string;
  favorable_id: number;
  favorable: ProductTypes;
  created_at: string;
  updated_at: string;
}

export const getFavorites = async (): Promise<FavoriteItem[]> => {
  const response = await axios.get("/favorites");
  return response.data ?? [];
};