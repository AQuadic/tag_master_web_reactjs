"use client";
import { ProductTypes } from "@/types/product";
import React from "react";
import ReviewStarIcon from "../icons/general/ReviewStarIcon";
import { Button } from "../ui/button";
import SingleProductColorPicker from "./SingleProductColorPicker";

interface SingleProductDetailsProps {
  product: ProductTypes;
}

const SingleProductDetails = ({ product }: SingleProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = React.useState<string>("");
  const price = parseInt(product.price);
  const discount = parseInt(product.discount) || 10;

  return (
    <section className="w-full flex flex-col ">
      <div className="flex flex-wrap justify-between">
        <h2 className="font-bold text-lg sm:text-2xl max-w-[400px]">
          {product.name.ar}
        </h2>
        <div className="flex flex-col ">
          <span className="text-main-green text-lg sm:text-2xl font-bold">
            {price - discount} درهم
          </span>
          {discount > 0 && (
            <span className="">
              <span className="line-through text-secondary-text">
                {product.price}
              </span>
              <span className="text-main-green">
                {" "}
                خصم {Math.round((discount * 100) / price)} %
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1 my-5 sm:my-8">
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        (5)
      </div>
      <p className="mb-5 sm:mb-8 text-lg">{product.description.ar}</p>
      <p className="text-lg mb-2 sm:mb-4">لون المنتج الذي تفضله:</p>
      <SingleProductColorPicker
        options={product.options}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <Button className="px-20 rounded-full bg-main-blue cursor-pointer mt-5 self-start">
        + إضافة سريعة
      </Button>
    </section>
  );
};

export default SingleProductDetails;
