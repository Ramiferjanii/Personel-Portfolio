"use client";
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000]" style={{ position: 'fixed' }}>
      <motion.div
        className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

