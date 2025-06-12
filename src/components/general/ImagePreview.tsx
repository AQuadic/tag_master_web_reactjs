"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ImagePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <div className="relative w-full h-full flex items-center justify-center p-6">
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-200 group"
            >
              <X
                size={20}
                className="group-hover:scale-110 transition-transform duration-200"
              />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1400}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreview;
