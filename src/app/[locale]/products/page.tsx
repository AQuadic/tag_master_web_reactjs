// app/products/page.tsx (App Router)
import { getProducts } from "@/api/products/getProducts";
import MainProducts from "@/components/ProductsPage/MainProducts";
import React from "react";

interface ProductsPageProps {
  searchParams: {
    search?: string;
    page?: string;
    filter?: string;
  };
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const search = searchParams.search || "";
  const page = parseInt(searchParams.page || "1");
  const filter = searchParams.filter || "";

  try {
    const response = await getProducts(page, search, filter);

    return (
      <MainProducts
        data={response.data || []}
        totalPages={response.last_page || 1}
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
        totalPages={1}
        initialSearch={search}
        initialPage={page}
        initialFilter={filter}
      />
    );
  }
};

export default ProductsPage;
