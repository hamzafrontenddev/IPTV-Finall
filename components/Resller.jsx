"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaqResller } from "@/components/FAQ/FaqResller";
import { PriceReseller } from "@/components/Pricing/PriceReseller";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Resller() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].Resller;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );
    if (divRef.current) observer.observe(divRef.current);
    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[550px] bg-black" ref={divRef}>
      {isVisible && (
        <motion.div
          className="relative z-10 flex flex-col items-center text-white py-16 w-full"
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-snug">
                {t.h2}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed mb-6">
                {t.p1}
              </p>

              {/* Why Resell */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h31}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p2}
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p3}
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p4}
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <PriceReseller />
              </div>

              {/* Features */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h4}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-lg lg:text-xl leading-relaxed border-collapse">
                    <thead>
                      <tr className="bg-[#30a179]/50">
                        <th className="p-4">{t.th1}</th>
                        <th className="p-4">{t.th2}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">{t.td1}</td>
                        <td className="p-4">{t.td2}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">{t.td3}</td>
                        <td className="p-4">{t.td4}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">{t.td5}</td>
                        <td className="p-4">{t.td6}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">{t.td7}</td>
                        <td className="p-4">{t.td8}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">{t.td9}</td>
                        <td className="p-4">{t.td10}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-4">{t.td11}</td>
                        <td className="p-4">{t.td12}</td>
                      </tr>
                      <tr>
                        <td className="p-4">{t.td13}</td>
                        <td className="p-4">{t.td14}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h5}
                </h3>
                <FaqResller />
              </div>

              {/* Ready to Earn */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h6}
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>{t.str1}</strong>{t.li1}</li>
                  <li><strong>{t.str2}</strong>{t.li2}</li>
                  <li><strong>{t.str3}</strong>{t.li3}</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <motion.button
                    className="bg-[#30a179] px-8 py-4 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66]"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <Link href="#">{t.link1}</Link>
                  </motion.button>
                  <motion.button
                    className="bg-[#30a179] px-8 py-4 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66]"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <Link href="#">{t.link2}</Link>
                  </motion.button>
                </div>
              </div>

              {/* Guide with images */}
              <div className="space-y-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h7}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p5}
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p6}
                </p>

                {/* Dashboard */}
                <Image
                  src="/main-dashboard.png"
                  width={1200}
                  height={800}
                  alt="Main dashboard"
                  className="my-12 rounded-xl shadow-xl"
                />
                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p7}
                </p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li4}</li>
                  <li>{t.li5}</li>
                  <li>{t.li6}</li>
                </ul>
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h8}
                </h3>




                {/* Header */}
                <Image
                  src="/header-panel.png"
                  width={1200}
                  height={800}
                  alt="Header panel"
                  className="my-12 rounded-xl shadow-xl"
                />

                <p className="text-lg lg:text-xl leading-relaxed">
                  {t.p8}
                </p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li7}</li>
                  <li>{t.li8}</li>
                  <li>{t.li9}</li>
                  <li>{t.li10}</li>
                </ul>

                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h9}
                </h3>

                {/* Connections */}
                <Image
                  src="/connections.png"
                  width={1200}
                  height={800}
                  alt="Connections"
                  className="my-12 rounded-xl shadow-xl"
                />
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li11}</li>
                  <li>{t.li12}</li>
                  <li>{t.li13}</li>
                  <li>{t.li14}</li>
                </ul>


                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {t.h10}
                </h3>
                {/* Add Line */}
                <Image
                  src="/Left-Access-Column.png"
                  width={400}
                  height={800}
                  alt="Add Line"
                  className="my-12 rounded-xl shadow-xl"
                />
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li15}</li>
                  <li>{t.li16}</li>
                </ul>

                {/*connections.png */}
                <Image
                  src="/connections.png"
                  width={1200}
                  height={800}
                  alt="Client list"
                  className="my-12 rounded-xl shadow-xl"
                />
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>{t.li17}</li>
                </ul>

                {/* Profile */}
                <Image
                  src="/coneections-map.png"
                  width={1200}
                  height={800}
                  alt="Profile"
                  className="my-12 rounded-xl shadow-xl"
                />
              </div>
              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li>{t.li18}</li>
              </ul>
              <h3 className="text-2xl lg:text-3xl font-semibold">
                {t.h11}
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed">
                {t.p9}
              </p>
              <Image
                src="/users.png"
                width={1200}
                height={800}
                alt="Profile"
                className="my-12 rounded-xl shadow-xl"
              />

              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li><strong>{t.str4}</strong>{t.li19}</li>
                <li><strong>{t.str5}</strong>{t.li20}</li>
                <li><strong>{t.str6}</strong>{t.li21}</li>
                <li><strong>{t.str7}</strong>{t.li22}</li>
                <li><strong>{t.str8}</strong>{t.li23}</li>
                <li><strong>{t.str9}</strong>{t.li24}</li>
                <li><strong>{t.str10}</strong>{t.li25}</li>
                <li><strong>{t.str11}</strong>{t.li26}</li>
                <li><strong>{t.str12}</strong>{t.li27}</li>
                <li><strong>{t.str13}</strong>{t.li28}</li>
              </ul>



              <p className="text-lg lg:text-xl leading-relaxed">
                {t.p10}
              </p>
              <Image
                src="/Country-list-ans-sleect-package.png"
                width={1200}
                height={800}
                alt="Profile"
                className="my-12 rounded-xl shadow-xl"
              />

              <h3 className="text-2xl lg:text-3xl font-semibold">
                {t.h12}
              </h3>



              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li><strong>{t.str14}</strong>{t.li29}</li>
                <li><strong>{t.str15}</strong>{t.li30}</li>
                <li><strong>{t.str16}</strong>{t.li31}</li>
                <li><strong>{t.str17}</strong>{t.li32}</li>
                <li><strong>{t.str18}</strong>{t.li33}</li>
                <li><strong>{t.str19}</strong>{t.li34}</li>
                <li><strong>{t.str20}</strong>{t.li35}</li>
              </ul>
              <h3 className="text-2xl lg:text-3xl font-semibold">
                {t.h13}
              </h3>
              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li><strong>{t.str21}</strong>{t.li36}</li>
              </ul>


              <Image
                src="/mag.png"
                width={1200}
                height={800}
                alt="Profile"
                className="my-12 rounded-xl shadow-xl"
              />

              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li
                ><strong>{t.str22}</strong>{t.li37}</li>
              </ul>


              <Image
                src="/Enigma.png"
                width={1200}
                height={800}
                alt="Profile"
                className="my-12 rounded-xl shadow-xl"
              />
              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li><strong>{t.str23}</strong>{t.li38}</li>
              </ul>

              <Image
                src="/activity-logs.png"
                width={1200}
                height={800}
                alt="Profile"
                className="my-12 rounded-xl shadow-xl"
              />
              <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                <li><strong>{t.str24}</strong>{t.li39}</li>
                <li><strong>{t.str25}</strong>{t.li40}</li>
                <li><strong>{t.str26}</strong>{t.li41}</li>
              </ul>

              <Image
                src="/payments.png"
                width={1200}
                height={800}
                alt="Profile"
                className="my-12 rounded-xl shadow-xl"
              />

              {/* Final CTA */}
              <div className="flex justify-center pt-12">
                <motion.button
                  className="bg-[#30a179] px-12 py-5 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Link href="#">{t.link3}</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
