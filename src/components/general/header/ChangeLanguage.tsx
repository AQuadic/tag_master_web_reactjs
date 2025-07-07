"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const languages = [
  { label: "English", code: "en" },
  { label: "العربية", code: "ar" },
];

export default function ChangeLanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (locale: string) => {
    if (locale !== currentLocale) {
      router.push(pathname, { locale });
    }
  };

  const currentLangLabel = languages.find((l) => l.code === currentLocale)?.label || "Language";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none shadow-none">
        <Button variant="outline" className="flex items-center gap-2">
          {currentLangLabel}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`cursor-pointer ${
              lang.code === currentLocale ? "font-semibold text-blue-600" : ""
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
