// app/products/page.tsx (App Router)
import { getProducts } from "@/api/products/getProducts";
import MainProducts from "@/components/ProductsPage/MainProducts";
import React from "react";

const ProductsPage = async () => {
  const data = await getProducts(1);

  return <MainProducts data={data} />;
};

export default ProductsPage;
