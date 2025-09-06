"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function SimpleSteps() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].Simple_Steps;

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
    <div
      className="relative w-full h-auto min-h-[550px] bg-black"
      ref={divRef}
    >
      {isVisible && (
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-white py-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="xl:max-w-[1100px] 2xl:max-w-[1200px] w-full px-6">
            {/* Section Container */}
            <motion.div
              className="w-full p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-[#111] to-[#1a1a1a] shadow-lg space-y-16"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-left text-white text-3xl lg:text-5xl font-bold mb-8 leading-snug">
                {t.h1}
              </h2>

              {/* Step 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h2}
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>
                    {t.li1}{" "}
                    <a href="#" className="text-[#30a179] hover:underline">
                      {t.a1}
                    </a>
                  </li>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/step1.png"
                      width={1000}
                      height={800}
                      alt="Express TV Free Trial page"
                      className="my-8 rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <li>{t.li2} <span className="font-medium">{t.sapn1}</span></li>
                  <li>{t.li3} <span className="font-medium">{t.sapn2}</span></li>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/Step2.png"
                      width={1000}
                      height={800}
                      alt="Checkout page"
                      className="my-8 rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <li>{t.li4}</li>
                  <li>{t.li5}</li>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/step3.png"
                      width={1000}
                      height={500}
                      alt="Order completion page"
                      className="my-8 rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <li>
                    {t.li6} <span className="font-medium">{t.span3}</span>
                    <br />✅ {t.p1}
                    {t.li7}
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h4}
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li8}</li>
                  <li>{t.li9}</li>
                  <li>{t.li10}</li>
                  <li>{t.li11}</li>
                  <li>{t.li12}</li>
                </ul>
              </div>

              {/* Why Choose */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h5}
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li13}</li>
                  <li>{t.li14}</li>
                  <li>{t.li15}</li>
                  <li>{t.li16}</li>
                  <li>{t.li17}</li>
                </ul>
              </div>

              {/* Devices */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h6}
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li18}</li>
                  <li>{t.li19}</li>
                  <li>{t.li20}</li>
                  <li>{t.li21}</li>
                  <li>{t.li22}</li>
                  <li>{t.li23}</li>
                  <li>{t.li24}</li>
                  <li>{t.li25}</li>
                </ul>
              </div>

              {/* Apps */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h7}
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li26}</li>
                  <li>{t.li27}</li>
                  <li>{t.li28}</li>
                  <li>{t.li29}</li>
                  <li>{t.li30}</li>
                  <li>{t.li31}</li>
                  <li>{t.li32}</li>
                  <li>{t.li33}</li>
                  <li>{t.li34}</li>
                  <li>{t.li35}</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-12">
                <motion.button
                  className="bg-[#30a179] px-12 py-5 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66] transition-all"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="#">{t.a2}</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
