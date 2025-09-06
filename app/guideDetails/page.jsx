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
  const t = translations[language].guideDetails;
  const [platform, setplatform] = useState({})
  useEffect(() => {
    setplatform(JSON.parse(localStorage.getItem("platform")))
  }, [])
  return (
    <>
      <Header />
      <div className="w-full h-auto bg-black mb-10">
        <div className="relative flex justify-center h-[50vh]">
          <div className="absolute inset-0 bg-[#050505] h-[50vh] flex flex-col justify-center items-center py-12 lg:py-40 px-4 text-center gap-7">
            <p className="font-bold text-3xl md:text-5xl">
              {platform.name}
            </p>
            <h1 className="text-xl md:text-3xl font-semibold z-10 text-[#30a079]">
              {platform.description}
            </h1>
          </div>
          <img
            className="absolute inset-0 w-full h-[50vh] opacity-20 object-cover"
            src="./blog_image.png"
            alt="Cinema background"
          />
        </div>


        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">{t.h1}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p1}
          </p>
          <h1 className="text-xl md:text-3xl font-semibold mt-10">{t.h2}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p2}
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">{t.h3}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p3}
          </p>

          <h1 className="text-xl md:text-3xl font-semibold mt-10">{t.h4}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p4}
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">{t.h5}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p5}
          </p>

          <h1 className="text-xl md:text-3xl font-semibold mt-10">{t.h6}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p6}
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">{t.h7}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p7}
          </p>

          <h1 className="text-xl md:text-3xl font-semibold mt-10">{t.h8}</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            {t.p8}
          </p>
        </div>
      </div>
      <FeedbackForm />
      <Footer />
    </>
  );
};