"use client";
import { Category } from "@/api/categories/getCategories";
import { ProductTypes } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import EmptyState from "../general/EmptyState";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
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
  categories: Category[];
}

const MainProducts = ({
  data,
  totalPages = 1,
  initialSearch = "",
  initialPage = 1,
  initialFilter = "",
  categories,
}: MainProductsProps) => {
  const t = useTranslations("products");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state to manage products data for immediate UI updates
  const [products, setProducts] = useState(data);
  // Add optimistic state for selected filter to prevent flickering
  const [optimisticFilter, setOptimisticFilter] = useState(initialFilter);
  // Add loading state for products
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  // Update local state when data prop changes (e.g., from pagination/filtering)
  useEffect(() => {
    setProducts(data);
    setIsLoadingProducts(false); // Data received, stop loading
  }, [data]);

  // Sync optimistic filter with URL params when they change
  useEffect(() => {
    const urlFilter = searchParams.get("filter") || "";
    setOptimisticFilter(urlFilter);
  }, [searchParams]);

  // Use URL params as source of truth, fallback to initial values
  const searchQuery = searchParams.get("search") || initialSearch;
  const currentStep = parseInt(
    searchParams.get("page") || initialPage.toString()
  );
  // Use optimistic filter for UI, URL filter for data fetching
  const selectedFilter = optimisticFilter;

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
      setIsLoadingProducts(true); // Start loading
      updateSearchParams({ search: newSearch });
    }
  };

  const handleFilterChange = (newFilter: string) => {
    // Only update if the filter value actually changed
    const currentUrlFilter = searchParams.get("filter") || "";
    if (newFilter !== currentUrlFilter) {
      setIsLoadingProducts(true); // Start loading
      // Immediately update optimistic state for smooth UI
      setOptimisticFilter(newFilter);
      // Then update URL which will trigger data refetch
      updateSearchParams({ filter: newFilter });
    }
  };

  const handlePageChange = (newPage: number) => {
    setIsLoadingProducts(true); // Start loading
    updateSearchParams({ page: newPage.toString() });
  };

  // Handle favorite toggle to update local state
  const handleFavoriteToggle = (
    productId: number,
    newFavoriteStatus: boolean
  ) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, is_favorite: newFavoriteStatus }
          : product
      )
    );
  };

  // const { addToCart } = useCartStore();
  // Removed unused handleAddToCart
  return (
    <main>
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
        categories={categories}
      />
      <AnimatePresence mode="wait">
        {isLoadingProducts ? (
          <motion.div
            key="loading"
            className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))}
          </motion.div>
        ) : products.length > 0 ? (
          <motion.div
            key="products"
            className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.05,
                  },
                }}
              >
                <ProductCard
                  product={product}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EmptyState />
          </motion.div>
        )}
      </AnimatePresence>

      <Pagination
        currentStep={currentStep}
        onPageChange={handlePageChange}
        totalSteps={totalPages}
      />
    </main>
  );
};

export default MainProducts;
