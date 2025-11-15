"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

// Floating particles component - client-side only to avoid hydration issues
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    color: string;
    left: number;
    top: number;
    xOffset: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate random values only on client side
    const newParticles = Array.from({ length: 20 }).map((_, i) => {
      const colors = ['#8b5cf6', '#ec4899', '#3b82f6'];
      return {
        width: Math.random() * 6 + 3,
        height: Math.random() * 6 + 3,
        color: colors[i % 3],
        left: Math.random() * 100,
        top: Math.random() * 100,
        xOffset: Math.random() * 20 - 10,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      };
    });
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            backgroundColor: particle.color,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

function LoadingThreeDotsPulse() {

  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1] as [number, number, number],
      transition: {
        duration: 1.2,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="bg-black min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Animated Background Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Rami Ben Ferjani
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Portfolio Loading...
          </motion.p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          animate="pulse"
          transition={{ staggerChildren: 0.2, staggerDirection: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" 
            variants={dotVariants}
          />
          <motion.div 
            className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" 
            variants={dotVariants}
          />
          <motion.div 
            className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
            variants={dotVariants}
          />
        </motion.div>

        {/* Spinning Ring */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-64 h-64 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute w-48 h-48 border-4 border-transparent border-b-blue-500 border-l-purple-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingThreeDotsPulse

