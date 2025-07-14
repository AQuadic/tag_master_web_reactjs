import React, { useState } from "react";
import Image from "next/image";
import FavoriteIcon from "../icons/products/FavoriteIcon";
import { useQuery } from "@tanstack/react-query";
import { FavoriteItem, getFavorites } from "@/api/favorite/getAllFav";
import Spinner from "../icons/general/Spinner";
import { toast } from "sonner";
import { removeFromFavorite } from "@/api/favorite/removFromFav";
import EmptyState from "../general/EmptyState";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

const FavoriteDetails = () => {
  const t = useTranslations("products");
  const [updating, setUpdating] = useState(false);
  const locale = useLocale ()
  const { data: favorites = [], isLoading, refetch } = useQuery<FavoriteItem[]>({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const handleRemoveFavorite = async (id: number) => {
    try {
      setUpdating(true);
      await removeFromFavorite({ favorable_id: id, favorable_type: "product" });
      toast.success("تمت إزالة المنتج من المفضلة");
      await refetch();
    } catch {
      toast.error("error");
    } finally {
      setUpdating(false);
    }
  };

  const productFavorites = favorites.filter(
    (fav) => fav.favorable_type === "product"
  );

  if (isLoading || updating) {
    return (
      <div className="flex justify-center my-10">
        <Spinner />
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div>
        <EmptyState />
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="mt-[22px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {productFavorites.map((item, index) => {
          const product = item.favorable;
          return (
            <div
              key={index}
              className="relative w-full h-[348px] rounded-md bg-[#F6F7FB] mt-4"
            >
              <Image
                src={product.image?.responsive_urls?.[0] || "/placeholder.jpg"}
                alt="product"
                width={281}
                height={162}
                className="w-full h-[162px]"
              />
              <button
                className="absolute top-4 right-4"
                onClick={() => handleRemoveFavorite(product.id)}
              >
                <FavoriteIcon />
              </button>
              <div className="w-[87px] h-[33px] bg-[#2CF257] rounded-[28px] flex items-center justify-center absolute top-4 rtl:left-10 ltr:left-4">
                <p className="text-[#FFFFFF] text-base">مضاف حديثا</p>
              </div>
              <div className="mt-3 px-[18px] flex items-center justify-between">
                <p className="text-[#000000] text-lg font-medium">
                  {product.price}
                </p>
              </div>
              <p className="text-[#4A4A4A] text-[17px] px-[18px] mt-3">
                {product.description?.[locale as "ar" | "en"]}
              </p>
              <div className="mt-4 flex justify-center">
                <button className="w-[255px] h-11 bg-[#2F3437] text-white text-base rounded-[39px]">
                  {t('quickAdd')}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default FavoriteDetails;
