"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const DownloadApp = () => {
  const t = useTranslations("downloadApp");
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="container py-12">
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-primary text-center"
      >
        {t("appOnStore")}
      </motion.h2>

      <motion.h3
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mt-2 mb-8"
      >
        {t("downloadNow")}
      </motion.h3>

      <div className="rounded-md border flex flex-col md:flex-row items-center justify-between p-4 sm:p-10 gap-10">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center gap-6"
        >
          <p className="max-w-[480px] text-center md:text-start">
            {t("downloadDescription")}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Image
                  src="/images/downloadApp/playStore.png"
                  width={202}
                  height={64}
                  alt="Download from Play Store"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Image
                  src="/images/downloadApp/appStore.png"
                  width={202}
                  height={64}
                  alt="Download from App Store"
                />
              </motion.div>
            </div>

            <Image
              src="/images/downloadApp/qr.png"
              width={120}
              height={120}
              alt="QR Code"
              className="mt-2 sm:mt-0 sm:ml-4"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src="/images/downloadApp/downloadApp.png"
            width={325}
            height={455}
            alt="App Preview"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadApp;
