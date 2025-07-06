"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import React from "react";

const ChangeLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale !== currentLocale) {
      router.push(pathname, { locale: newLocale });
    }
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="max-sm:min-w-full cursor-pointer flex items-center gap-2 justify-between border rounded px-2 py-1 bg-transparent text-inherit"
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default ChangeLanguage;
