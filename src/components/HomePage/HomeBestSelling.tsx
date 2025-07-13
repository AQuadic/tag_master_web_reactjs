"use client";
import { addToCart } from "@/api/cart/addToCart";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import EmptyState from "../general/EmptyState";
import Arrow from "../icons/home/Arrow";
import { useCartStore } from "../stores/cartStore";

interface Product {
  id: number;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  images: { url: string }[];
  price: string;
}

interface HomeBestSellingProps {
  data?: Product[];
}

const HomeBestSelling = ({ data }: HomeBestSellingProps) => {
  const t = useTranslations("bestProducts");
  const locale = useLocale();
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = async (productId: number) => {
    try {
      await addToCart("product", productId, 1);
      // toast.success(t("addedToCartSuccessfully"));
    } catch (error: any) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.message ||
        "حدث خطأ أثناء إضافة المنتج إلى السلة";

      toast.error(apiMessage);
    }
  };

  if (!data || data.length === 0) {
    return (
      <div>
        <EmptyState />
      </div>
    );
  }

  return (
    <section className="bg-[#F6F7FB] mt-[81px] py-[80px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-center mx-auto">
            <h2 className="text-[#007CC2] text-[14px]">{t("bestProducts")}</h2>
            <h2 className="text-[#000000] text-[25px] font-bold">
              {t("specialCollection")}
            </h2>
          </div>
          <Link href="/products" className="flex items-center gap-3">
            <p className="text-[#000000] text-base font-semibold">
              {t("seeMore")}
            </p>
            <Arrow />
          </Link>
        </div>

        <div className="mt-[50px]">
          {data.slice(0, 4).map((item, index) => {
            const isRightPosition = index % 2 === 1;
            const imageUrl = item.images?.[0]?.url;

            return (
              <div
                key={item.id}
                className="flex md:flex-row flex-col items-center gap-4 mt-10"
              >
                <Image
                  src={imageUrl}
                  alt={item.name.ar}
                  width={184}
                  height={184}
                  className={`w-[184px] h-[184px] rounded-md ${
                    isRightPosition ? "order-2" : ""
                  }`}
                />
                <div className="w-full h-full border border-[#D9D9D9] rounded-md py-4 px-8">
                  <h2 className="text-[#000000] text-[21px] font-bold">
                    {item.name?.[locale as "ar" | "en"]}
                  </h2>
                  <p className="lg:w-[731px] text-[#464B4E] text-[17px] mt-2.5">
                    {item.description?.[locale as "ar" | "en"]}
                  </p>
                  <p className="mt-4">{item.price}</p>
                  <div className="flex items-center justify-end mt-4">
                    {/* <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#FFB74A] me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523..." />
                        </svg>
                      ))}
                      <p className="ms-1 text-sm font-medium text-[#7B7E80]">(5)</p>
                    </div> */}
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className="w-[160px] h-11 bg-[#2F3437] text-white text-base rounded-[39px]"
                    >
                      {t("quickAdd")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBestSelling;
