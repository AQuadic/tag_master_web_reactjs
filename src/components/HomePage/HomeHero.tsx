import Link from "next/link";
import React from "react";

const HomeHero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/images/home/heroImage.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cover bg-center w-full min-h-[90dvh] mx-auto flex items-center relative"
    >
      <div className="container text-white ">
        <p className="text-2xl md:text-[50px] font-bold max-w-[420px] ">
          وسّع شبكتك بذكاء, تواصل بلمسة.
        </p>
        <p className="text-lg max-w-[440px] my-2">
          تاج ماستر, يقدم لك الجيل الجديد من أدوات التواصل الذكي — شارك ملفك
          الشخصي أو بيانات عملك بلمسة واحدة فقط، بدون الحاجة لأي تطبيق.
        </p>
        <div className="flex items-center gap-4 mt-10">
          <Link
            href="/auth/login"
            className="bg-white  px-6 py-3 rounded-full font-semibold text-main-blue hover:bg-gray-200 transition-colors duration-300  min-w-[160px] text-center"
          >
            ابدأ الآن الآن
          </Link>
          <Link
            href="/"
            className="bg-[#2F3437]  px-6 py-3 rounded-full font-semibold text-white hover:bg-neutral-700 transition-colors duration-300 min-w-[160px] text-center"
          >
            لفرق العمل
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
