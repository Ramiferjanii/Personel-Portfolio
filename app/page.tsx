"use client";

import LiquidEther from "@/components/reactBits/cursor";
import HeroSection from "@/components/reactBits/HeroSection";
import PillNav from "@/components/reactBits/PillNav";
import ScrollReveal from "@/components/summary";
import ScrollFloat from "@/components/reactBits/ScrollFloat";
import LogoLoop from "@/components/reactBits/LogoLoop";
import { FaGithub, FaReact, FaNode, FaHtml5, FaLinkedin, FaSymfony } from "react-icons/fa";
import { TbBrandTailwind, TbBrandReactNative, TbBrandSupabase, TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill, RiPhpFill, RiJavascriptFill, RiJavaLine } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { SiAppwrite, SiKalilinux } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io5";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative w-full bg-black">
      {/* Fixed background and nav */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <LiquidEther
          className="absolute inset-0"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          autoDemo={true}
          mouseForce={20}
          cursorSize={100}
        />
      </div>

      <PillNav
        items={navItems}
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen">
        <HeroSection
          imageSrc="/images/backGroundMovedPic.png"
          name="Rami Ben Ferjani"
          title="BI Analyst & MERN Developer"
          subtitle="MongoDB · Express · React · Node.js"
        />
      </section>

      {/* Summary Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-20"
      >
        <div className="mb-16">
          <LogoLoop
            logos={[
              {
                node: (
                  <FaGithub
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://github.com/Ramiferjanii",
                title: "GitHub",
                ariaLabel: "Visit GitHub Profile",
              },
              {
                node: (
                  <FaLinkedin
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.linkedin.com/in/rami-ben-ferjani-072150315/",
                title: "LinkedIn",
                ariaLabel: "Visit LinkedIn Profile",
              },
              {
                node: (
                  <TbBrandTailwind
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://tailwindcss.com/",
                title: "Tailwind CSS",
                ariaLabel: "Visit Tailwind CSS",
              },
              {
                node: (
                  <RiNextjsFill
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://nextjs.org/",
                title: "Next.js",
                ariaLabel: "Visit Next.js",
              },
              {
                node: (
                  <BsBootstrap
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://getbootstrap.com/",
                title: "Bootstrap",
                ariaLabel: "Visit Bootstrap",
              },
              {
                node: (
                  <FaReact
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://react.dev/",
                title: "React",
                ariaLabel: "Visit React",
              },
              {
                node: (
                  <TbBrandReactNative
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://reactnative.dev/",
                title: "React Native",
                ariaLabel: "Visit React Native",
              },
              {
                node: (
                  <SiAppwrite
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://appwrite.io/",
                title: "Appwrite",
                ariaLabel: "Visit Appwrite",
              },
              {
                node: (
                  <TbBrandSupabase
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://supabase.com/",
                title: "Supabase",
                ariaLabel: "Visit Supabase",
              },
              {
                node: (
                  <FaSymfony
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://symfony.com/",
                title: "Symfony",
                ariaLabel: "Visit Symfony",
              },
              {
                node: (
                  <RiPhpFill
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.php.net/",
                title: "PHP",
                ariaLabel: "Visit PHP",
              },
              {
                node: (
                  <RiJavascriptFill
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                title: "JavaScript",
                ariaLabel: "Visit JavaScript Documentation",
              },
              {
                node: (
                  <AiOutlinePython
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.python.org/",
                title: "Python",
                ariaLabel: "Visit Python",
              },
              {
                node: (
                  <RiJavaLine
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.java.com/",
                title: "Java",
                ariaLabel: "Visit Java",
              },
              {
                node: (
                  <BiLogoMongodb
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.mongodb.com/",
                title: "MongoDB",
                ariaLabel: "Visit MongoDB",
              },
              {
                node: (
                  <FaNode
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://nodejs.org/",
                title: "Node.js",
                ariaLabel: "Visit Node.js",
              },
              {
                node: (
                  <IoLogoCss3
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                title: "CSS3",
                ariaLabel: "Visit CSS3 Documentation",
              },
              {
                node: (
                  <FaHtml5
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                title: "HTML5",
                ariaLabel: "Visit HTML5 Documentation",
              },
              {
                node: (
                  <SiKalilinux
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.kali.org/",
                title: "Kali Linux",
                ariaLabel: "Visit Kali Linux",
              },
              {
                node: (
                  <TbBrandTypescript
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://www.typescriptlang.org/",
                title: "TypeScript",
                ariaLabel: "Visit TypeScript",
              },
            ]}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={48}
            pauseOnHover={true}
            fadeOut={false}
            scaleOnHover={true}
            ariaLabel="Partner and technology logos"
            width="80%"
            className="mx-auto"
          />
        </div>
        <div className="max-w-4xl w-full">
          {/* LogoLoop Component */}

          {/* Title with ScrollFloat animation */}
          <div className="mb-12">
            <ScrollFloat
              containerClassName="text-center"
              textClassName="text-white font-bold"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Summary Section
            </ScrollFloat>
            {/* Small bar at the bottom of title */}
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>

          {/* Summary text */}
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-white"
            enableBlur={true}
            baseOpacity={0.5}
            baseRotation={2}
            blurStrength={2}
          >
            I'm a passionate Front-end Developer and UI Designer with a keen eye
            for creating beautiful, user-friendly interfaces. I specialize in
            building modern web applications with clean code and exceptional
            user experiences.
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
