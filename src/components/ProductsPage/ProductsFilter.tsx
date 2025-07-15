import { Category } from "@/api/categories/getCategories";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useLocale } from "next-intl";
import React, { memo } from "react";

interface ProductsFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  categories: Category[];
}

const ProductsFilter = ({
  selectedFilter,
  onFilterChange,
  categories,
}: ProductsFilterProps) => {
  const locale = useLocale();

  // Create filters array with "All" option and API categories
  const filters = [
    {
      key: "",
      titleEn: "All",
      titleAr: "الكل",
    },
    ...categories.map((category) => ({
      key: category.id.toString(),
      titleEn: category.name.en,
      titleAr: category.name.ar,
    })),
  ];

  const filterItemVariants: Variants = {
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

  const activeBackgroundVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
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
      className="container flex items-center justify-center flex-wrap gap-5 py-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {filters.map(
        (
          filter: { key: string; titleEn: string; titleAr: string },
          index: number
        ) => (
          <motion.div
            key={`filter-${filter.key || "all"}-${filter.titleEn}`}
            className="relative"
            variants={filterItemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.2,
                delay: index * 0.02,
              },
            }}
            whileHover="hover"
            whileTap="tap"
            layout
          >
            <motion.button
              onClick={() => onFilterChange(filter.key)}
              className="relative py-3 px-4 md:px-6 cursor-pointer font-medium text-xs md:text-sm rounded-full transition-colors duration-200 overflow-hidden border-2 border-transparent hover:border-slate-200"
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
                {locale === "ar" ? filter.titleAr : filter.titleEn}
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
        )
      )}
    </motion.div>
  );
};

export default memo(ProductsFilter);
