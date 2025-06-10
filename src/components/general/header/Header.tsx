"use client";

import { navbarLinks } from "@/constants/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ChangeLanguage from "./ChangeLanguage";
import Searchbar from "./Searchbar";
import SignInButton from "./SignInButton";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="container py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/cart">Cart</Link>
        <SignInButton />
        <Searchbar />
        <ChangeLanguage />
      </div>
      <div className="flex items-center gap-6">
        {navbarLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              href={link.path}
              key={link.path}
              className={`transition duration-200 ${
                isActive
                  ? "font-bold border-b-2 border-main-blue text-black"
                  : "text-gray-600 hover:text-black"
              } pb-1`}
            >
              {link.titleAr}
            </Link>
          );
        })}
      </div>
      <Image src="/images/logo.png" alt="logo" width={155} height={55} />
    </nav>
  );
};

export default Header;
