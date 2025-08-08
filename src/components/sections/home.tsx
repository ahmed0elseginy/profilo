"use client";

import { ArrowDown, Send, Sparkles, Star, Rocket } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";

export function HomeSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  const floatingElements = useMemo(() => [
    { 
      Component: Send, 
      className: "w-12 h-12 md:w-16 md:h-16 absolute top-20 left-0 text-yellow-400 opacity-70 floating-element", 
      style: { animationDuration: '25s', animationDelay: '1s' } 
    },
    { 
      Component: Sparkles, 
      className: "w-8 h-8 md:w-10 md:h-10 absolute top-1/4 right-0 text-yellow-400 floating-element", 
      style: { animationDuration: '8s', animationDelay: '3s' }
    },
    { 
      Component: Star, 
      className: "w-6 h-6 md:w-8 md:h-8 absolute top-1/3 left-1/4 text-yellow-400 opacity-60 floating-element" 
    },
    { 
      Component: Star, 
      className: "w-4 h-4 md:w-6 md:h-6 absolute top-2/3 right-1/3 text-yellow-300 opacity-40 floating-element" 
    },
  ], []);

  const planets = useMemo(() => [
    {
      className: "absolute top-16 right-16 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-30 floating-element",
      animation: { rotate: 360 },
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    },
    {
      className: "absolute bottom-32 left-16 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-25 floating-element",
      animation: { rotate: -360 },
      transition: { duration: 25, repeat: Infinity, ease: "linear" }
    },
    {
      className: "absolute top-1/2 right-1/4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-20 floating-element",
      animation: { rotate: 360 },
      transition: { duration: 30, repeat: Infinity, ease: "linear" }
    },
  ], []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flying Elements */}
        {floatingElements.map((element, index) => {
          const { Component, className, style } = element;
          return (
            <Component 
              key={index}
              className={className}
              style={style}
            />
          );
        })}
        
        {/* Floating Planets */}
        {planets.map((planet, index) => (
          <motion.div 
            key={index}
            className={planet.className}
            animate={planet.animation}
            transition={planet.transition}
          />
        ))}
      </div>

      <motion.div 
        className="z-10 flex flex-col items-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-yellow-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Welcome to my planet...
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-2 mb-4 shiny-text"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 100 }}
        >
          Ahmed El-Seginy
        </motion.h1>
        
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Rocket className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          <p className="text-base md:text-lg lg:text-2xl story-text">
            Software Engineer 
          </p>
        </motion.div>

        <motion.p 
          className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          "What makes my code so special is the time I have devoted to perfecting it.<br className="hidden sm:block"/>
          I build scalable backend systems with Java & Spring Boot..."
        </motion.p>

        <motion.a 
          href="#projects" 
          className="absolute bottom-16 md:bottom-10 animate-bounce text-white group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-xs md:text-sm mb-1 group-hover:text-yellow-400 transition-colors">Begin the journey</p>
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 mx-auto group-hover:text-yellow-400 transition-colors" />
        </motion.a>
      </motion.div>

      {/* Enhanced Planet SVG */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/3 md:h-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      >
        <EnhancedPlanetSvg />
      </motion.div>
    </section>
  );
}

const EnhancedPlanetSvg = () => (
  <svg
    viewBox="0 0 1440 350"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-full"
    role="img"
    aria-label="Planet surface decoration"
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
    
    {/* Craters with enhanced styling */}
    <circle cx="200" cy="220" r="30" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    <circle cx="500" cy="180" r="50" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    <circle cx="900" cy="250" r="40" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    <circle cx="1200" cy="230" r="25" fill="#8b5cf6" opacity="0.4" filter="url(#crater-glow)" />
    
    {/* Additional surface details */}
    <circle cx="350" cy="200" r="15" fill="#06b6d4" opacity="0.3" />
    <circle cx="750" cy="220" r="20" fill="#06b6d4" opacity="0.3" />
    <circle cx="1050" cy="200" r="18" fill="#06b6d4" opacity="0.3" />
    
    {/* Little Prince figure */}
    <g transform="translate(400, 140)">
      {/* Body */}
      <ellipse cx="0" cy="15" rx="8" ry="20" fill="#2563eb" opacity="0.8" />
      {/* Head */}
      <circle cx="0" cy="-5" r="12" fill="#fef3c7" opacity="0.9" />
      {/* Hair */}
      <path d="M-8,-12 Q0,-18 8,-12" fill="#d97706" opacity="0.8" />
      {/* Scarf */}
      <path d="M-10,5 Q0,0 10,5 L8,10 Q0,8 -8,10 Z" fill="#dc2626" opacity="0.9" />
    </g>
  </svg>
);
