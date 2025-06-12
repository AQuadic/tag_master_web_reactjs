import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const filters = [
  {
    key: "",
    titleEn: "All",
    titleAr: "الكل",
  },
  {
    key: "digital_work_card",
    titleEn: "Digital Work Card",
    titleAr: "بطاقة العمل الرقمية",
  },
  {
    key: "digital_key_series",
    titleEn: "Digital Key Series",
    titleAr: "سلسلة المفاتيح الرقمية",
  },
  {
    key: "advanced_wallet_booklet",
    titleEn: "Advanced Wallet Booklet",
    titleAr: "بوكت المحفظة المتطورة",
  },
  {
    key: "digital_sticker",
    titleEn: "Digital Sticker",
    titleAr: "الملصق الرقمي",
  },
  {
    key: "custom_work_card",
    titleEn: "Custom Work Card",
    titleAr: "بطاقة العمل المخصصة",
  },
];

interface ProductsFilterProps {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsFilter = ({
  selectedFilter,
  setSelectedFilter,
}: ProductsFilterProps) => {
  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const filterItemVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const activeBackgroundVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const textVariants = {
    inactive: {
      color: "#64748b",
      transition: { duration: 0.2 },
    },
    active: {
      color: "#ffffff",
      transition: { duration: 0.2 },
    },
    hover: {
      color: "#1e293b",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="container flex items-center justify-between flex-wrap gap-5 py-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {filters.map((filter, index) => (
        <motion.div
          key={filter.titleEn}
          className="relative"
          variants={filterItemVariants}
          whileHover="hover"
          whileTap="tap"
          custom={index}
        >
          <motion.button
            onClick={() => setSelectedFilter(filter.key)}
            className="relative py-3 px-6 cursor-pointer font-medium text-sm rounded-full transition-colors duration-200 overflow-hidden border-2 border-transparent hover:border-slate-200"
            style={{
              boxShadow:
                selectedFilter === filter.key
                  ? "0 4px 12px rgba(0, 126, 193, 0.15)"
                  : "0 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Active background */}
            <AnimatePresence>
              {selectedFilter === filter.key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#007EC1] to-[#0066A3] rounded-full"
                  variants={activeBackgroundVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layoutId="activeFilter"
                />
              )}
            </AnimatePresence>

            {/* Hover background */}
            <motion.div
              className="absolute inset-0 bg-slate-100 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: selectedFilter === filter.key ? 0 : 1,
                transition: { duration: 0.2 },
              }}
            />

            {/* Filter text */}
            <motion.span
              className="relative z-10 block"
              variants={textVariants}
              animate={selectedFilter === filter.key ? "active" : "inactive"}
              whileHover={selectedFilter === filter.key ? "active" : "hover"}
            >
              {filter.titleAr}
            </motion.span>

            {/* Selection indicator */}
            <AnimatePresence>
              {selectedFilter === filter.key && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                  initial={{ scale: 0, x: "-50%" }}
                  animate={{
                    scale: 1,
                    x: "-50%",
                    transition: {
                      delay: 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    },
                  }}
                  exit={{
                    scale: 0,
                    transition: { duration: 0.15 },
                  }}
                />
              )}
            </AnimatePresence>
          </motion.button>

          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-full bg-slate-300 pointer-events-none"
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 0, opacity: 0 }}
            whileTap={{
              scale: 1.5,
              opacity: [0.3, 0],
              transition: { duration: 0.4 },
            }}
          />
        </motion.div>
      ))}

      {/* Floating background decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full blur-xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-full blur-lg"
          animate={{
            x: [0, -8, 0],
            y: [0, 8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProductsFilter;
