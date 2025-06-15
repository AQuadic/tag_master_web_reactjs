"use client";
import { navbarLinks } from "@/constants/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import EmailIcon from "../icons/footer/EmailIcon";
import FacebookIcon from "../icons/footer/FacebookIcon";
import LinkedinIcon from "../icons/footer/LinkedinIcon";
import PhoneIcon from "../icons/footer/PhoneIcon";
import WhatsappIcon from "../icons/footer/WhatsappIcon";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[#231E1F] text-white pt-12 pb-8 mt-10">
      <div className="container">
        <div className=" flex justify-between max-md:flex-col gap-8">
          <div className="text-lg text-secondary-text flex-1 flex-flex-col max-md:items-center">
            <Image
              src="/images/whiteLogo.png"
              width={136}
              height={47}
              alt="tag master"
              className="max-md:mx-auto"
            />
            <p className="mt-6 max-md:text-center">
              وسّع شبكتك بذكاء, تواصل بلمسة.
            </p>
            <p className="sm:max-w-[320px] max-md:text-center">
              تاج ماستر, يقدم لك الجيل الجديد من أدوات التواصل الذكي — شارك ملفك
              الشخصي أو بيانات عملك بلمسة واحدة فقط، بدون الحاجة لأي تطبيق.
            </p>
          </div>

          <div className="flex-1 ">
            <div className="text-lg text-secondary-text flex gap-5 flex-wrap  max-w-[210px] mx-auto items-center justify-center flex-1 text-center  w-full">
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
            <p className="mt-4 text-lg text-center">
              تابعنا على وسائل التواصل الاجتماعي
            </p>
            <div className="flex gap-5 mt-4 items-center justify-center">
              <WhatsappIcon />
              <FacebookIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div dir="ltr" className="text-lg max-md:text-center  flex-1">
            <h3>Contact Us</h3>
            <div className="flex items-center max-md:justify-center gap-2 mt-4">
              <PhoneIcon />
              <p>+971 2234567</p>
            </div>
            <div className="flex items-center max-md:justify-center gap-2 mt-4">
              <EmailIcon />
              <p>info@company.com</p>
            </div>
          </div>
        </div>
        <div className="text-secondary-text relative">
          <p className="mt-8 text-center">جميع الحقوق محفوظة Tagmaster@2025</p>
          <p className="md:absolute md:left-0 md:top-0 text-center max-md:mt-2">
            Powered by 10 Trend
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
