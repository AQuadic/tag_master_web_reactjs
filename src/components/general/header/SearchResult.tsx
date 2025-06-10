import ReviewStarIcon from "@/components/icons/general/ReviewStarIcon";
import Image from "next/image";
import React from "react";

const SearchResult = () => {
  return (
    <div className="flex items-center  gap-3">
      <Image
        src="/images/searchPlaceholder.png"
        alt="image"
        width={56}
        height={56}
      />
      <div>
        <p>بطاقة تاج ستار - قم بحفر الإسم مخصص على البطاقة</p>
        <div className="flex items-center gap-4">
          <p>
            204 درهم <span className="line-through">529</span>
          </p>
          <div className="flex items-center gap-1">
            <ReviewStarIcon />
            <ReviewStarIcon />
            <ReviewStarIcon />
            <ReviewStarIcon />
            <ReviewStarIcon />
            <span className="text-secondary-text">(5)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
