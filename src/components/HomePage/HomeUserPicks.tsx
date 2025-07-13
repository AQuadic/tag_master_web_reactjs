"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import UserPickCard from "./UserPickCard";

interface CustomDotsProps {
  dots: React.ReactNode[];
  currentSlide: number;
  goToSlide: (index: number) => void;
}

const HomeUserPicks: React.FC = () => {
  const t = useTranslations("userPickes");
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Custom dots component
  const CustomDots: React.FC<CustomDotsProps> = ({
    dots,
    currentSlide,
    goToSlide,
  }) => (
    <div className="flex justify-center mt-8 space-x-2">
      {dots.map((_, index: number) => (
        <button
          key={index}
          type="button"
          onClick={() => goToSlide(index)}
          className={`transition-all duration-300 ${
            index === currentSlide
              ? "w-6 h-2 bg-primary rounded-full" // Active dot as dash
              : "w-2 h-2 bg-blue-300 rounded-full hover:bg-blue-400" // Inactive dots
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  const settings = {
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    appendDots: (dots: React.ReactNode[]) => (
      <CustomDots
        dots={dots}
        currentSlide={currentSlide}
        goToSlide={(index: number) => sliderRef.current?.slickGoTo(index)}
      />
    ),
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards: number[] = [0, 1, 2, 3, 4]; // Example cards
  const sliderRef = React.useRef<Slider>(null);

  return (
    <section dir="ltr" className="container py-8 sm:py-16 overflow-x-hidden">
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg text-primary text-center"
      >
        {t("userRecommendations")}
      </motion.h2>
      <motion.h3
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mt-2 mb-8"
      >
        {t("whatTheySay")}
      </motion.h3>

      <div className="overflow-y-visible mt-[86px]">
        <Slider {...settings} ref={sliderRef} className="user-pick-slider">
          {cards.map((item: number, index: number) => (
            <div key={index} className="px-2 focus:outline-none">
              <div
                className={`transition-all duration-500 ease-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 transform-gpu"
                    : "opacity-40 scale-95 transform-gpu"
                }`}
              >
                <UserPickCard />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .user-pick-slider .slick-list {
          max-width: screen !important;
          overflow: visible !important;
        }

        .user-pick-slider .slick-track {
          display: flex !important;
          align-items: center;
        }

        .user-pick-slider .slick-slide {
          opacity: 1 !important;
          transform: none !important;
        }

        .user-pick-slider .slick-slide > div {
          height: 100%;
        }

        /* Hide default dots */
        .user-pick-slider .slick-dots {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default HomeUserPicks;
