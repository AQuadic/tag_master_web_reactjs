"use client";
import { navbarLinks } from "@/constants/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[#231E1F] text-white pt-12 pb-8 mt-10">
      <div className="container flex justify-between ">
        <div className="text-lg text-secondary-text">
          <Image
            src="/images/whiteLogo.png"
            width={136}
            height={47}
            alt="tag master"
          />
          <p className="mt-6">وسّع شبكتك بذكاء, تواصل بلمسة.</p>
          <p className="sm:max-w-[320px]">
            تاج ماستر, يقدم لك الجيل الجديد من أدوات التواصل الذكي — شارك ملفك
            الشخصي أو بيانات عملك بلمسة واحدة فقط، بدون الحاجة لأي تطبيق.
          </p>
        </div>

        <div>
          <div className="text-lg text-secondary-text flex gap-5 flex-wrap  max-w-[210px] items-center justify-center">
            {navbarLinks.map((link) => (
              <Link
                className={`${pathname === link.path && "text-white"}`}
                href={link.path}
                key={link.path}
              >
                {link.titleAr}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
