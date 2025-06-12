import { ProductTypes } from "@/types/product";
import React from "react";
import SingleProductBreadCrumb from "./SingleProductBreadCrumb";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductGallery from "./SingleProductGallery";

interface MainSingleProductProps {
  product: ProductTypes;
}

const MainSingleProduct = ({ product }: MainSingleProductProps) => {
  return (
    <main>
      <SingleProductBreadCrumb title={product.name.ar} />
      <div className="flex  gap-8 container justify-between">
        <SingleProductGallery images={product.images} />
        <SingleProductDetails product={product} />
      </div>
    </main>
  );
};

export default MainSingleProduct;
