import React from "react";
import SearchIcon from "../icons/products/SearchIcon";
import { Input } from "../ui/input";

const ProductsSearchbar = () => {
  return (
    <div className="relative max-w-[890px] mx-auto">
      <Input
        className="rounded-full p-6 border-main-blue   my-8"
        placeholder="البحث عن اسم منتج"
      />
      <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <SearchIcon />
      </span>
    </div>
  );
};

export default ProductsSearchbar;
