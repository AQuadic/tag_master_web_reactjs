import Link from "next/link";
import React from "react";
import BackArrowIcon from "../icons/products/BackArrowIcon";

interface SingleProductBreadCrumbProps {
  title: string;
}

const SingleProductBreadCrumb = ({ title }: SingleProductBreadCrumbProps) => {
  return (
    <section className="my-5 container text-lg flex items-center gap-2">
      <Link href="/products" className="flex items-center gap-2">
        <BackArrowIcon />
        <p className=""> المنتجات</p>
      </Link>
      <div className="w-1.5 h-1.5 rounded-full bg-[#BEBEC0]"></div>
      <p className="text-main-blue">{title}</p>
    </section>
  );
};

export default SingleProductBreadCrumb;
