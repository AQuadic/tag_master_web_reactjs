import { getCountryDataList, ICountryData } from "countries-list";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

interface MobileInputProps {
  selectedCountry: ICountryData;
  setSelectedCountry: (country: ICountryData) => void;
  phone: string;
  setPhone: (phone: string) => void;
  inputClassName?: string;
}

const MobileInput: React.FC<MobileInputProps> = ({
  selectedCountry,
  setSelectedCountry,
  phone,
  setPhone,
  inputClassName = "",
}) => {
  const t = useTranslations("profile");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const countries = useMemo<ICountryData[]>(() => getCountryDataList(), []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.phone[0].toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`relative w-full h-[50px] border-[#9C9C9C] hover:border-neutral-400 dark:hover:border-neutral-500 flex items-center gap-2.5 p-2 border-2 dark:border-neutral-700 rounded-[8px] focus-within:!border-neutral-700 dark:focus-within:!border-neutral-300 ${inputClassName}`}
    >
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <Image
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.iso2}.svg`}
        alt={`${selectedCountry.name} flag`}
        draggable={false}
        width={24}
        height={16}
      />
      <p className="dark:text-neutral-200">+{selectedCountry.phone[0]}</p>
      <div className="bg-[#AAAAAA] w-[1px] h-5"></div>
      <input
        placeholder={t("phone")}
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full bg-transparent dark:text-neutral-200 focus:outline-none rtl:text-right"
      />
      {isOpen && (
        <div className="flex flex-col gap-2 border shadow-sm p-3 z-30 absolute left-0 top-11 max-h-[200px] min-w-full overflow-y-auto bg-white dark:bg-darkBg dark:text-neutral-200 rounded-[4px]">
          <Input
            placeholder={t("searchCountryOrPhoneCode")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredCountries.map((country) => (
            <button
              onClick={() => {
                setSelectedCountry(country);
                setIsOpen(false);
              }}
              type="button"
              key={country.iso2}
              className="flex items-center gap-2"
            >
              <Image
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.iso2}.svg`}
                alt={`${country.name} flag`}
                draggable={false}
                width={24}
                height={16}
              />
              <span>{country.name}</span>
              <span>+{country.phone[0]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileInput;
