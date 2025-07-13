"use client";
import { ProductTypes } from "@/types/product";
import React, { useState } from "react";
import EmptyState from "../general/EmptyState";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
// import { useCartStore } from "../stores/cartStore";
import { useTranslations } from "next-intl";
import ProductsFilter from "./ProductsFilter";
import ProductsSearchbar from "./ProductsSearchbar";

interface MainProductsProps {
  data: ProductTypes[];
}

const MainProducts = ({ data }: MainProductsProps) => {
  const t = useTranslations("products");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  // const { addToCart } = useCartStore();
  // Removed unused handleAddToCart
  return (
    <main>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">
        {t("products")}
      </h1>
      <ProductsSearchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductsFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {data.length > 0 ? (
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      <Pagination
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={3}
      />
    </main>
  );
};

export default MainProducts;
