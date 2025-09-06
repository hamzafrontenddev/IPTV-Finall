"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function TermsContent() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].Terms_Content;

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
                <h2 className="text-3xl lg:text-4xl font-bold">{t.h1}</h2>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p1}
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h2}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p2}
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h3}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p3}
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h4}</h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><b>{t.str1}</b>{t.li1}</li>
                  <li><b>{t.str2}</b>{t.li2}</li>
                  <li><b>{t.str3}</b>{t.li3}</li>
                  <li><b>{t.str4}</b>{t.li4}</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h5}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">{t.p4}</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-2">
                  <li>{t.li5}</li>
                  <li>{t.li6}</li>
                  <li>{t.li7}</li>
                  <li>{t.li8}</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h6}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p5}
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h7}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p6}
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h8}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p7}
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h9}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p8}
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h10}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p9}
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h11}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p10}
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h12}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p11}
                </p>
              </div>

              {/* Section 12 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h13}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p12}
                </p>
              </div>

              {/* Section 13 */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h14}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p13}
                  <br />
                  {t.email} <a href="mailto:expresstv@hushmail.me" className="text-[#30a179]">{t.a1}</a>
                </p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
