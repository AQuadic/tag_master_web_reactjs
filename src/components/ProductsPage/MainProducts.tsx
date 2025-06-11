"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";
import ProductsSearchbar from "./ProductsSearchbar";

const MainProducts = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  return (
    <main>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">المنتجات</h1>
      <ProductsSearchbar />
      <ProductsFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
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
