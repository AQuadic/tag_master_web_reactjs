"use client";
import { ProductTypes } from "@/types/product";
import React from "react";
import ReviewStarIcon from "../icons/general/ReviewStarIcon";
import { Button } from "../ui/button";
import SingleProductColorPicker from "./SingleProductColorPicker";
import { useLocale, useTranslations } from "next-intl";
import { useCartStore } from "../stores/cartStore";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface SingleProductDetailsProps {
  product: ProductTypes;
}

const SingleProductDetails = ({ product }: SingleProductDetailsProps) => {
  const t = useTranslations("products");
  const locale = useLocale();
  const [selectedColor, setSelectedColor] = React.useState<string>("");
  const price = parseInt(product.price);
  const discount = parseInt(product.discount) || 10;
  const queryClient = useQueryClient();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = async () => {
    try {
      await addToCart("product", product.id, 1);
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(t('addedToCartSuccessfully'));
    } catch (error: any) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.message ||
        "حدث خطأ أثناء إضافة المنتج إلى السلة";
      toast.error(apiMessage);
    }
  };

  return (
    <section className="w-full flex flex-col ">
      <div className="flex flex-wrap justify-between">
        <h2 className="font-bold text-lg sm:text-2xl max-w-[400px]">
            {product.name[locale as "ar" | "en"]}
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
                {t('discount')} {Math.round((discount * 100) / price)} %
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
      <p className="mb-5 sm:mb-8 text-lg">{product.description[locale as "ar" | "en"]}</p>
      <p className="text-lg mb-2 sm:mb-4">{t('favColor')}</p>
      <SingleProductColorPicker
        options={product.options}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <Button
        onClick={handleAddToCart}
        className="px-20 rounded-full bg-primary cursor-pointer mt-5 md:self-start"
      >
        {t('quickAdd')}
      </Button>
    </section>
  );
};

export default SingleProductDetails;
