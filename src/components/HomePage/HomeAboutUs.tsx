import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAboutUs = () => {
  return (
    <section className="bg-[#5985BB] text-white">
      <div className="container py-20 md:py-32 flex items-center gap-10 flex-wrap">
        <Image
          width={506}
          height={350}
          src="/images/home/about.png"
          alt="about"
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">عن تاج ماستر</h2>
          <p className="text-lg max-w-[600px]">
            في عالم الأعمال السريع اليوم، تمثل بطاقة العمل الرقمية الخاصة بنا
            أحدث وسائل التواصل والربط المهني. إنها حل صديق للبيئة ومواكب
            للتكنولوجيا، يتيح لك مشاركة معلومات الاتصال الخاصة بك بشكل فوري
            وسهل. وبفضل تقنيتي الاتصال قريب المدى (NFC) ورمز الاستجابة السريعة
            (QR)، تتحول بطاقتنا الرقمية إلى بديل ديناميكي للبطاقة التقليدية.
          </p>
          <Link
            href="/"
            className="self-start px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black  transition-colors duration-300 font-bold"
          >
            اعرف المزيد
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
