import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAboutUs = () => {
  const t = useTranslations("homeAboutUs");
  return (
    <section className="bg-[#5985BB] text-white relative">
      <div className="container py-20 md:py-56 flex items-center gap-10 flex-wrap">
        <Image
          width={506}
          height={350}
          src="/images/home/about.png"
          alt="about"
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{t('aboutTag')}</h2>
          <p className="text-lg max-w-[600px]">
            {t('tagDescription')}
          </p>
          <Link
            href="/"
            className="self-start px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black  transition-colors duration-300 font-bold"
          >
            {t('knowMore')}
          </Link>
        </div>
      </div>
      <div className="md:block hidden">
        <Image 
          src='/images/aboutLogo.svg'
          alt="about logo"
          width={47}
          height={44.86}
          className="absolute top-32 left-20"
        />
      </div>
    </section>
  );
};

export default HomeAboutUs;
