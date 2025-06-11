import React from "react";

const filters = [
  {
    key: "",
    titleEn: "All",
    titleAr: "الكل",
  },
  {
    key: "digital_work_card",
    titleEn: "Digital Work Card",
    titleAr: "بطاقة العمل الرقمية",
  },
  {
    key: "digital_key_series",
    titleEn: "Digital Key Series",
    titleAr: "سلسلة المفاتيح الرقمية",
  },
  {
    key: "advanced_wallet_booklet",
    titleEn: "Advanced Wallet Booklet",
    titleAr: "بوكت المحفظة المتطورة",
  },
  {
    key: "digital_sticker",
    titleEn: "Digital Sticker",
    titleAr: "الملصق الرقمي",
  },
  {
    key: "custom_work_card",
    titleEn: "Custom Work Card",
    titleAr: "بطاقة العمل المخصصة",
  },
];

interface ProductsFilterProps {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsFilter = ({
  selectedFilter,
  setSelectedFilter,
}: ProductsFilterProps) => {
  return (
    <div className="container flex items-center justify-between flex-wrap gap-5">
      {filters.map((filter) => (
        <button
          key={filter.titleEn}
          onClick={() => setSelectedFilter(filter.key)}
          className={`py-2 px-4 cursor-pointer ${
            selectedFilter === filter.key
              ? "bg-main-blue text-white rounded-full"
              : ""
          }`}
        >
          {filter.titleAr}
        </button>
      ))}
    </div>
  );
};

export default ProductsFilter;
