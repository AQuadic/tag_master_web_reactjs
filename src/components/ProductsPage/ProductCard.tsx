import { ProductTypes } from "@/api/products/getProducts";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ReviewStarIcon from "../icons/general/ReviewStarIcon";
import NotFavoriteIcon from "../icons/products/NotFavoriteIcon";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: ProductTypes;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isNew = true;
  const price = parseInt(product.price);
  const discount = parseInt(product.discount);

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.08,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    initial: { scale: 0, rotate: -10, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: { duration: 0.2 },
    },
  };

  const favoriteVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 12,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: {
      scale: 0.9,
      rotate: -5,
      transition: { duration: 0.1 },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  const starsVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const starItemVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-5 relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Floating badges and favorite button */}
      <div className="absolute top-6 w-full flex justify-between items-center z-20">
        {isNew && (
          <motion.div
            className="absolute left-5 bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-2 rounded-xl text-white font-semibold text-xs backdrop-blur-sm"
            variants={badgeVariants}
            whileHover="hover"
          >
            مضاف حديثا
          </motion.div>
        )}

        <motion.button
          className="absolute right-5 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg cursor-pointer"
          variants={favoriteVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <NotFavoriteIcon />
        </motion.button>
      </div>

      {/* Product Image */}
      <motion.div
        className="relative overflow-hidden rounded-xl"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          src={product.images[0].responsive_urls[0]}
          width={280}
          height={162}
          alt="product"
          className="rounded-xl w-[280px] h-[162px] object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Price and Rating Section */}
      <motion.div
        className="flex items-center justify-between w-full"
        variants={contentVariants}
      >
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.p
            className="font-bold text-lg text-slate-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {price - discount} درهم{" "}
            {discount > 0 && (
              <motion.span
                className="line-through text-gray-400 text-sm ml-2"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.3, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {price}
              </motion.span>
            )}
          </motion.p>
          {discount > 0 && (
            <motion.span
              className="text-xs text-slate-600 font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              وفر {discount} درهم
            </motion.span>
          )}
        </motion.div>

        <motion.div
          className="flex items-center gap-1"
          variants={starsVariants}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} variants={starItemVariants} whileHover="hover">
              <ReviewStarIcon />
            </motion.div>
          ))}
          <motion.span
            className="ml-2 text-slate-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.1, color: "#1e293b" }}
          >
            (5)
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Product Name */}
      <motion.p
        className="w-full text-lg h-[54px] overflow-y-hidden text-slate-700 leading-relaxed"
        variants={contentVariants}
        whileHover={{
          y: -2,
          color: "#1e293b",
          transition: { duration: 0.2 },
        }}
      >
        {product.name.ar}
      </motion.p>

      {/* Add to Cart Button */}
      <motion.div className="w-full">
        <Button
          asChild
          className="rounded-full w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold border-0 cursor-pointer"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              + إضافة سريعة
            </motion.span>
          </motion.button>
        </Button>
      </motion.div>

      {/* Subtle background glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProductCard;
