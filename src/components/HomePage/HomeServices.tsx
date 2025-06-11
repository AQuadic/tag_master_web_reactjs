"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Service1Icon from "../icons/home/Service1Icon";
import Service2Icon from "../icons/home/Service2Icon";
import Service3Icon from "../icons/home/Service3Icon";

const HomeServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 sm:py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-lg text-main-blue text-center"
        >
          أبرز الخدمات
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mt-2 mb-8 sm:mb-12"
        >
          تعرف على المزيد حول حلنا
        </motion.h3>

        <div className="container mx-auto px-4">
          <div className="flex w-full max-lg:flex-col gap-5 lg:gap-8">
            {/* Main Service Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="flex-1 border rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="flex gap-4 items-center mb-6">
                <motion.div variants={iconVariants} whileHover="hover">
                  <Service1Icon />
                </motion.div>
                <motion.div variants={textVariants}>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    إدارة التواصل
                  </h3>
                  <p className="text-secondary-text text-base sm:text-lg">
                    وصف الخدمة
                  </p>
                </motion.div>
              </div>
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mt-20 sm:mt-32 lg:mt-40 flex justify-center"
              >
                <Image
                  src="/images/home/services/1.png"
                  width={525}
                  height={368}
                  alt="service 1"
                  className="w-full h-auto max-w-md lg:max-w-lg object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Secondary Services Column */}
            <div className="flex flex-col gap-5 lg:gap-8 flex-1">
              {/* Service 2 */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="flex-1 border rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="flex gap-4 items-center mb-4">
                  <motion.div variants={iconVariants} whileHover="hover">
                    <Service2Icon />
                  </motion.div>
                  <motion.div variants={textVariants}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                      مسح الكتروني لبطاقات العمل
                    </h3>
                    <p className="text-secondary-text text-sm sm:text-base lg:text-lg">
                      وصف الخدمة
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="mt-12 sm:mt-20 lg:mt-24 flex justify-end"
                >
                  <Image
                    src="/images/home/services/2.png"
                    width={189}
                    height={116}
                    alt="service 2"
                    className="w-auto h-auto max-w-[120px] sm:max-w-[150px] lg:max-w-[189px] object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="flex-1 border rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="flex gap-4 items-center mb-4">
                  <motion.div variants={iconVariants} whileHover="hover">
                    <Service3Icon />
                  </motion.div>
                  <motion.div variants={textVariants}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      ملفات شخصية معدلة
                    </h3>
                    <p className="text-secondary-text text-sm sm:text-base lg:text-lg">
                      وصف الخدمة
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="mt-12 sm:mt-20 lg:mt-24 flex justify-end"
                >
                  <Image
                    src="/images/home/services/3.png"
                    width={189}
                    height={116}
                    alt="service 3"
                    className="w-auto h-auto max-w-[120px] sm:max-w-[150px] lg:max-w-[189px] object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Image
        src="/images/home/servicesVideo.png"
        width={1200}
        height={620}
        alt="services video"
        className="container mt-10 sm:mt-20 object-cover"
      />
    </section>
  );
};

export default HomeServices;
