"use client";

import { motion } from "motion/react";
import LiquidEther from "@/components/reactBits/cursor";
import HeroSection from "@/components/reactBits/HeroSection";
import PillNav from "@/components/reactBits/PillNav";
import ScrollReveal from "@/components/summary";
import ScrollFloat from "@/components/reactBits/ScrollFloat";
import LogoLoop from "@/components/reactBits/LogoLoop";
import { MagicBento } from "@/components/reactBits/MagicBento";
import FlowingMenu from "@/components/FlowingMenu";
import StarBorder from "@/components/reactBits/bottonAnimation";
import { SparklesCore } from "@/components/ui/sparkles";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { FaGithub, FaReact, FaNode, FaHtml5, FaLinkedin, FaSymfony, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaGlobe } from "react-icons/fa";
import { TbBrandTailwind, TbBrandReactNative, TbBrandSupabase, TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill, RiPhpFill, RiJavascriptFill, RiJavaLine } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { SiAppwrite, SiKalilinux, SiN8N, SiRedux, SiMysql, SiFirebase, SiVercel, SiNetlify, SiWebpack, SiPandas, SiNumpy, SiExpo, SiExpress, SiGit } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io5";
import { MdDataUsage, MdScience, MdSettings } from "react-icons/md";
import ScrollCount from "@/components/reactBits/ScrollCount";
import MetallicIcon from "@/components/reactBits/MetallicIcon";
import ElectricBorder from "@/components/reactBits/electricBorder";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { SkillsParallax } from "@/components/reactBits/SkillsParallax";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Modal, ModalTrigger, ModalBody, ModalContent, useModal } from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/stateful-button";
import { Meteors } from "@/components/ui/meteors";
import { Vortex } from "@/components/ui/vortex";
import EducationSection from "@/components/EducationSection";
import { LinkPreview } from "@/components/ui/link-preview";
import AnimatedGradientBackground from "@/components/reactBits/background";
import ContactForm from "@/components/reactBits/ContactForm";
import Footer from "@/components/reactBits/Footer";
import ScrollToTop from "@/components/reactBits/ScrollToTop";
import ScrollProgress from "@/components/reactBits/ScrollProgress";
import Testimonials from "@/components/Testimonials";

// Back to Main button component for modals
function BackToMainButton() {
  const { setOpen } = useModal();
  
  const handleBackToMain = () => {
    setOpen(false);
    // Scroll to home section after a short delay to allow modal to close
    setTimeout(() => {
      const homeSection = document.getElementById("projects");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Button
      onClick={handleBackToMain}
      className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-gray-500/50 transition-all duration-300 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-180"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      Back to Main
    </Button>
  );
}

export default function Home() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative w-full bg-black">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Fixed background and nav */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <AnimatedGradientBackground />
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
          imageSrc="/images/backgroundMovedPic.png"
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
              {
                node: (
                  <SiN8N
                    className="text-white"
                    style={{ fontSize: "40px" }}
                  />
                ),
                href: "https://n8n.io/",
                title: "N8N",
                ariaLabel: "Visit N8N",
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
        <div className="max-w-5xl w-full">
          {/* Title with ScrollFloat animation */}
          <div className="mb-16">
            <div className="flex justify-center">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-white text-4xl font-medium tracking-tight md:text-6xl"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                About Me
              </ScrollFloat>
            </div>
            {/* Small bar at the bottom of title */}
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>

          {/* Summary text with improved layout */}
          <div className="space-y-6">
            <ScrollReveal
              containerClassName="text-left md:text-center"
              textClassName="text-gray-200 text-lg md:text-xl leading-relaxed"
              enableBlur={true}
              baseOpacity={0.5}
              baseRotation={2}
              blurStrength={2}
            >
              Hello! I'm Rami Ben Ferjani, a Full-Stack Developer and Business Intelligence Analyst passionate about building smart, data-driven applications.
            </ScrollReveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left md:text-center"
            >
              <div className="text-gray-300 text-base md:text-lg leading-relaxed">
                I specialize in the{" "}
                <LinkPreview url="https://www.mongodb.com" className="font-bold text-purple-400 hover:text-purple-300">
                  MERN Stack
                </LinkPreview>
                ,{" "}
                <LinkPreview url="https://nextjs.org" className="font-bold text-purple-400 hover:text-purple-300">
                  Next.js
                </LinkPreview>
                , and{" "}
                <LinkPreview url="https://reactnative.dev" className="font-bold text-purple-400 hover:text-purple-300">
                  React Native
                </LinkPreview>{" "}
                to create responsive, high-performance web and mobile experiences.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-left md:text-center"
            >
              <div className="text-gray-300 text-base md:text-lg leading-relaxed">
                But I don't just build—I analyze. I leverage tools like{" "}
                <LinkPreview url="https://powerbi.microsoft.com" className="font-bold text-purple-400 hover:text-purple-300">
                  Power BI
                </LinkPreview>
                ,{" "}
                <LinkPreview url="https://www.python.org" className="font-bold text-purple-400 hover:text-purple-300">
                  Python
                </LinkPreview>
                , and{" "}
                <LinkPreview url="https://www.mysql.com" className="font-bold text-purple-400 hover:text-purple-300">
                  SQL
                </LinkPreview>{" "}
                to transform raw data into interactive dashboards and actionable insights.
              </div>
            </motion.div>

            <ScrollReveal
              containerClassName="text-left md:text-center"
              textClassName="text-gray-300 text-base md:text-lg leading-relaxed"
              enableBlur={true}
              baseOpacity={0.5}
              baseRotation={2}
              blurStrength={2}
            >
              This dual expertise allows me to not only engineer complex applications (like integrating AI voice features) but also to understand and measure their impact on the user and the business.
            </ScrollReveal>

            <ScrollReveal
              containerClassName="text-left md:text-center"
              textClassName="text-gray-300 text-base md:text-lg leading-relaxed"
              enableBlur={true}
              baseOpacity={0.5}
              baseRotation={2}
              blurStrength={2}
            >
              I am currently deepening this connection between code and data as I pursue my degree in Business Intelligence in Business Computing.
            </ScrollReveal>

            <ScrollReveal
              containerClassName="text-left md:text-center"
              textClassName="text-white text-base md:text-lg font-medium leading-relaxed"
              enableBlur={true}
              baseOpacity={0.5}
              baseRotation={2}
              blurStrength={2}
            >
              Please explore my projects to see how I bring these skills together.
            </ScrollReveal>
          </div>

          {/* Personal Information - FlowingMenu */}
          <div className="mt-20 w-full">
            <div className="max-w-4xl mx-auto h-[80vh]">
              <FlowingMenu
                items={[
                  {
                    link: '#home',
                    label: 'Name',
                    text: 'Rami Ben Ferjani',
                    icon: <FaUser style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: '#about',
                    label: 'Birthday',
                    text: '07 December 2003',
                    icon: <FaCalendarAlt style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: '#about',
                    label: 'Degree',
                    text: 'Business Intelligence',
                    icon: <FaGraduationCap style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: '#about',
                    label: 'Experience',
                    text: '2 Years Experience',
                    icon: <FaBriefcase style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: 'tel:+21658215477',
                    label: 'Phone',
                    text: '+216 58 215 477',
                    icon: <FaPhone style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: 'mailto:ramiferjani.20@gmail.com',
                    label: 'Email',
                    text: 'ramiferjani.20@gmail.com',
                    icon: <FaEnvelope style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: '#about',
                    label: 'Address',
                    text: 'Tunisia, Mahdia, 5114',
                    icon: <FaMapMarkerAlt style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: '#about',
                    label: 'Freelance',
                    text: 'Available',
                    icon: <FaCheckCircle style={{ fontSize: '3vh' }} />,
                  },
                  {
                    link: '#about',
                    label: 'Language',
                    text: 'Arabic, French, English',
                    icon: <FaGlobe style={{ fontSize: '3vh' }} />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-20"
      >
        <div className="w-full max-w-[95rem]">
          {/* Title with ScrollFloat animation */}
          <div className="mb-16">
            <div className="flex justify-center">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-white text-4xl font-medium tracking-tight md:text-6xl"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                My Skills
              </ScrollFloat>
            </div>
            {/* Small bar at the bottom of title */}
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-[95rem]">
          <SkillsParallax>
            {/* Programming Languages */}
            <ElectricBorder color="#5227FF" speed={1} thickness={2} className="rounded-lg w-full">
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm min-h-[200px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">Programming Languages</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                  {[
                    { name: "JavaScript", icon: <RiJavascriptFill className="text-4xl sm:text-5xl text-yellow-400" />, count: 95 },
                    { name: "T.Script", icon: <TbBrandTypescript className="text-4xl sm:text-5xl text-blue-500" />, count: 90 },
                    { name: "Python", icon: <AiOutlinePython className="text-4xl sm:text-5xl text-blue-600" />, count: 85 },
                    { name: "Java", icon: <RiJavaLine className="text-4xl sm:text-5xl text-orange-500" />, count: 80 },
                    { name: "SQL", icon: <SiMysql className="text-4xl sm:text-5xl text-blue-400" />, count: 88 },
                  ].map((skill, idx) => (
                    <div key={`${skill.name}-${idx}`} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                      <MetallicIcon className="text-3xl sm:text-4xl">
                        {skill.icon}
                      </MetallicIcon>
                      <div className="text-sm sm:text-lg font-semibold text-white text-center">{skill.name}</div>
                      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        <ScrollCount 
                          to={skill.count} 
                          duration={1.5} 
                          delay={idx * 0.05}
                          triggerOffset={300}
                        />%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>

            {/* Frontend Development */}
            <ElectricBorder color="#5227FF" speed={1} thickness={2} className="rounded-lg w-full">
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm min-h-[200px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">Frontend Development</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                  {[
                    { name: "React", icon: <FaReact className="text-4xl sm:text-5xl text-cyan-400" />, count: 95 },
                    { name: "Next.js", icon: <RiNextjsFill className="text-4xl sm:text-5xl text-white" />, count: 92 },
                    { name: "React Native", icon: <TbBrandReactNative className="text-4xl sm:text-5xl text-cyan-500" />, count: 88 },
                    { name: "Expo", icon: <SiExpo className="text-4xl sm:text-5xl text-gray-300" />, count: 85 },
                    { name: "Redux", icon: <SiRedux className="text-4xl sm:text-5xl text-purple-500" />, count: 90 },
                    { name: "HTML5", icon: <FaHtml5 className="text-4xl sm:text-5xl text-orange-500" />, count: 98 },
                    { name: "CSS3", icon: <IoLogoCss3 className="text-4xl sm:text-5xl text-blue-500" />, count: 95 },
                    { name: "Tailwind CSS", icon: <TbBrandTailwind className="text-4xl sm:text-5xl text-cyan-400" />, count: 93 },
                    { name: "Material-UI", icon: <MdSettings className="text-4xl sm:text-5xl text-blue-500" />, count: 87 },
                  ].map((skill, idx) => (
                    <div key={`${skill.name}-${idx}`} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                      <MetallicIcon className="text-3xl sm:text-4xl">
                        {skill.icon}
                      </MetallicIcon>
                      <div className="text-sm sm:text-lg font-semibold text-white text-center">{skill.name}</div>
                      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        <ScrollCount 
                          to={skill.count} 
                          duration={1.5} 
                          delay={idx * 0.05}
                          triggerOffset={300}
                        />%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>

            {/* Backend Development */}
            <ElectricBorder color="#5227FF" speed={1} thickness={2} className="rounded-lg w-full">
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm min-h-[200px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">Backend Development</div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                  {[
                    { name: "Node.js", icon: <FaNode className="text-4xl sm:text-5xl text-green-500" />, count: 92 },
                    { name: "Express", icon: <SiExpress className="text-4xl sm:text-5xl text-gray-300" />, count: 90 },
                    { name: "REST APIs", icon: <FaNode className="text-4xl sm:text-5xl text-green-400" />, count: 93 },
                    { name: "Symfony", icon: <FaSymfony className="text-4xl sm:text-5xl text-black" />, count: 85 },
                  ].map((skill, idx) => (
                    <div key={`${skill.name}-${idx}`} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                      <MetallicIcon className="text-3xl sm:text-4xl">
                        {skill.icon}
                      </MetallicIcon>
                      <div className="text-sm sm:text-lg font-semibold text-white text-center">{skill.name}</div>
                      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        <ScrollCount 
                          to={skill.count} 
                          duration={1.5} 
                          delay={idx * 0.05}
                          triggerOffset={300}
                        />%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>

            {/* Databases & ORMs */}
            <ElectricBorder color="#5227FF" speed={1} thickness={2} className="rounded-lg w-full">
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm min-h-[200px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">Databases & ORMs</div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                  {[
                    { name: "MongoDB", icon: <BiLogoMongodb className="text-4xl sm:text-5xl text-green-500" />, count: 90 },
                    { name: "MySQL", icon: <SiMysql className="text-4xl sm:text-5xl text-blue-400" />, count: 88 },
                    { name: "Supabase", icon: <TbBrandSupabase className="text-4xl sm:text-5xl text-green-400" />, count: 85 },
                    { name: "Appwrite", icon: <SiAppwrite className="text-4xl sm:text-5xl text-red-500" />, count: 87 },
                  ].map((skill, idx) => (
                    <div key={`${skill.name}-${idx}`} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                      <MetallicIcon className="text-3xl sm:text-4xl">
                        {skill.icon}
                      </MetallicIcon>
                      <div className="text-sm sm:text-lg font-semibold text-white text-center">{skill.name}</div>
                      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        <ScrollCount 
                          to={skill.count} 
                          duration={1.5} 
                          delay={idx * 0.05}
                          triggerOffset={300}
                        />%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>

            {/* Tools & Platforms */}
            <ElectricBorder color="#5227FF" speed={1} thickness={2} className="rounded-lg w-full">
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm min-h-[200px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">Tools & Platforms</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                  {[
                    { name: "Git", icon: <SiGit className="text-4xl sm:text-5xl text-orange-500" />, count: 95 },
                    { name: "GitHub", icon: <FaGithub className="text-4xl sm:text-5xl text-white" />, count: 95 },
                    { name: "CI/CD", icon: <MdSettings className="text-4xl sm:text-5xl text-blue-400" />, count: 85 },
                    { name: "Vercel", icon: <SiVercel className="text-4xl sm:text-5xl text-white" />, count: 90 },
                    { name: "Netlify", icon: <SiNetlify className="text-4xl sm:text-5xl text-teal-400" />, count: 88 },
                    { name: "Webpack", icon: <SiWebpack className="text-4xl sm:text-5xl text-blue-500" />, count: 82 },
                    { name: "Power BI", icon: <MdDataUsage className="text-4xl sm:text-5xl text-yellow-400" />, count: 88 },
                    { name: "Firebase", icon: <SiFirebase className="text-4xl sm:text-5xl text-orange-400" />, count: 85 },
                  ].map((skill, idx) => (
                    <div key={`${skill.name}-${idx}`} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                      <MetallicIcon className="text-3xl sm:text-4xl">
                        {skill.icon}
                      </MetallicIcon>
                      <div className="text-sm sm:text-lg font-semibold text-white text-center">{skill.name}</div>
                      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        <ScrollCount 
                          to={skill.count} 
                          duration={1.5} 
                          delay={idx * 0.05}
                          triggerOffset={300}
                        />%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>

            {/* Data Science & AI */}
            <ElectricBorder color="#5227FF" speed={1} thickness={2} className="rounded-lg w-full">
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm min-h-[200px]">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">Data Science & AI</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                  {[
                    { name: "Pandas", icon: <SiPandas className="text-4xl sm:text-5xl text-blue-500" />, count: 88 },
                    { name: "NumPy", icon: <SiNumpy className="text-4xl sm:text-5xl text-blue-600" />, count: 85 },
                    { name: "Matplotlib", icon: <MdScience className="text-4xl sm:text-5xl text-blue-400" />, count: 82 },
                    { name: "Machine Learning", icon: <AiOutlinePython className="text-4xl sm:text-5xl text-blue-600" />, count: 80 },
                    { name: "Deep Learning", icon: <AiOutlinePython className="text-4xl sm:text-5xl text-blue-600" />, count: 75 },
                  ].map((skill, idx) => (
                    <div key={`${skill.name}-${idx}`} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4">
                      <MetallicIcon className="text-3xl sm:text-4xl">
                        {skill.icon}
                      </MetallicIcon>
                      <div className="text-sm sm:text-lg font-semibold text-white text-center">{skill.name}</div>
                      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        <ScrollCount 
                          to={skill.count} 
                          duration={1.5} 
                          delay={idx * 0.05}
                          triggerOffset={300}
                        />%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </SkillsParallax>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-20"
      >
        <div className="w-full max-w-7xl mb-16">
          {/* Title with ScrollFloat animation */}
          <div className="mb-16">
            <div className="flex justify-center">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-white text-4xl font-medium tracking-tight md:text-6xl"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                Education
              </ScrollFloat>
            </div>
            {/* Small bar at the bottom of title */}
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <EducationSection />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-20"
      >
        <div className="w-full max-w-7xl mb-16">
          {/* Title with ScrollFloat animation */}
          <div className="mb-16">
            <div className="flex justify-center">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-white text-4xl font-medium tracking-tight md:text-6xl"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                Projects
              </ScrollFloat>
            </div>
            {/* Small bar at the bottom of title */}
            <div className="flex justify-center mt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Projects Grid with 3D Cards */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Sales Dashboard */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    Sales Dashboard
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-1 mb-3 relative z-50"
                  >
                    Personal Project • September 2025 - October 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 mb-6 flex-grow relative z-50"
                  >
                    Developed a professional interactive dashboard using Power BI, including data import, cleaning, modeling, and visualization, to analyze and present key business performance indicators (KPIs).
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Power BI
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Sales Dashboard</h2>
                  <p className="text-gray-400 mb-4">Personal Project • September 2025 - October 2025</p>
                  <p className="text-white mb-6 leading-relaxed">
                    Developed a professional interactive dashboard using Power BI, including data import, cleaning, modeling, and visualization, to analyze and present key business performance indicators (KPIs).
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Power BI</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Data Analysis</span>
                  </div>
                  <div className="mt-6">
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* Movie App */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    Movie App
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300  text-sm mt-1 mb-3 relative z-50"
                  >
                    Personal Project • September 2025 - October 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 mb-6 flex-grow relative z-50"
                  >
                    Developed a scalable movie app using Expo, TypeScript, Tailwind CSS, and Appwrite, featuring a custom popularity algorithm and an engaging, responsive UI for superior user experience.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Expo
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Movie App</h2>
                  <p className="text-gray-400 mb-4">Personal Project • September 2025 - October 2025</p>
                  <p className="text-white mb-6 leading-relaxed">
                    Developed a scalable movie app using Expo, TypeScript, Tailwind CSS, and Appwrite, featuring a custom popularity algorithm and an engaging, responsive UI for superior user experience.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Expo</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Appwrite</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        // Open window immediately (synchronously) before async operations
                        const url = "https://github.com/Ramiferjanii/Movie_Mobile-app";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          // If popup was blocked, navigate in current window
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" /> View on GitHub
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* LMS SaaS App with AI Voice Tutoring */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    LMS SaaS App with AI Voice Tutoring
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300  text-sm mt-1 dark:text-neutral-300 mb-3 relative z-50"
                  >
                    Personal Project • August 2025 - September 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 dark:text-neutral-300 mb-6 flex-grow relative z-50"
                  >
                    Engineered a comprehensive AI solution for voice tutoring in an LMS SaaS application, integrating Next.js and Vapi to enhance user interaction. Led the development that increased student engagement by 35%, reduced onboarding time by 25%, and improved learning outcomes.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Next.js
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">LMS SaaS App with AI Voice Tutoring</h2>
                  <p className="text-gray-400 mb-4">Personal Project • August 2025 - September 2025</p>
                  <p className="text-white mb-6 leading-relaxed">
                    Engineered a comprehensive AI solution for voice tutoring in an LMS SaaS application, integrating Next.js and Vapi to enhance user interaction. Led the development that increased student engagement by 35%, reduced onboarding time by 25%, and improved learning outcomes.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">AI/Vapi</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        const url = "https://conversoo.netlify.app";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGlobe className="w-5 h-5" /> Visit Live Site
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* Social Media Platform */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    Social Media Platform
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-1 dark:text-neutral-300 mb-3 relative z-50"
                  >
                    Personal Project • July 2025 - August 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 dark:text-neutral-300 mb-6 flex-grow relative z-50"
                  >
                    Engineered a responsive React front-end, integrated with Express/Node backend and Firebase authentication, to streamline user access, improve security and drive a 15% decrease in unauthorized access attempts.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      React
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Social Media Platform</h2>
                  <p className="text-gray-400 mb-4">Personal Project • July 2025 - August 2025</p>
                  <p className="text-white mb-6 leading-relaxed">
                    Engineered a responsive React front-end, integrated with Express/Node backend and Firebase authentication, to streamline user access, improve security and drive a 15% decrease in unauthorized access attempts.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Firebase</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        const url = "https://github.com/Ramiferjanii/Social-media-dashboard-";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" /> View on GitHub
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* Storage Management */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    Storage Management
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-1 dark:text-neutral-300 mb-3 relative z-50"
                  >
                    Personal Project • June 2025 - July 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 dark:text-neutral-300 mb-6 flex-grow relative z-50"
                  >
                    Engineered OTP validation flow with Next.js, reducing authentication failures by 20% and streamlining user access to secure storage management, demonstrating improved data protection measures.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Next.js
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Storage Management</h2>
                  <p className="text-gray-400 mb-4">Personal Project • June 2025 - July 2025</p>
                  <p className="text-white mb-6 leading-relaxed">
                    Engineered OTP validation flow with Next.js, reducing authentication failures by 20% and streamlining user access to secure storage management, demonstrating improved data protection measures.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">OTP</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        const url = "https://storei.netlify.app/sign-in";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGlobe className="w-5 h-5" /> Visit Live Site
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* Bank Management System */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    Bank Management System
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-1 dark:text-neutral-300 mb-3 relative z-50"
                  >
                    Personal Project • May 2025 - June 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 dark:text-neutral-300 mb-6 flex-grow relative z-50"
                  >
                    Spearheaded the development of secure transaction modules with role-based access (Admin/Teller/Customer) using Java, resulting in a 15% reduction in transaction processing time and faster response times.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Java
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Bank Management System</h2>
                  <p className="text-gray-400 mb-4">Personal Project • May 2025 - June 2025</p>
                  <p className="text-white mb-6 leading-relaxed">
                    Spearheaded the development of secure transaction modules with role-based access (Admin/Teller/Customer) using Java, resulting in a 15% reduction in transaction processing time and faster response times.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">OOP</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        const url = "https://github.com/Ramiferjanii/Bank-Management-System-JavaOOP";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" /> View on GitHub
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* E-commerce Platform */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    E-commerce Platform
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-1 dark:text-neutral-300 mb-3 relative z-50"
                  >
                    Personal Project • April 2025 - May 2025
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 dark:text-neutral-300 mb-6 flex-grow relative z-50"
                  >
                    Optimized complex SQL queries and backend logic, improving page load speed by 40%.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Symfony
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">E-commerce Platform</h2>
                  <p className="text-gray-400 mb-4">Personal Project • April 2025 - May 2025</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Optimized complex SQL queries and backend logic, improving page load speed by 40%.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-black/40 text-white rounded-full text-sm">Symfony</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">SQL</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        const url = "https://github.com/Ramiferjanii/Symfony-Project-Ecommerce";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" /> View on GitHub
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            {/* Classic Chess Engine */}
            <Modal>
              <CardContainer className="inter-var" containerClassName="py-0">
                <CardBody className="bg-gradient-to-br from-black via-purple-900/20 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto !h-auto !w-full rounded-xl p-6 border flex flex-col overflow-hidden min-h-[400px]">
                  <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                    <Vortex
                      backgroundColor="rgba(0,0,0,0.5)"
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      particleCount={150}
                      baseHue={280}
                    />
                  </div>
                  <Meteors number={15} />
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white mb-2 relative z-50"
                  >
                    Classic Chess Engine
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-1 dark:text-neutral-300 mb-3 relative z-50"
                  >
                    Personal Project • November 2024 - December 2024
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm mt-2 dark:text-neutral-300 mb-6 flex-grow relative z-50"
                  >
                    Developed a robust move validation system in Python, writing 85+ unit tests to ensure 99%+ accuracy and fair gameplay.
                  </CardItem>
                  <div className="flex justify-between items-center mt-auto relative z-50">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <ModalTrigger className="text-white hover:text-purple-300 transition-colors">
                        View Details →
                      </ModalTrigger>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Python
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <ModalBody className="bg-black/95 border-white/10">
                <ModalContent className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Classic Chess Engine</h2>
                  <p className="text-gray-400 mb-4">Personal Project • November 2024 - December 2024</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Developed a robust move validation system in Python, writing 85+ unit tests to ensure 99%+ accuracy and fair gameplay.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Testing</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      onClick={async (e) => {
                        e.preventDefault();
                        const url = "https://github.com/Ramiferjanii/chess";
                        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
                        if (!newWindow) {
                          window.location.href = url;
                        }
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" /> View on GitHub
                    </Button>
                    <BackToMainButton />
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <MacbookScroll
            title={null}
            badge={
              <div className="flex flex-col items-center gap-2">
                <span className="text-black text-lg md:text-xl ">
                  Click the link
                </span>
                <a href="https://github.com/Ramiferjanii" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                  <FaGithub className="h-10 w-10 text-black -rotate-12 transform hover:rotate-0 transition-transform duration-300" />
                </a>
              </div>
            }
            src={`/images/image.png`}
            showGradient={false}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}

