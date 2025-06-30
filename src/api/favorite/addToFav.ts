import axios from "axios";

interface FavoriteParams {
  favorable_id: number;
  favorable_type: string;
}

interface AddToFavResponse {
  success: boolean;
  message: string;
}

export const addToFavorite = async ({
  favorable_id,
  favorable_type,
}: FavoriteParams): Promise<AddToFavResponse> => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    "https://tag-master.aquadic.com/api/favorites",
    null,
    {
      params: {
        favorable_id,
        favorable_type,
      },
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
