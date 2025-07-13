"use client";

import { suggestions } from "@/api/suggestions";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const HomeContact = () => {
  const t = useTranslations("homecontact");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("EG");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((!email && !phone) || !message || !name) {
      toast.error(t("pleaseFillRequiredFields"));
      return;
    }

    try {
      await suggestions({
        name,
        email,
        phone,
        title,
        message,
        city,
        phone_country: phoneCountry,
        type: "general",
      });

      toast.success(t("formSubmittedSuccessfully"));

      setName("");
      setEmail("");
      setPhone("");
      setTitle("");
      setMessage("");
      setCity("");
      setPhoneCountry("EG");
    } catch (err: any) {
      console.error("Form submission error:", err);
      const errorMessage =
        err?.response?.data?.message || t("formSubmissionFailed");
      toast.error(errorMessage);
    }
  };

  return (
    <section className="container mt-20">
      <div className="flex flex-col items-center">
        <Link href="/" className="text-[#007CC2] text-[17px]">
          {t("sendYourIdeas")}
        </Link>
        <h2 className="text-[#000000] text-[25px] font-bold mt-3">
          {t("contactUs")}
        </h2>
        <p className="md:w-[739px] text-[#525659] text-[17px] text-center mt-6">
          {t("contactDescription")}
        </p>
        <p className="text-[#525659] text-[17px] text-center">
          {t("contactVia")}
        </p>
        <form
          onSubmit={handleSubmit}
          className="md:mt-[67px] mt-4 w-full max-w-3xl"
        >
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder={t("username")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="md:w-[375.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2"
            />
            <input
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:w-[375.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2"
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <input
              type="text"
              placeholder={t("phone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="md:w-[375.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2"
            />
            <input
              type="text"
              placeholder={t("city")}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="md:w-[375.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2"
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <input
              type="text"
              placeholder={t("subject")}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2"
            />
          </div>

          <div className="mt-6">
            <textarea
              name="message"
              placeholder={t("writeMsg")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-[165px] bg-[#F6F7FB] border border-[#C8C5C5] rounded-md p-2"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="w-[160px] h-11 bg-[#007CC2] rounded-[39px] text-[#FFFFFF] text-base hover:bg-[#005a8d]"
            >
              {t("sendMsg")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
