import { axios } from "@/lib/axios";

export interface CategoryImage {
  file_name: string;
  url: string;
  uuid: string;
  mime_type: string;
  responsive_urls: string[];
}

export interface Category {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  image: CategoryImage;
}

export interface CategoriesResponse {
  data: Category[];
}

export const getCategories = async (
  token?: string
): Promise<CategoriesResponse> => {
  try {
    const response = await axios.get("/category", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching categories: ", error);

    if (error instanceof Error) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
    throw new Error("Failed to fetch categories");
  }
};
