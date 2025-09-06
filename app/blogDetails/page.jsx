"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { FeedbackForm } from "@/components/FeedbackForm";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export default function page() {

  const { language } = useLanguage();
  const t = translations[language].blogDetails;
  const [platform, setplatform] = useState({})
  useEffect(() => {
    setplatform(JSON.parse(localStorage.getItem("article")))
  }, [])
  return (
    <>
      <Header />
      <div className="w-full h-auto bg-black pb-[6vh]">
        <div className="relative flex justify-center pt-32">
          <div className="absolute inset-0 bg-[#050505] h-[60vh] flex max-sm:flex-col justify-center items-center py-12 lg:py-40 px-4 text-center">
            <p className="text-[#2ddb81] font-bold border border-[#2ddb81] py-1 px-3 rounded-full text-sm md:text-base">
              {t.p}
            </p>
            <h1 className="text-3xl w-6/12 md:text-5xl/[1.5] font-medium mt-12 z-10">
              {platform.title}
            </h1>
          </div>
          <img
            className="absolute inset-0 w-full h-[60vh] opacity-20 object-cover"
            src="./blog_image.png"
            alt="Cinema background"
          />
        </div>

        <div className="flex items-center justify-center pt-[50vh] md:pt-[65vh] px-4">
          <Image
            src="./blogdetiles.jpg"
            width={120}
            height={0}
            className="w-full max-w-6xl h-auto rounded-2xl"
            alt=""
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-10">
          <h1 className="text-3xl md:text-5xl font-semibold">{t.h1}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p1}
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold mt-10">{t.h2}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p2}
          </p>

          <ul className="list-disc text-base md:text-lg text-gray-400 mt-5 pl-5 space-y-4">
            <li><strong className="text-white">{t.str1}</strong> {t.li1}</li>
            <li><strong className="text-white">{t.str2}</strong> {t.li2}</li>
            <li><strong className="text-white">{t.str3}</strong> {t.li3}</li>
            <li><strong className="text-white">{t.str4}</strong> {t.li4}</li>
            <li><strong className="text-white">{t.str5}</strong> {t.li5}</li>
          </ul>

          <h1 className="text-3xl md:text-5xl font-semibold mt-10">{t.h5}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p3}
          </p>

          <div className="bg-gray-800 py-10 rounded-xl w-full text-center mt-16 px-4">
            <p className="text-xl md:text-3xl font-bold text-white">
              {t.p4}
            </p>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold mt-10">{t.h6}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p5}
          </p>
        </div>
      </div>
      <FeedbackForm />
      <Footer />
    </>
  );
};