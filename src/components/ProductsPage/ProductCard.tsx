import Image from "next/image";
import React from "react";
import ReviewStarIcon from "../icons/general/ReviewStarIcon";
import NotFavoriteIcon from "../icons/products/NotFavoriteIcon";
import { Button } from "../ui/button";

const ProductCard = () => {
  const isNew = true;
  return (
    <div className="flex flex-col items-center gap-5 relative">
      <div className="absolute  top-6 w-full flex justify-between items-center">
        {isNew && (
          <p className="absolute left-5 bg-[#2CF257] p-2 rounded-full text-white font-bold text-xs">
            مضاف حديثا
          </p>
        )}
        <button className="cursor-pointer absolute right-5 z-10">
          <NotFavoriteIcon />
        </button>
      </div>
      <Image
        src="/images/productPlaceholder.png"
        width={280}
        height={162}
        alt="product"
        className="rounded-sm"
      />
      <div className="flex items-center justify-between w-[78%]">
        <p>
          204 درهم <span className="line-through">520</span>
        </p>
        <div className="flex items-center gap-1">
          <ReviewStarIcon />
          <ReviewStarIcon />
          <ReviewStarIcon />
          <ReviewStarIcon />
          <ReviewStarIcon />
          <span>(5)</span>
        </div>
      </div>
      <p className="w-[78%]  text-lg">
        بطاقة تاج ستار - قم بحفر الإسم مخصص على البطاقة
      </p>
      <Button className="rounded-full w-[80%] bg-[#2F3437] cursor-pointer">
        + إضافة سريعة
      </Button>
    </div>
  );
};

export default ProductCard;
