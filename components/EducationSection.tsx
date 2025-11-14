"use client";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import { motion } from "motion/react";
import ScrollReveal from "@/components/summary";

interface EducationItem {
  institution: string;
  degree: string;
  years: string;
  description: string;
  logo: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Higher Institute of Management of Gabes",
    degree: "Bachelor's Degree in Business computing",
    years: "2023 - 2024",
    description: "An interdisciplinary program blending business administration with information technology, preparing graduates for technical and managerial roles.",
    logo: "/images/isg-logo.png", // User needs to add this logo
  },
  {
    institution: "Higher Institute of Computer Science Mahdia",
    degree: "Bachelor's Degree in Business Intelligence",
    years: "2024 - 2026",
    description: "A 3-year undergraduate program focusing on technical and analytical skills to transform data into actionable business insights, combining computer science, statistics, and business management.",
    logo: "/images/sima-logo.png", // User needs to add this logo
  },
];

export default function EducationSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 opacity-30"></div>

        <div className="space-y-12">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* Timeline marker */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  </div>
                </div>
                {/* Triangle pointer */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-gray-800 hidden md:block"></div>
              </div>

              {/* Education Card */}
              <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Logo Section */}
                  <div className="flex-shrink-0">
                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center justify-center max-w-sm mx-auto p-4 relative h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem] bg-black/30 rounded-3xl overflow-hidden group">
                      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black z-10" />
                      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black z-10" />
                      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black z-10" />
                      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black z-10" />
                      
                      <div className="w-full h-full relative flex items-center justify-center p-4">
                        <Image
                          src={education.logo}
                          alt={education.institution}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                      
                      {/* EvervaultCard overlay effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <EvervaultCard text="" className="w-full h-full" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {education.institution}
                      </h3>
                      <p className="text-lg md:text-xl text-purple-300 font-semibold mb-1">
                        {education.degree}
                      </p>
                      <p className="text-sm md:text-base text-gray-400 mb-4">
                        {education.years}
                      </p>
                    </div>
                    <ScrollReveal
                      containerClassName="text-left"
                      textClassName="text-gray-300 text-sm md:text-base leading-relaxed"
                      enableBlur={false}
                      baseOpacity={0.7}
                    >
                      {education.description}
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

