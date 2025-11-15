"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TextType from "./TextType";
import RotatingText from "./RotatingText";
import Orb from "./Orb";
import { Spotlight } from "@/components/ui/spotlight-new";

interface HeroSectionProps {
  imageSrc: string;
  name?: string;
  title?: string;
  subtitle?: string;
}

export default function HeroSection({
  imageSrc,
  name = "Rami Ben Ferjani",
  title = "Full Stack Developer & BI Analyst ",
  subtitle = "MongoDB · Express · React · Node.js",
}: HeroSectionProps) {
  return (
    <div className="relative z-50 w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-8">
      {/* Spotlight effect */}
      <Spotlight />
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between">
        {/* Right side - Image (appears first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center h-full order-1 md:order-2 mb-8 md:mb-0"
          style={{ minHeight: '35vh' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-[35vh] h-[35vh] md:w-[50vh] md:h-[50vh] max-w-[90vw] max-h-[90vw] flex items-center justify-center"
            style={{ aspectRatio: '1 / 1' }}
          >
            {/* Orb animation behind the circle */}
            <div 
              className="absolute z-0 rounded-full"
              style={{
                width: '125%',
                height: '125%',
                left: '52%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Orb
                hue={280}
                hoverIntensity={0.3}
                rotateOnHover={true}
              />
            </div>
            {/* Circular image container with fixed dimensions */}
            <div 
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gray-900"
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src={imageSrc}
                alt={name}
                fill
                priority
                sizes="(max-width: 768px) 35vh, 50vh"
                className="object-cover"
                quality={60}
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Left side - Text content (appears second on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl order-2 md:order-1"
          style={{ minHeight: '200px' }}
        >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', minHeight: '120px' }}
        >
          Hi, I am
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block">
            <TextType
              text={name}
              typingSpeed={100}
              initialDelay={500}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.8}
              loop={false}
              className="font-bold"
              as="span"
            />
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          {title} | {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 min-h-[2rem]"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          <RotatingText
            texts={[
              "Building beautiful user experiences",
              "Creating responsive web applications",
              "Designing modern interfaces",
              "Crafting pixel-perfect designs"
            ]}
            rotationInterval={3000}
            auto={true}
            loop={true}
            splitBy="words"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-120%', opacity: 0 }}
            mainClassName="text-white font-medium"
            elementLevelClassName="text-white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 flex-wrap"
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </motion.svg>
              Contact Me
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
            
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(236, 72, 153, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)",
              }}
            />
          </motion.a>
          
          {/* Secondary button - View Projects */}
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

