"use client";

import { ProductImageTypes } from "@/types/product";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImagePreview from "../general/ImagePreview";

interface SingleProductGalleryProps {
  images: ProductImageTypes[];
}

const SingleProductGallery: React.FC<SingleProductGalleryProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(
    null
  );

  const currentImage = images[currentIndex];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = 60;
      const swipeVelocityThreshold = 400;

      if (
        info.offset.x > swipeThreshold ||
        info.velocity.x > swipeVelocityThreshold
      ) {
        setDragDirection("right");
        setTimeout(() => {
          prevImage();
          setDragDirection(null);
        }, 100);
      } else if (
        info.offset.x < -swipeThreshold ||
        info.velocity.x < -swipeVelocityThreshold
      ) {
        setDragDirection("left");
        setTimeout(() => {
          nextImage();
          setDragDirection(null);
        }, 100);
      }
    },
    [nextImage, prevImage]
  );

  const selectImage = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const openPreview = () => setIsPreviewOpen(true);
  const closePreview = () => setIsPreviewOpen(false);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-gray-50/50 rounded-3xl border border-gray-100">
        <p className="text-gray-400 text-sm font-medium">No images available</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-[600] mx-auto flex flex-col md:flex-row gap-6">
        {/* Thumbnails on the left (desktop) */}
        {images.length > 1 && (
          <div className="hidden md:flex flex-col gap-3 max-h-[600px] overflow-y-auto overflow-x-hidden pr-2">
            {images.map((image, index) => (
              <motion.button
                key={image.uuid}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-black shadow-lg scale-105"
                    : "border-gray-200/60 hover:border-gray-300 hover:scale-102"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectImage(index)}
              >
                <Image
                  src={image.url}
                  width={80}
                  height={80}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeThumb"
                    className="absolute inset-0 bg-black/10 border-2 border-black rounded-2xl"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-200 rounded-2xl" />
              </motion.button>
            ))}
          </div>
        )}

        {/* Main image */}
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-gray-50/30 border border-gray-100/50 group">
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
            animate={
              dragDirection
                ? {
                    x: dragDirection === "left" ? -10 : 10,
                    opacity: 0.9,
                    scale: 0.98,
                  }
                : { x: 0, opacity: 1, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="relative cursor-grab active:cursor-grabbing"
            onClick={openPreview}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <Image
                src={currentImage.url}
                width={800}
                height={600}
                alt={`Product image ${currentIndex + 1}`}
                className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-500 group-hover:scale-[1.02]"
                priority
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Mobile image indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white shadow-lg"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  whileTap={{ scale: 0.8 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectImage(index);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Image Preview */}
      <ImagePreview
        isOpen={isPreviewOpen}
        onClose={closePreview}
        imageUrl={currentImage.url}
        imageAlt={`Product image ${currentIndex + 1}`}
      />
    </>
  );
};

export default SingleProductGallery;
