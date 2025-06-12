import { ProductTypes } from "@/types/product";
import React from "react";

interface MainSingleProductProps {
  product: ProductTypes;
}

const MainSingleProduct = ({ product }: MainSingleProductProps) => {
  return <div>{product.name.ar}</div>;
};

export default MainSingleProduct;
