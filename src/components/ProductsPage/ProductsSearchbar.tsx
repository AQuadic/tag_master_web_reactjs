import { useDebounce } from "@/hooks/useDebounce";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "../icons/products/SearchIcon";
import { Input } from "../ui/input";

interface ProductsSearchbarProps {
  searchQuery: string;
  onSearchChange: (search: string) => void;
}

const ProductsSearchbar = ({
  searchQuery,
  onSearchChange,
}: ProductsSearchbarProps) => {
  const t = useTranslations("products");
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const debouncedSearchQuery = useDebounce(localSearchQuery, 500);

  // Update local state when searchQuery prop changes (e.g., from URL)
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Call onSearchChange when debounced value changes
  useEffect(() => {
    if (debouncedSearchQuery !== searchQuery) {
      onSearchChange(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onSearchChange, searchQuery]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchQuery(e.target.value);
    },
    []
  );

  return (
    <div className="relative max-w-[890px] mx-auto container">
      <Input
        value={localSearchQuery}
        onChange={handleInputChange}
        className="rounded-full p-6 border-primary   my-8"
        placeholder={t("searchFor")}
      />
      <span className="absolute top-1/2 rtl:left-8 ltr:right-8 transform -translate-y-1/2">
        <SearchIcon />
      </span>
    </div>
  );
};

export default ProductsSearchbar;
