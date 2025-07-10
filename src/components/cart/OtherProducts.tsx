"use client";
import { useQuery } from "@tanstack/react-query"
import { useTranslations, useLocale } from "next-intl"
import { addToFavorite } from "@/api/favorite/addToFav"
import { removeFromFavorite } from "@/api/favorite/removFromFav"
import { addToCart } from "@/api/cart/addToCart"
import { toast } from "sonner"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import FavoriteIcon from "../icons/products/FavoriteIcon"
import NotFavoriteIcon from "../icons/products/NotFavoriteIcon"
import { getCart } from "@/api/cart/getCart"
import { getProductsByCategory } from "@/api/products/getCategories"

const OtherProducts = () => {
  const t = useTranslations("maincart");
  const locale = useLocale();

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(""),
  });

  const firstCategoryId = cartData?.items?.[0]?.itemable?.category_id;

  const { data, isLoading } = useQuery({
    queryKey: ["similar-products", firstCategoryId],
    queryFn: () => getProductsByCategory(firstCategoryId),
    enabled: !!firstCategoryId,
  });

  const [similarProducts, setSimilarProducts] = useState<any[]>([]);
  useEffect(() => {
    if (data) {
      setSimilarProducts(data);
    }
  }, [data]);

  const handleToggleFavorite = async (product: any, index: number) => {
    try {
      if (product.is_favorite) {
        await removeFromFavorite({ favorable_id: product.id, favorable_type: "product" });
        toast.success("تم إزالة المنتج من المفضلة");
      } else {
        await addToFavorite({ favorable_id: product.id, favorable_type: "product" });
        toast.success("تم إضافة المنتج إلى المفضلة");
      }

      const updatedProducts = [...similarProducts];
      updatedProducts[index] = {
        ...product,
        is_favorite: !product.is_favorite,
      };
      setSimilarProducts(updatedProducts);
    } catch (error) {
      toast.error("حدث خطأ أثناء تعديل المفضلة");
    }
  };

  const handleAddToCart = async (productId: number) => {
    try {
      await addToCart("product", productId, 1);
      toast.success("تمت إضافة المنتج إلى السلة");
    } catch (error) {
      toast.error("فشل في إضافة المنتج");
    }
  };

  if (!firstCategoryId || isLoading || !similarProducts?.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-[#000000] text-[21px] font-medium">{t("anotherProducts")}</h2>
      <div className="mt-[22px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {similarProducts.map((item, index) => (
          <div key={item.id} className="relative w-[281px] h-[348px] rounded-md bg-[#F6F7FB] mt-4 p-2">
            <Image
              src={item.images?.[0]?.responsive_urls?.[0] || "/placeholder.png"}
              alt="product"
              width={281}
              height={162}
              className="rounded-md w-[281px] h-[162px]"
            />
            <div className="absolute top-6 w-full flex justify-between items-center z-20">
              <div
              className="absolute top-2 left-5 bg-[#2CF257]  px-3 py-2 rounded-xl text-white font-semibold text-xs "
            >
              {t("recentlyAdded")}
            </div>
            <button onClick={() => handleToggleFavorite(item, index)} className="absolute top-3 rtl:right-3 ltr:right-8">
              {item.is_favorite ? <FavoriteIcon /> : <NotFavoriteIcon />}
            </button>
            </div>
            <div className="mt-3 px-3">
              <p className="text-[#000000] text-lg font-medium">
                {parseInt(item.price) - parseInt(item.discount)}{" "}
                <span className="line-through text-[#4A4A4A] font-normal mx-2">{item.price}</span>
              </p>
              <p className="text-[#4A4A4A] text-[17px] mt-2">{item.description?.[locale]}</p>
              <button
                onClick={() => handleAddToCart(item.id)}
                className="w-full h-11 bg-[#2F3437] text-[#FFFFFF] text-base rounded-[39px] mt-4"
              >
                  {t("quickAdd")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherProducts
