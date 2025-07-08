import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MyProductsDetails = () => {
  const t = useTranslations("profile");
  const ProductsData = [
    {
      image: "/images/products/product1.png",
      priceAfterDiscount: "204 درهم",
      price: "520",
      description: "بطاقة تاج ستار  - قم بحفر الإسم مخصص على البطاقة",
    },
    {
      image: "/images/products/product2.png",
      priceAfterDiscount: "204 درهم",
      price: "520",
      description: "بطاقة تاج ستار  - قم بحفر الإسم مخصص على البطاقة",
    },
    {
      image: "/images/products/product3.png",
      priceAfterDiscount: "204 درهم",
      price: "520",
      description: "بطاقة تاج ستار  - قم بحفر الإسم مخصص على البطاقة",
    },
    {
      image: "/images/products/product1.png",
      priceAfterDiscount: "204 درهم",
      price: "520",
      description: "بطاقة تاج ستار  - قم بحفر الإسم مخصص على البطاقة",
    },
  ];
  return (
    <section className="mt-10">
      <div className="flex w-full flex-col gap-6 mt-10">
        <Tabs defaultValue="products" >
          <TabsList className="pb-5">
            <TabsTrigger className="w-32 lg:w-full md:w-40" value="products">
              {t('theproducts')}
            </TabsTrigger>
            <TabsTrigger className="w-32 lg:w-full md:w-40" value="orders">
              {t('orders')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="md:mt-[60px]">
            <div className="mt-[22px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {ProductsData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full h-[348px] rounded-md bg-[#F6F7FB] mt-4"
                >
                  <Image
                    src={item.image}
                    alt="product"
                    width={281}
                    height={162}
                    className="w-full"
                  />
                  <div className="mt-3 px-[18px] flex flex-wrap items-center md:justify-between مل:gap-8">
                    <p className="text-[#000000] text-lg font-medium">
                      {item.priceAfterDiscount}
                      <span className="line-through text-[#4A4A4A] font-normal mx-2">
                        {item.price}
                      </span>
                    </p>
                    <div className="flex items-center">
                      <svg
                        className="w-[10px] h-[10px] text-[#FFB74A] ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[10px] h-[10px] text-[#FFB74A] ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[10px] h-[10px] text-[#FFB74A] ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[10px] h-[10px] text-[#FFB74A] ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[10px] h-[10px] ms-1 text-[#FFB74A]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className="text-[#7B7E80] text-[10px] mx-2">(5)</p>
                    </div>
                  </div>
                  <p className="text-[#4A4A4A] text-[17px] px-[18px] mt-3">
                    {item.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button className="px-5 h-11 bg-[#2F3437] text-[#FFFFFF] text-base rounded-[39px]">
                      + إضافة سريعة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="md:mt-[60px]">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-[#000000] text-lg font-medium text-center"
                    >
                      {t('id')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-[#000000] text-lg font-medium text-center"
                    >
                      {t('product')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-[#000000] text-lg font-medium text-center"
                    >
                      {t('date')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-[#000000] text-lg font-medium text-center"
                    >
                      {t('value')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-[#000000] text-lg font-medium text-center"
                    >
                      {t('address')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-[#5A5A5A]">
                    <th scope="row" className="px-6 py-4">
                      #123
                    </th>
                    <td className="px-6 py-4">Business Card</td>
                    <td className="px-6 py-4">12 Jun 2025</td>
                    <td className="px-6 py-4">130 درهم</td>
                    <td className="px-6 py-4">الشارقة مدينة عجمان شارع 32</td>
                  </tr>
                  <tr className="bg-white text-[#5A5A5A]">
                    <th scope="row" className="px-6 py-4">
                      #123
                    </th>
                    <td className="px-6 py-4">Business Card</td>
                    <td className="px-6 py-4">12 Jun 2025</td>
                    <td className="px-6 py-4">130 درهم</td>
                    <td className="px-6 py-4">الشارقة مدينة عجمان شارع 32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MyProductsDetails;
