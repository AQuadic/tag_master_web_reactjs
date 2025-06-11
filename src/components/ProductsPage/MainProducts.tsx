import React from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";
import ProductsSearchbar from "./ProductsSearchbar";

const MainProducts = () => {
  return (
    <main>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">المنتجات</h1>
      <ProductsSearchbar />
      <ProductsFilter />
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default MainProducts;
