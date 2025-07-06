import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const HomeHero = () => {
    const t = useTranslations("hero");

  return (
    <section
      style={{
        backgroundImage: `url(/images/home/heroImage.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cover bg-center w-full min-h-[90dvh] mx-auto flex items-center relative"
      dir="rtl"
    >
      <div className="container text-white ">
        <p className="text-2xl md:text-[50px] font-bold max-w-[520px] ">
          {t('title')}
        </p>
        <p className="text-lg max-w-[440px] my-2">
          {t('description')}
        </p>
        <div className="flex items-center gap-4 mt-10">
          <Link
            href="/login"
            className="bg-white  px-6 py-3 rounded-full font-semibold text-primary hover:bg-gray-200 transition-colors duration-300  min-w-[160px] text-center"
          >
            {t('startFree')}{" "}
          </Link>
          <Link
            href="/"
            className="bg-[#2F3437]  px-6 py-3 rounded-full font-semibold text-white hover:bg-neutral-700 transition-colors duration-300 min-w-[160px] text-center"
          >
            {t('forTeams')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
