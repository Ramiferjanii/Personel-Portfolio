"use client";
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaFileAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Ramiferjanii', label: 'GitHub', color: '#8b5cf6' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rami-ben-ferjani-072150315/', label: 'LinkedIn', color: '#3b82f6' },
    { icon: FaInstagram, href: 'https://www.instagram.com/rami_ferjani_/?hl=en', label: 'Instagram', color: '#ec4899' },
    { icon: FaFacebook, href: 'https://www.facebook.com/ferjani.ferjanirami', label: 'Facebook', color: '#3b82f6' },
    { icon: FaFileAlt, href: '#', label: 'Resume', color: '#8b5cf6' },
  ];

  return (
    <footer className="relative z-10 py-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* First Row - Copyright and Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6"
        >
          <motion.p
            className="text-gray-300 text-sm md:text-base font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            © {currentYear} Rami Ben Ferjani. All rights reserved.
          </motion.p>
          
          <div className="flex items-center gap-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative text-gray-400 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6" />
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 0.6 }}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Second Row - Built with text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Built with passion using{' '}
            <motion.span
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.2, textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              React
            </motion.span>
            ,{' '}
            <motion.span
              className="text-blue-400 font-semibold"
              whileHover={{ scale: 1.2, textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              TypeScript
            </motion.span>
            , and{' '}
            <motion.span
              className="text-cyan-400 font-semibold"
              whileHover={{ scale: 1.2, textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              Tailwind CSS
            </motion.span>
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-purple-500/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

