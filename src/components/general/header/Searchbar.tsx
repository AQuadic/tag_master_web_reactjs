import ArrowBack from "@/components/icons/general/ArrowBack";
import LightBulb from "@/components/icons/general/LightBulb";
import SearchIcon from "@/components/icons/general/SearchIcon";
import SmallSearchIcon from "@/components/icons/general/SmallSearchIcon";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => setShowSearchBox((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSearchBox(false);
      }
    };

    if (showSearchBox) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchBox]);

  return (
    <div ref={containerRef} className="relative z-[999] ">
      <button onClick={toggleSearch} className="cursor-pointer">
        <SearchIcon />
      </button>

      <AnimatePresence>
        {showSearchBox && (
          <>
            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 w-[94dvw] md:w-[700px] max-md:-left-[64px] md:-right-20 bg-white border border-gray-300 shadow-lg z-[999]"
            >
              <div className="flex items-center gap-2 px-5 py-4">
                <button onClick={toggleSearch} className="cursor-pointer">
                  <ArrowBack />
                </button>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="البحث عن "
                  className="w-full rounded outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              <hr className="border-[#79747E]" />
              <div className="px-5 py-3">
                <div className="flex items-center gap-2">
                  <LightBulb />
                  <p className="text-secondary-text text-[15px]">مقترحات</p>
                </div>
                <ul className="my-2 flex items-center gap-4">
                  <li className="text-[15px] cursor-pointer bg-[#F4F4F4] py-2 px-4 rounded-full">
                    مقترح 1
                  </li>
                  <li className="text-[15px] cursor-pointer bg-[#F4F4F4] py-2 px-4 rounded-full">
                    مقترح 2
                  </li>
                  <li className="text-[15px] cursor-pointer bg-[#F4F4F4] py-2 px-4 rounded-full">
                    مقترح 3
                  </li>
                </ul>
                <hr className="border-[#9C9C9C] w-3/5 my-4" />
                <div className="flex items-center gap-2">
                  <SmallSearchIcon />
                  <p className="text-secondary-text text-[15px]">نتائج البحث</p>
                </div>
                <div className="my-3 flex flex-col gap-3">
                  <SearchResult />
                  <SearchResult />
                  <SearchResult />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Searchbar;
