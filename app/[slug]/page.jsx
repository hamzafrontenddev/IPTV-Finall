"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Optional: for adding animations
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export default function page() {

  const { language } = useLanguage();
  const t = translations[language].SlugPage;
  const router = useRouter();

  const animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#121212] text-white">
        <Image src="./404.png" className="w-screen h-screen object-cover opacity-10" alt="" width={0} height={0} />
      <motion.div
        className="text-center p-10 absolute"
        initial={animation.initial}
        animate={animation.animate}
        transition={animation.transition}
      >
        <h1 className="text-6xl font-bold mb-4">{t.h1}</h1>
        <p className="text-2xl mb-6">{t.p1}</p>
        <p className="text-lg mb-4">{t.p2}</p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-[#30a079] text-white rounded-lg text-lg hover:bg-[#248f5d] transition duration-300"
        >
          {t.p}
        </button>
      </motion.div>
    </div>
  );
}
