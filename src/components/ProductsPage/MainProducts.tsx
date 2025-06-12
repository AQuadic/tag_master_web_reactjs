"use client";
import { ProductsResponseTypes } from "@/api/products/getProducts";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";
import ProductsSearchbar from "./ProductsSearchbar";

interface MainProductsProps {
  data: ProductsResponseTypes;
}

const MainProducts = ({ data }: MainProductsProps) => {
  console.log("Products data:", data);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  return (
    <main>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">المنتجات</h1>
      <ProductsSearchbar />
      <ProductsFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default MainProducts;
