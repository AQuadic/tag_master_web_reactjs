// app/products/page.tsx (App Router)
import { getCategories } from "@/api/categories/getCategories";
import { getProducts } from "@/api/products/getProducts";
import MainProducts from "@/components/ProductsPage/MainProducts";
import { cookies } from "next/headers";
import React from "react";

interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
    page?: string;
    filter?: string;
  }>;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams.search || "";
  const page = parseInt(resolvedSearchParams.page || "1");
  const filter = resolvedSearchParams.filter || "";

  // Fetch token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("tag-master-token")?.value;

  try {
    const [productsResponse, categoriesResponse] = await Promise.all([
      getProducts(page, search, filter, token),
      getCategories(token),
    ]);

    return (
      <MainProducts
        data={productsResponse.data || []}
        totalPages={productsResponse.total_pages}
        initialSearch={search}
        initialPage={page}
        initialFilter={filter}
        categories={categoriesResponse.data}
      />
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // Fallback: try to fetch categories even if products fail
    try {
      const categoriesResponse = await getCategories(token);
      return (
        <MainProducts
          data={[]}
          initialSearch={search}
          initialPage={page}
          initialFilter={filter}
          categories={categoriesResponse.data}
        />
      );
    } catch (categoriesError) {
      console.error("Error fetching categories:", categoriesError);
      return (
        <MainProducts
          data={[]}
          initialSearch={search}
          initialPage={page}
          initialFilter={filter}
          categories={[]}
        />
      );
    }
  }
};

export default ProductsPage;
