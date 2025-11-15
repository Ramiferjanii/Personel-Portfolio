"use client";
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCheckCircle, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Animated floating particles using Framer Motion
function FloatingParticles() {
  const particles = Array.from({ length: 40 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const colors = ['#8b5cf6', '#ec4899', '#3b82f6'];
        const color = colors[i % 3];
        const size = Math.random() * 6 + 3;
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// Interactive 3D card for contact info
function ContactInfoCard({ icon: Icon, title, content, href, delay = 0 }: {
  icon: any;
  title: string;
  content: string;
  href?: string;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const rotateX = useSpring(useTransform(mouseY, [0, 300], [-10, 10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 300], [10, -10]), { stiffness: 300, damping: 30 });

  const contentElement = (
    <motion.div
      ref={cardRef}
      className="bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black/90 dark:border-purple-500/30 border-purple-500/20 w-full h-auto rounded-xl p-6 border cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(150);
        mouseY.set(150);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20"
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 text-purple-400" />
        </motion.div>
        <div>
          <p className="text-sm text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-white font-semibold">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="block"
      >
        {contentElement}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {contentElement}
    </motion.div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string, showEmptyErrors: boolean = false): string => {
    // Don't show errors for empty fields unless explicitly requested (on submit)
    if (!value && !showEmptyErrors) return '';
    
    switch (name) {
      case 'email':
        if (!value) return showEmptyErrors ? 'Email is required' : '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Please enter a valid email address';
      case 'name':
        if (!value) return showEmptyErrors ? 'Name is required' : '';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'subject':
        if (!value) return showEmptyErrors ? 'Subject is required' : '';
        if (value.length < 3) return 'Subject must be at least 3 characters';
        return '';
      case 'message':
        if (!value) return showEmptyErrors ? 'Message is required' : '';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Capitalize first letter of each word for name field
    let processedValue = value;
    if (name === 'name') {
      processedValue = value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    
    setFormData({
      ...formData,
      [name]: processedValue,
    });
    
    // Clear error when user starts typing
    if (error) setError(null);
    
    // Validate field in real-time
    const fieldError = validateField(name, processedValue);
    setFieldErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Validate all fields before submission (show errors for empty fields)
    const errors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData], true);
      if (error) errors[key] = error;
    });
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      setError('Please fix the errors in the form before submitting.');
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show detailed error in development, user-friendly in production
        const errorMsg = data.details && process.env.NODE_ENV === 'development' 
          ? `${data.error}\n\nDetails: ${data.details}`
          : data.error || 'Failed to send message';
        throw new Error(errorMsg);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    }
  };

  const inputVariants = {
    unfocused: {
      scale: 1,
      borderColor: 'rgba(139, 92, 246, 0.3)',
    },
    focused: {
      scale: 1.02,
      borderColor: 'rgba(139, 92, 246, 0.8)',
      boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)',
    },
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's work together and bring your ideas to life. I'm always open to discussing new projects and opportunities.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <ContactInfoCard
              icon={FaEnvelope}
              title="Email"
              content="ramiferjani.20@gmail.com"
              href="mailto:ramiferjani.20@gmail.com"
              delay={0.1}
            />
            
            <ContactInfoCard
              icon={FaPhone}
              title="Phone"
              content="+216 58 215 477"
              href="tel:+21658215477"
              delay={0.2}
            />
            
            <ContactInfoCard
              icon={FaMapMarkerAlt}
              title="Location"
              content="Tunisia, Mahdia, 5114"
              delay={0.3}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-black/90 via-purple-900/30 to-black/90 relative w-full h-auto rounded-2xl p-8 border border-purple-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-gray-400 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                    className="relative"
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 z-10">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name"
                      autoCapitalize="words"
                      autoComplete="name"
                      required
                      className={`w-full pl-12 pr-4 py-4 bg-black/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        fieldErrors.name ? 'border-red-500/50' : 'border-purple-500/30'
                      }`}
                    />
                    {fieldErrors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 ml-2"
                      >
                        {fieldErrors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                    className="relative"
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 z-10">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Email"
                      required
                      className={`w-full pl-12 pr-4 py-4 bg-black/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        fieldErrors.email ? 'border-red-500/50' : 'border-purple-500/30'
                      }`}
                    />
                    {fieldErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 ml-2"
                      >
                        {fieldErrors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
                    className="relative"
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 z-10">
                      <FaPaperPlane />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Subject"
                      required
                      className={`w-full pl-12 pr-4 py-4 bg-black/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        fieldErrors.subject ? 'border-red-500/50' : 'border-purple-500/30'
                      }`}
                    />
                    {fieldErrors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 ml-2"
                      >
                        {fieldErrors.subject}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Message"
                      required
                      rows={6}
                      className={`w-full px-4 py-4 bg-black/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                        fieldErrors.message ? 'border-red-500/50' : 'border-purple-500/30'
                      }`}
                    />
                    {fieldErrors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1 ml-2"
                      >
                        {fieldErrors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full p-4 bg-red-500/20 border-2 border-red-500/50 rounded-xl text-red-300 text-sm flex items-start gap-3"
                    >
                      <FaEnvelope className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Error sending message</p>
                        <p className="text-sm whitespace-pre-line">{error}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Success Message */}
                  {isSubmitted && !error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="w-full p-4 bg-green-500/20 border-2 border-green-500/50 rounded-xl text-green-300 text-sm flex items-start gap-3"
                    >
                      <FaCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Message sent successfully!</p>
                        <p className="text-sm">I'll get back to you as soon as possible.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
