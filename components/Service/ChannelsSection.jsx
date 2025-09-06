"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function ChannelsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].ChannelsSection;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (divRef.current) observer.observe(divRef.current);

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center bg-[#0e0e0e] py-16 text-white px-6"
      ref={divRef}
    >
      {/* Heading */}
      <div className="relative flex flex-col items-center text-center w-full max-w-5xl">
        <h1 className="border-emerald-600/50 font-bold uppercase text-emerald-600/10 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
          {t.tile}
        </h1>
        <h2 className="text-lg lg:text-2xl font-bold absolute top-[75%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100%] md:w-full">
          {t.h2} <span className="text-[#29b081]">{t.span}</span> {t.p}
        </h2>
      </div>

      {/* Content */}
      {isVisible && (
        <motion.div
          className="mt-10 max-w-7xl  bg-[#1b1b1b] rounded-lg p-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-md text-left p-4 md:text-lg leading-relaxed mb-6">
            {t.p1}
          </p>
          <a
            href="https://jivo.chat/p36Je0zF3T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block   px-4 py-2 md:px-8 md:py-4  bg-[#30a079] text-white font-semibold rounded-full text-md shadow-md hover:bg-[#269067] transition"
          >
            {t.req}
          </a>
        </motion.div>
      )}
    </div>
  );
}
