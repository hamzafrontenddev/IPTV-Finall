"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Aboutdetails() {

    const { language } = useLanguage();
    const t = translations[language].Aboutdetails;

    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center my-8 pt-10 gap-6 lg:gap-32 px-5 py-10 lg:h-[500px]">

            {/* Image Section */}
            <motion.div
                className="w-full max-w-[550px] h-[300px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/service.png"
                    alt="Express IPTV Service"
                    width={550}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="w-full max-w-[600px] px-4 lg:px-0 flex flex-col items-center text-white text-lg lg:text-xl leading-relaxed font-normal text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <b>{t.b1}</b><br />
                {t.b2}
                <br />
                <br />
                {t.p1}
            </motion.div>
        </div>
    );
}
