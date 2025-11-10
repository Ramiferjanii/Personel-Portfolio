"use client";

import { motion } from "motion/react";
import TextType from "./TextType";
import Magnet from "./Magnet";
import RotatingText from "./RotatingText";
import Orb from "./Orb";

interface HeroSectionProps {
  imageSrc: string;
  name?: string;
  title?: string;
  subtitle?: string;
}

export default function HeroSection({
  imageSrc,
  name = "Rami Ben Ferjani",
  title = "Front-end Developer",
  subtitle = "UI Designer",
}: HeroSectionProps) {
  return (
    <div className="relative z-50 w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-8">
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between">
        {/* Right side - Image (appears first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center h-full order-1 md:order-2 mb-8 md:mb-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-[35vh] h-[35vh] md:w-[50vh] md:h-[50vh] max-w-[90vw] max-h-[90vw] flex items-center justify-center"
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
            {/* Circular image container */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover"
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
        >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
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
          className="flex gap-4"
        >
          <Magnet
            padding={80}
            magnetStrength={3}
            activeTransition="transform 0.2s ease-out"
            inactiveTransition="transform 0.4s ease-in-out"
          >
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300 inline-block"
            >
              CONTACT ME
            </a>
          </Magnet>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

