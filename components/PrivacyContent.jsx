"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function PrivacyContent() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].Privacy_Content;

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

              {/* Heading */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p1}
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h3}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">{t.p2}</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>{t.str}</strong>{t.p3}</li>
                  <li><strong>{t.str1}</strong>{t.p4}</li>
                  <li><strong>{t.str2}</strong>{t.p5}</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h32}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">{t.p6}</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>{t.str3}</strong>{t.p7}</li>
                  <li><strong>{t.str4}</strong>{t.p8}</li>
                  <li><strong>{t.str5}</strong>{t.p9}</li>
                  <li><strong>{t.str6}</strong>{t.p10}</li>
                  <li><strong>{t.str7}</strong>{t.p11}</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h34}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">{t.p12}</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>{t.str8}</strong>{t.p13}</li>
                  <li><strong>{t.str9}</strong>{t.p14}</li>
                  <li><strong>{t.str10}</strong>{t.p15}</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h35}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p16}
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h36}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">{t.p17}</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>{t.str11}</strong>{t.p18}</li>
                  <li><strong>{t.str12}</strong>{t.p19}</li>
                  <li><strong>{t.str13}</strong>{t.p20}</li>
                  <li><strong>{t.str14}</strong>{t.p21}</li>
                  <li><strong>{t.str15}</strong>{t.p22}</li>
                </ul>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p23}
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h37}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p24}
                  <br /><br />
                  {t.p25}
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h38}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p26}
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h39}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p27}
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">{t.h40}</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p28}
                  <br /><br />
                  <strong>{t.str16}</strong> <a href="mailto:expresstv@hushmail.me" className="text-[#30a179]">{t.p29}</a>
                </p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
