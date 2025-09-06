"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function IPTVBoxes() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].IPTVBoxes_Content;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.4 }
    );
    if (divRef.current) observer.observe(divRef.current);
    return () => divRef.current && observer.unobserve(divRef.current);
  }, []);

  return (
    <div
      className="w-full px-6 py-24 bg-[#1b1a1a] flex flex-col items-center gap-20"
      ref={divRef}
    >
      {/* IPTV Boxes Section */}
      {isVisible && (
        <motion.div
          className="w-full max-w-7xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* Header */}
          <div className="mb-16 text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-snug">
              <span className="text-[#30A179]">{t.span}</span>{" "}
              <span className="text-white">{t.span1}</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.p}
            </p>
          </div>

          {/* Product Cards */}
          <div className="flex flex-wrap justify-start gap-8 lg:gap-8">
            {[
              {
                name: t.name1,
                price: t.price1,
                img: t.img1
              },
              {
                name: t.name2,
                price: t.price2,
                img: t.img2
              },
              {
                name: t.name3,
                price: t.price3,
                img: t.img3
              },
              {
                name: t.name4,
                price: t.price4,
                img: t.img4
              }
            ].map((box, i) => (
              <motion.div
                key={box.name}
                className="bg-[#2a2a2a] rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 flex flex-col items-start w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[260px] max-w-[320px] border border-[#3a3a3a]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
              >
                <div className="w-full h-52 sm:h-64 rounded-xl mb-6 flex items-center justify-center overflow-hidden bg-[#1f1f1f] hover:scale-105 transition-transform">
                  <Image
                    src={box.img}
                    alt={box.name}
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-left">
                  {box.name}
                </h3>
                <p className="text-2xl font-extrabold text-[#30A179] mb-6 text-left">
                  {box.price}
                </p>
                <button className="w-full bg-[#30A179] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#28a06a] transition-colors text-base shadow-lg">
                  {t.btn}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Divider */}
      <div className="w-full max-w-6xl border-t border-gray-700"></div>

      {/* Best IPTV Subscription Section */}
      <motion.div
        className="max-w-5xl mx-auto px-4 space-y-12 text-left"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.9 }}
      >
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            {t.h2} –{" "}
            <span className="text-[#30A179]">{t.span2}</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
            {t.p1}
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
            {t.h4}
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-3">
            {t.p2}

          </p>

          <ul className="list-disc list-inside text-gray-300 text-lg space-y-3 max-w-3xl">
            <li><strong>{t.str1}</strong> – {t.li1}</li>
            <li><strong>{t.str2}</strong> – {t.li2}</li>
            <li><strong>{t.str3}</strong> – {t.li3}</li>
            <li><strong>{t.str4}</strong> – {t.li4}</li>
            <li><strong>{t.str5}</strong> – {t.li5}</li>
            <li><strong>{t.str6}</strong> – {t.li6}</li>
            <li><strong>{t.str7}</strong> – {t.li7}</li>
          </ul>

        </div>

        {/* Compatibility Section */}
        <div>
          <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
            {t.h5}
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-3">
            {t.p3}

          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-3 max-w-3xl">
            <li><strong>{t.str8}</strong> {t.li8}</li>
            <li><strong>{t.str9}</strong> {t.li9}</li>
            <li><strong>{t.str10}</strong> {t.li10}</li>
            <li><strong>{t.str11}</strong> {t.li11}</li>
            <li><strong>{t.str12}</strong> {t.li12}</li>
            <li><strong>{t.str13}</strong> {t.li13}</li>

          </ul>

        </div>

        {/* Device Support Section */}
        <div>
          <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
            {t.h5}
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-3">
            {t.p4}

          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-3 max-w-3xl">
            <li>{t.li14}</li>
            <li>{t.li15}</li>
            <li>{t.li16}</li>
            <li>{t.li17}</li>
            <li>{t.li18}</li>
            <li>{t.li19}</li>
            <li>{t.li20}</li>
            <li>{t.li21}</li>
          </ul>
        </div>


        <div>
          <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
            {t.h6}
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t.p5}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t.p6}
          </p>
        </div>
        {/* Call-to-Action Section */}
        <div>
          <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
            {t.h7}
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t.p7}
          </p>
        </div>


      </motion.div>
    </div>
  );
}

