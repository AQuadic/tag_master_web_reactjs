"use client";
import { ProductTypes } from "@/types/product";
import React from "react";
import EmptyState from "../general/EmptyState";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
// import { useCartStore } from "../stores/cartStore";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import ProductsFilter from "./ProductsFilter";
import ProductsSearchbar from "./ProductsSearchbar";

interface MainProductsProps {
  data: ProductTypes[];
  totalPages?: number;
  initialSearch?: string;
  initialPage?: number;
  initialFilter?: string;
}

const MainProducts = ({
  data,
  totalPages = 1,
  initialSearch = "",
  initialPage = 1,
  initialFilter = "",
}: MainProductsProps) => {
  const t = useTranslations("products");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Use URL params as source of truth, fallback to initial values
  const searchQuery = searchParams.get("search") || initialSearch;
  const currentStep = parseInt(
    searchParams.get("page") || initialPage.toString()
  );
  const selectedFilter = searchParams.get("filter") || initialFilter;

  // Function to update URL with new search params
  const updateSearchParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // Reset page to 1 when search or filter changes
    if (newParams.search !== undefined || newParams.filter !== undefined) {
      params.delete("page");
    }

    const newUrl = params.toString() ? `?${params.toString()}` : "/products";

    // Use replace for search to avoid cluttering browser history
    if (newParams.search !== undefined) {
      router.replace(newUrl);
    } else {
      router.push(newUrl);
    }
  };

  const handleSearchChange = (newSearch: string) => {
    // Only update if the search value actually changed
    if (newSearch !== searchQuery) {
      updateSearchParams({ search: newSearch });
    }
  };

  const handleFilterChange = (newFilter: string) => {
    // Only update if the filter value actually changed
    if (newFilter !== selectedFilter) {
      updateSearchParams({ filter: newFilter });
    }
  };

  const handlePageChange = (newPage: number) => {
    updateSearchParams({ page: newPage.toString() });
  };

  // const { addToCart } = useCartStore();
  // Removed unused handleAddToCart
  return (
    <main>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">
        {t("products")}
      </h1>
      <h1 className="font-bold text-2xl text-center mt-8 sm:mt-16">
        {t("products")}
      </h1>
      <ProductsSearchbar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <ProductsFilter
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
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
        onPageChange={handlePageChange}
        totalSteps={totalPages}
      />
    </main>
  );
};

export default MainProducts;
