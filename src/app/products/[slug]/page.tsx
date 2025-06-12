import { getSingleProduct } from "@/api/products/getSingleProduct";
import MainSingleProduct from "@/components/SingleProductPage/MainSingleProduct";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const product = await getSingleProduct(slug);
  return <MainSingleProduct product={product} />;
};

export default page;
