import React from "react";
import SearchIcon from "../icons/products/SearchIcon";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

interface ProductsSearchbarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsSearchbar = ({
  searchQuery,
  setSearchQuery,
}: ProductsSearchbarProps) => {
  const t = useTranslations("products");

  return (
    <div className="relative max-w-[890px] mx-auto container">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-full p-6 border-primary   my-8"
        placeholder={t('searchFor')}
      />
      <span className="absolute top-1/2 rtl:left-8 ltr:right-8 transform -translate-y-1/2">
        <SearchIcon />
      </span>
    </div>
  );
};

export default ProductsSearchbar;
