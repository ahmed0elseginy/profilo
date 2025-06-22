"use client";

import { ArrowDown, Send, Sparkles, Star, Rocket } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useResponsive } from '@/hooks/use-responsive';
import { PERSONAL_INFO, ANIMATION_DURATIONS, ANIMATION_DELAYS } from '@/lib/constants';

const FLOATING_ELEMENTS = [
  { Icon: Send, className: "w-12 h-12 sm:w-16 sm:h-16 absolute top-16 sm:top-20 left-0 text-yellow-400 animate-fly-across opacity-70", delay: 1 },
  { Icon: Sparkles, className: "w-8 h-8 sm:w-10 sm:h-10 absolute top-1/4 right-0 text-yellow-400 animate-shooting-star", delay: 3 },
  { Icon: Star, className: "w-6 h-6 sm:w-8 sm:h-8 absolute top-1/3 left-1/4 text-yellow-400 opacity-60 floating-element", delay: 0 },
  { Icon: Star, className: "w-4 h-4 sm:w-6 sm:h-6 absolute top-2/3 right-1/3 text-yellow-300 opacity-40 floating-element", delay: 0 },
];

const FLOATING_PLANETS = [
  { 
    className: "top-12 sm:top-16 right-12 sm:right-16 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 opacity-30",
    rotation: 360,
    duration: 20
  },
  { 
    className: "bottom-24 sm:bottom-32 left-12 sm:left-16 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-400 to-red-600 opacity-25",
    rotation: -360,
    duration: 25
  },
  { 
    className: "top-1/2 right-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-600 opacity-20",
    rotation: 360,
    duration: 30
  },
];

export function HomeSection() {
  const controls = useAnimation();
  const { isMobile } = useResponsive();

  const containerVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: ANIMATION_DURATIONS.VERY_SLOW, 
        ease: "easeOut" as const
      }
    }
  }), []);

  const textVariants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }), []);

  const titleVariants = useMemo(() => ({
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: ANIMATION_DELAYS.LONG, 
        duration: ANIMATION_DURATIONS.VERY_SLOW, 
        type: "spring" as const, 
        stiffness: 100 
      }
    }
  }), []);

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center text-white"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons - Reduced for performance */}
        {FLOATING_ELEMENTS.slice(0, isMobile ? 2 : 4).map(({ Icon, className, delay }, index) => (
          <Icon 
            key={index}
            className={`${className} floating-element`}
            style={{ 
              animationDuration: '25s', 
              animationDelay: `${delay}s` 
            }} 
          />
        ))}
        
        {/* Floating Planets - Optimized animations */}
        {FLOATING_PLANETS.map((planet, index) => (
          <motion.div 
            key={index}
            className={`absolute ${planet.className} rounded-full floating-element`}
            animate={{ rotate: planet.rotation }}
            transition={{ 
              duration: planet.duration, 
              repeat: Infinity, 
              ease: "linear",
              // Reduce animation complexity on mobile
              ...(isMobile && { duration: planet.duration * 1.5 })
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="initial"
        animate={controls}
      >
        {/* Welcome Text */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-yellow-400 mb-2"
          variants={textVariants}
          transition={{ delay: ANIMATION_DELAYS.LONG, duration: ANIMATION_DURATIONS.SLOW }}
        >
          Welcome to my planet...
        </motion.p>
        
        {/* Main Title */}
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2 mb-4 shiny-text leading-tight"
          variants={titleVariants}
        >
          {PERSONAL_INFO.NAME}
        </motion.h1>
        
        {/* Subtitle with Icon */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          variants={textVariants}
          transition={{ delay: ANIMATION_DELAYS.LONG * 2, duration: ANIMATION_DURATIONS.SLOW }}
        >
          <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
          <p className="text-base sm:text-lg md:text-2xl story-text">
            {PERSONAL_INFO.TAGLINE}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8 px-4"
          variants={textVariants}
          transition={{ delay: ANIMATION_DELAYS.LONG * 2.4, duration: ANIMATION_DURATIONS.SLOW }}
        >
          "What makes my code so special is the time I have devoted to perfecting it.
          <br className="hidden sm:block" />
          I build scalable backend systems with Java & Spring Boot..."
        </motion.p>

        {/* Call to Action */}
        <motion.a 
          href="#projects" 
          className="absolute bottom-16 sm:bottom-20 md:bottom-10 animate-bounce text-white group focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
          variants={textVariants}
          transition={{ delay: ANIMATION_DELAYS.LONG * 3, duration: ANIMATION_DURATIONS.SLOW }}
          aria-label="Begin the journey - scroll to projects section"
        >
          <p className="text-xs sm:text-sm mb-1 group-hover:text-yellow-400 transition-colors">
            Begin the journey
          </p>
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto group-hover:text-yellow-400 transition-colors" />
        </motion.a>
      </motion.div>

      {/* Enhanced Planet SVG */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/3 md:h-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: ANIMATION_DELAYS.MEDIUM, 
          duration: ANIMATION_DURATIONS.VERY_SLOW, 
          ease: "easeOut" 
        }}
      >
        <OptimizedPlanetSvg />
      </motion.div>
    </section>
  );
}

// Separated and optimized Planet SVG component
const OptimizedPlanetSvg = () => (
  <svg
    viewBox="0 0 1440 350"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-full"
    role="img"
    aria-label="Stylized planet surface with craters"
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="crater-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    
    {/* Main planet surface */}
    <path
      d="M0,150 C200,250 400,100 720,200 C1040,300 1240,150 1440,250 L1440,350 L0,350 Z"
      fill="url(#planetGradient)"
      filter="url(#glow)"
      className="planet-surface"
    />
    
    {/* Optimized craters - fewer elements for better performance */}
    <circle cx="200" cy="220" r="30" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    <circle cx="500" cy="180" r="50" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    <circle cx="900" cy="250" r="40" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    <circle cx="1200" cy="230" r="25" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    
    {/* Surface details */}
    <circle cx="350" cy="200" r="15" fill="#06b6d4" opacity="0.3" />
    <circle cx="750" cy="220" r="20" fill="#06b6d4" opacity="0.3" />
    <circle cx="1050" cy="200" r="18" fill="#06b6d4" opacity="0.3" />
    
    {/* Little Prince figure - simplified for performance */}
    <g transform="translate(400, 140)">
      <ellipse cx="0" cy="15" rx="8" ry="20" fill="#2563eb" opacity="0.8" />
      <circle cx="0" cy="-5" r="12" fill="#fef3c7" opacity="0.9" />
      <path d="M-8,-12 Q0,-18 8,-12" fill="#d97706" opacity="0.8" />
      <path d="M-10,5 Q0,0 10,5 L8,10 Q0,8 -8,10 Z" fill="#dc2626" opacity="0.9" />
    </g>
  </svg>
);
