import Image from "next/image";
import React from "react";
import FavoriteIcon from "../icons/products/FavoriteIcon";
import { useQuery } from "@tanstack/react-query";
import { FavoriteItem, getFavorites } from "@/api/favorite/getAllFav";
import Spinner from "../icons/general/Spinner";

const FavoriteDetails = () => {
const { data: favorites = [], isLoading } = useQuery<FavoriteItem[]>({
  queryKey: ["favorites"],
  queryFn: getFavorites,
});

console.log("Favorites from useQuery:", favorites);


  console.log(favorites)

  if (isLoading || !favorites) {
    return (
      <div className="flex justify-center my-10">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div>
        <div className="mt-[22px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {favorites.map((item, index) => {
            const product = item.favorable;
            return (
              <div
                key={index}
                className="relative w-full h-[348px] rounded-md bg-[#F6F7FB] mt-4"
              >
              {product.image?.responsive_urls?.[0] ? (
                <Image
                  src={product.image.responsive_urls[0]}
                  alt="product"
                  width={281}
                  height={162}
                  className="w-full h-[162px]"
                />
              ) : (
                <Image
                  src="/placeholder.jpg" 
                  alt="No product image"
                  width={281}
                  height={162}
                  className="w-full"
                />
              )}
                <div className="absolute top-4 right-4">
                  <FavoriteIcon />
                </div>
                <div className="w-[87px] h-[33px] bg-[#2CF257] rounded-[28px] flex items-center justify-center absolute top-4 left-10">
                  <p className="text-[#FFFFFF] text-base">مضاف حديثا</p>
                </div>
                <div className="mt-3 px-[18px] flex items-center justify-between">
                  <p className="text-[#000000] text-lg font-medium">
                    {product.price} درهم
                  </p>
                </div>
                <p className="text-[#4A4A4A] text-[17px] px-[18px] mt-3">
                  {product.description.ar}
                </p>
                <div className="mt-4 flex justify-center">
                  <button className="w-[255px] h-11 bg-[#2F3437] text-[#FFFFFF] text-base rounded-[39px]">
                    + إضافة سريعة
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FavoriteDetails;
