"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";


export function AboutFeatures() {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    const { language } = useLanguage();
    const t = translations[language].AboutFeatures;

    const featureData = [
        { img: "/headphone.png", title: "99.9%", subtitle: t.sub1, desc: t.desc1 },
        { img: "/uptime.png", title: "8", subtitle: t.sub2, desc: t.desc2 },
        { img: "/epg_2.png", title: "24/7", subtitle: t.sub3, desc: t.desc3 },
        { img: "/people.png", title: "150K +", subtitle: t.sub4, desc: t.desc4 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 30% of the component is visible
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
        <div className="w-full px-3 sm:px-10 lg:px-10 flex justify-center" ref={divRef}>
            <div className="flex flex-wrap gap-10 md:gap-10 w-full max-w-[1400px]  justify-center">
                {isVisible && featureData.map((feature, index) => (
                    <div className='transition-all duration-200 hover:scale-105 cursor-pointer '>
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-[#1b1b1b] p-6 rounded-2xl border border-white/20 w-full max-w-[300px] xl:h-[350px] shadow-lg"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: window.innerWidth < 640 ? index % 2 == 0 ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 } : { opacity: 0, y: 50 },
                                visible: { opacity: 1, x: 0, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 1.0, delay: index * 0.3 }}
                        >

                            <div className="w-full bg-[#30A179] p-2 rounded-lg flex gap-3 items-center py-10 justify-center">
                                <Image src={feature.img} alt={feature.subtitle} width={64} height={64} className="w-16 h-16 object-contain" />
                                <div>
                                    <h2 className="text-white text-3xl font-semibold">{feature.title}</h2>
                                    <p className="text-white text-lg font-medium">{feature.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-center text-white text-sm mt-4 py-6 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
