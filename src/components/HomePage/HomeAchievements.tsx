"use client";

import { homeAchievementsData } from "@/constants/home/homeAchivementsData";
import { motion } from "framer-motion";
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomeAchievementsSection = () => {
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
          className="text-lg text-main-blue text-center"
        >
          كن جزءًا من مجتمعنا
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-center mt-2 mb-8"
        >
          ثقة عالمية وانتشار واسع
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
                alt={item.title}
                className=" h-[68px] object-contain"
              />
              <p className="text-main-blue font-bold text-4xl">
                +{item.number}
              </p>
              <p className="text-center w-[92px] text-white bg-black rounded-full p-1">
                {item.title}
              </p>
              <p className="w-[255px] text-center">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeAchievementsSection;
