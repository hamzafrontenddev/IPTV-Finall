"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Client() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].Client_Section;
  const slides = [
    {
      id: 1,
      name: t.name1,
      image:
        "https://iptvking.com/wp-content/uploads/2025/07/mahrous-houses-C7UbVbwTyjs-unsplash-scaled-1.webp",
      alt: "Client image 1",
      testimonial: t.testi1,
    },
    {
      id: 2,
      name: t.name2,
      image:
        "https://iptvking.com/wp-content/uploads/2025/07/360_F_517637806_QEUyQnGVjJjjT4zn4HvXjBRUg9KSLTp1.webp",
      alt: "Client image 2",
      testimonial: t.testi2,
    },
    {
      id: 3,
      name: t.name3,
      image:
        "https://iptvking.com/wp-content/uploads/2025/07/young-boy-watching-television.webp",
      alt: "Client image 3",
      testimonial: t.testi3,
    },
  ];

  // Slide navigation
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2 lg:px-10 bg-[#1b1a1a] flex flex-col items-center gap-8">
      {/* Heading Section */}
      <motion.div
        className="relative flex flex-col items-center text-center w-full px-4 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="Features_label text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px]">
          {t.h1}
        </h1>
        <h2 className="text-md md:text-2xl lg:text-4xl font-semibold absolute top-[60%] lg:top-[64%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
          {t.h2}
        </h2>
      </motion.div>

      {/* Slide Section */}
      <div className="relative w-full lg:max-w-7xl 2xl:max-w-[1500px] flex items-center justify-between">
        {/* Left Arrow */}
        <div
          className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/40 rounded-full hover:bg-black/60"
          onClick={handlePrevSlide}
        >
          <Image
            src="/left.png"
            alt="Previous"
            width={24}
            height={40}
            className="w-4 h-6 md:w-6 md:h-10 lg:w-8 lg:h-12 object-contain"
          />
        </div>

        {/* Slides */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 sm:px-6 py-6 sm:py-10"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Image */}
              <div className="relative w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] lg:mr-8">
                  <div className="bg-[#30A179] w-full aspect-[4/3] rounded-2xl" />
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    fill
                    className="absolute -translate-x-3 -translate-y-3 rounded-2xl bg-black shadow-xl object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 max-w-[90%] sm:max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                  {slides[currentSlide].name}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  {slides[currentSlide].testimonial}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-black/40 rounded-full hover:bg-black/60"
          onClick={handleNextSlide}
        >
          <Image
            src="/right.png"
            alt="Next"
            width={24}
            height={40}
            className="w-4 h-6 md:w-6 md:h-10 lg:w-8 lg:h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
