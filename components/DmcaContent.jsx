"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function DmcaContent() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].Dmca_Content;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-auto min-h-[550px] bg-black" ref={divRef}>
      {isVisible && (
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-white py-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="xl:max-w-[1100px] 2xl:max-w-[1200px] w-full px-6">
            <motion.div
              className="w-full p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-[#111] to-[#1a1a1a] shadow-lg space-y-16"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >

              {/* Intro */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p1}
                  <br /><br />
                  {t.p2}
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h1}</h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li1}</li>
                  <li>{t.li2}</li>
                  <li>{t.li3}</li>
                  <li>{t.li4}</li>
                  <li>{t.li5}</li>
                  <li>{t.li6}</li>
                </ul>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p3}
                  <br /><br />
                  {t.p4}
                  <br /><br />
                  {t.p5}
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h4}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p6}
                </p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li7}</li>
                  <li>{t.li8}</li>
                  <li>{t.li9}</li>
                  <li>{t.li10}</li>
                </ul>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p7}
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h5}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p8}
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h6}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p9}
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-12">
                <motion.button
                  className="bg-[#30a179] px-12 py-5 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66] transition-all"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="/contact">{t.link1}</Link>
                </motion.button>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
