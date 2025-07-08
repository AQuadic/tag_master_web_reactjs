import Link from "next/link";
import React from "react";
import BackArrowIcon from "../icons/products/BackArrowIcon";
import { useTranslations } from "next-intl";

interface SingleProductBreadCrumbProps {
  title: string;
}

const SingleProductBreadCrumb = ({ title }: SingleProductBreadCrumbProps) => {
  const t = useTranslations("products");
  return (
    <section className="my-5 container text-lg flex items-center gap-2">
      <Link href="/products" className="flex items-center gap-2">
        <BackArrowIcon />
        <p className="">{t('products')}</p>
      </Link>
      <div className="w-1.5 h-1.5 rounded-full bg-[#BEBEC0]"></div>
      <p className="text-primary w-[200px] text-ellipsis truncate">{title}</p>
    </section>
  );
};

export default SingleProductBreadCrumb;
