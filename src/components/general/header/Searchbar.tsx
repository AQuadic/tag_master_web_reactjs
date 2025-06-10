import ArrowBack from "@/components/icons/general/ArrowBack";
import SearchIcon from "@/components/icons/general/SearchIcon";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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
    <div ref={containerRef} className="relative">
      <button onClick={toggleSearch} className="cursor-pointer">
        <SearchIcon />
      </button>

      <AnimatePresence>
        {showSearchBox && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-[700px] -right-20 bg-white border border-gray-300 shadow-lg p-2"
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <button onClick={toggleSearch} className="cursor-pointer">
                <ArrowBack />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="البحث عن "
                className="w-full    rounded outline-none  "
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Searchbar;
