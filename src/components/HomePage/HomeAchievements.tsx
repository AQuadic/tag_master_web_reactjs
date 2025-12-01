"use client";

import { homeAchievementsData } from "@/constants/home/homeAchivementsData";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomeAchievementsSection = () => {
  const t = useTranslations("achievements");
  const locale = useLocale();
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden"
    >
      <div className="py-8 sm:py-16">
        <motion.h2
          variants={itemVariants}
          className="text-lg text-primary text-center"
        >
          {t("bePart")}
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-center mt-2 mb-8"
        >
          {t("trust")}
        </motion.h3>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-around gap-6 sm:gap-10 my-6 sm:my-10 container"
        >
          {homeAchievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center gap-4"
            >
              <Image
                width={68}
                height={68}
                src={item.image}
                alt={item.title[locale as "ar" | "en"]}
                className=" h-[68px] object-contain"
              />
              <p className="text-primary font-bold text-4xl">+{item.number}</p>
              <p className="text-center w-[110px] text-white bg-black rounded-full p-1">
                {item.title[locale as "ar" | "en"]}
              </p>
              <p className="w-[280px] text-center">
                {item.desc[locale as "ar" | "en"]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeAchievementsSection;
