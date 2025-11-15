"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { cn } from "@/lib/utils";

export function ProjectCard3D({
  title,
  href,
  description,
  gradientFrom = "from-violet-500",
  gradientVia = "via-purple-500",
  gradientTo = "to-blue-500",
}: {
  title: string;
  href: string;
  description: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}) {
  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto min-h-[400px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div
            className={cn(
              "h-40 w-full rounded-xl bg-gradient-to-br",
              gradientFrom,
              gradientVia,
              gradientTo
            )}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Project →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

