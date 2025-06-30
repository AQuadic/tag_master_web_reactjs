import { axios } from "@/lib/axios";

interface RemoveFavoriteParams {
  favorable_id: number;
  favorable_type: string;
}

interface RemoveFromFavResponse {
  success: boolean;
  message: string;
}

export const removeFromFavorite = async ({
  favorable_id,
  favorable_type,
}: RemoveFavoriteParams): Promise<RemoveFromFavResponse> => {
  const response = await axios.delete("/favorites", {
    params: {
      favorable_id,
      favorable_type,
    },
    headers: {
      Accept: "application/json",
    },
  });

  return response.data;
};
