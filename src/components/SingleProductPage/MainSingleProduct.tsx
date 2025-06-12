import { ProductTypes } from "@/types/product";
import React from "react";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductGallery from "./SingleProductGallery";

interface MainSingleProductProps {
  product: ProductTypes;
}

const MainSingleProduct = ({ product }: MainSingleProductProps) => {
  return (
    <main className="flex  gap-8 container justify-between">
      <SingleProductGallery images={product.images} />
      <SingleProductDetails product={product} />
    </main>
  );
};

export default MainSingleProduct;
