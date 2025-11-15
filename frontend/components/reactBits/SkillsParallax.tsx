"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, ReactNode, Children } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SkillsParallaxProps {
  children: ReactNode;
  className?: string;
}

export const SkillsParallax = ({
  children,
  className,
}: SkillsParallaxProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  // Reduced translation amounts for smoother animation
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const childrenArray = Children.toArray(children);
  const third = Math.ceil(childrenArray.length / 3);

  const firstPart = childrenArray.slice(0, third);
  const secondPart = childrenArray.slice(third, 2 * third);
  const thirdPart = childrenArray.slice(2 * third);

  return (
    <div
      className={cn("w-full py-20", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full mx-auto gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col gap-8">
          {firstPart.map((child, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={`parallax-1-${idx}`}
              className="w-full"
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {secondPart.map((child, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={`parallax-2-${idx}`}
              className="w-full"
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {thirdPart.map((child, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={`parallax-3-${idx}`}
              className="w-full"
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

