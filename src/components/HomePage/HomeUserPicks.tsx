"use client";
import { motion } from "framer-motion";
import React from "react";
import UserPickCard from "./UserPickCard";

const HomeUserPicks = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="container py-8 sm:py-16">
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-main-blue text-center"
      >
        توصيات المستخدمين
      </motion.h2>
      <motion.h3
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mt-2 mb-8"
      >
        ماذا قالوا عنا
      </motion.h3>
      <div>
        <UserPickCard />
      </div>
    </section>
  );
};

export default HomeUserPicks;
