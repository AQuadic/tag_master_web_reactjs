"use client";
import { ProductsResponseTypes } from "@/types/product";
import React, { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";
import ProductsSearchbar from "./ProductsSearchbar";

interface MainProductsProps {
  data: ProductsResponseTypes;
}

const MainProducts = ({ data }: MainProductsProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  console.log("data", data);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  return (
    <main>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">المنتجات</h1>
      <ProductsSearchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductsFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={3}
      />
    </main>
  );
};

export default MainProducts;
