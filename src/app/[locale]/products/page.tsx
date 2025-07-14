// app/products/page.tsx (App Router)
import { getProducts } from "@/api/products/getProducts";
import MainProducts from "@/components/ProductsPage/MainProducts";
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

  try {
    const response = await getProducts(page, search, filter);

    return (
      <MainProducts
        data={response.data || []}
        totalPages={response.total_pages} 
        initialSearch={search}
        initialPage={page}
        initialFilter={filter}
      />
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <MainProducts
        data={[]}
        initialSearch={search}
        initialPage={page}
        initialFilter={filter}
      />
    );
  }
};

export default ProductsPage;
