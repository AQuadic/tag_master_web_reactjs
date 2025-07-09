import { axios } from "@/lib/axios";
import { ProductsResponseTypes } from "@/types/product";

export const getProductsByCategory = async (categoryId: number): Promise<ProductsResponseTypes[]> => {
    const response = await axios.get("/products", {
        params: {
        category_id: categoryId,
        },
    });
    return response.data.data;
};
