import { ProductTypes } from "@/types/product";
import React from "react";
import SingleProductGallery from "./SingleProductGallery";

interface MainSingleProductProps {
  product: ProductTypes;
}

const MainSingleProduct = ({ product }: MainSingleProductProps) => {
  return (
    <main className="flex items-center gap-8 container">
      <SingleProductGallery images={product.images} />
      <div className="w-3/5">test</div>
    </main>
  );
};

export default MainSingleProduct;
