import Link from "next/link";
import React from "react";
import product1 from '../../../public/images/home/products/product1.png'
import product2 from '../../../public/images/home/products/product2.png'
import product3 from '../../../public/images/home/products/product3.png'
import Image from "next/image";
import Arrow from "../icons/home/Arrow";

const HomeBestSelling = () => {
  const productsData = [
    {
      image:product1,
      title : 'ميدالية مفاتيح جلدية بتقنية NFC - لون عنابي',
      description: 'ميدالية مفاتيح أنيقة مصنوعة من الجلد الفاخر بلون عنابي, مزودة بتقنية NFC لتمكينك من مشاركة معلوماتك أو روابطك الاجتماعية بسرعة وسهولة بمجرد لمس هاتفك'
    },
    {
      image:product2,
      title : 'ميدالية مفاتيح جلدية بتقنية NFC - لون عنابي',
      description: 'ميدالية مفاتيح أنيقة مصنوعة من الجلد الفاخر بلون عنابي, مزودة بتقنية NFC لتمكينك من مشاركة معلوماتك أو روابطك الاجتماعية بسرعة وسهولة بمجرد لمس هاتفك'
    },
    {
      image:product3,
      title : 'ميدالية مفاتيح جلدية بتقنية NFC - لون عنابي',
      description: 'ميدالية مفاتيح أنيقة مصنوعة من الجلد الفاخر بلون عنابي, مزودة بتقنية NFC لتمكينك من مشاركة معلوماتك أو روابطك الاجتماعية بسرعة وسهولة بمجرد لمس هاتفك'
    },
  ];

  return (
    <section className="bg-[#F6F7FB] mt-[81px] py-[80px]">
      <div className="container">
        <div className="flex">
          <div className="mx-auto text-center">
            <Link href='/' className="text-[#007CC2] text-[14px]">تصفح أفضل المنتجات</Link>
            <h2 className="text-[#000000] text-[25px] font-bold">مجموعة منتجاتنا المميزة</h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#000000] text-base font-semibold">رؤية المزيد</p>
            <Arrow />
          </div>
        </div>

        <div className="mt-[50px]">
          {productsData.map((item, index) => {
            const isRightPosition = index % 2 === 1
            return (
              <div key={index} className="flex md:flex-row flex-col items-center gap-4 mt-10">
                <Image className={`w-[184px] h-[184px] rounded-md ${isRightPosition ? 'order-2' : ''}`} src={item.image} alt="" />
                <div className="w-full lg:h-[184px] border border-[#D9D9D9] rounded-md py-4 px-8">
                  <h2 className="text-[#000000] text-[21px] font-bold">{item.title}</h2>
                  <p className="lg:w-[731px] text-[#464B4E] text-[17px] mt-2.5">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFB74A] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                      ))}
                      <p className="ms-1 text-sm font-medium text-[#7B7E80]">(5)</p>
                    </div>
                    <button className="w-[160px] h-11 bg-[#2F3437] text-[#FFFFFF] text-base rounded-[39px]">+ إضافة سريعة</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBestSelling;
