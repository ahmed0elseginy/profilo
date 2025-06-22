"use client";

import { useState, useMemo } from 'react';
import Link from "next/link";
import { Home, Briefcase, GraduationCap, Mails, FolderGit2, Zap, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useResponsive } from '@/hooks/use-responsive';
import { SOCIAL_LINKS, ANIMATION_DURATIONS, ANIMATION_DELAYS } from '@/lib/constants';
import type { NavLink, SocialLink } from '@/lib/types';

const NAV_LINKS: NavLink[] = [
  { href: "#tech-stack", label: "Tech Stack", icon: <Zap className="w-4 h-4" /> },
  { href: "#projects", label: "Projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { href: "#education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { href: "#experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { href: "#contact", label: "Contact", icon: <Mails className="w-4 h-4" /> },
];

const SOCIAL_LINKS_DATA: SocialLink[] = [
  { 
    href: SOCIAL_LINKS.GITHUB, 
    label: "GitHub", 
    icon: <Github className="w-4 h-4" />,
    color: "hover:text-white"
  },
  { 
    href: SOCIAL_LINKS.LINKEDIN, 
    label: "LinkedIn", 
    icon: <Linkedin className="w-4 h-4" />,
    color: "hover:text-blue-400"
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { isMobile } = useResponsive();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const headerVariants = useMemo(() => ({
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: ANIMATION_DURATIONS.SLOW,
        type: "spring",
        stiffness: 100
      }
    }
  }), []);

  const navItemVariants = useMemo(() => ({
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  }), []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-lg sm:text-xl font-bold text-yellow-400 shiny-text hover:scale-105 transition-transform"
        >
          Le Petit Prince
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                transition={{ 
                  delay: ANIMATION_DELAYS.SHORT * index, 
                  duration: ANIMATION_DURATIONS.NORMAL 
                }}
              >
                <Link 
                  href={link.href} 
                  className="px-3 py-2 text-sm text-white/80 hover:text-yellow-400 transition-all duration-300 rounded-full hover:bg-yellow-400/10 relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-yellow-400/5 rounded-full opacity-0 group-hover:opacity-100"
                    layoutId="nav-hover"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Social Links for Desktop */}
            <div className="flex items-center gap-1 ml-3 pl-3 border-l border-white/10">
              {SOCIAL_LINKS_DATA.map((social, index) => (
                <motion.div
                  key={social.href}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ 
                    delay: ANIMATION_DELAYS.SHORT * (NAV_LINKS.length + index), 
                    duration: ANIMATION_DURATIONS.NORMAL 
                  }}
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-white/80 ${social.color} transition-all duration-300 rounded-full hover:bg-yellow-400/10 relative group`}
                    aria-label={social.label}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                    >
                      {social.icon}
                    </motion.div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex items-center gap-2 text-xs">
            {NAV_LINKS.slice(0, 4).map((link, index) => (
              <motion.div
                key={link.href}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                transition={{ 
                  delay: ANIMATION_DELAYS.SHORT * index, 
                  duration: ANIMATION_DURATIONS.NORMAL 
                }}
              >
                <Link 
                  href={link.href} 
                  className="flex flex-col items-center gap-1 text-gray-400 hover:text-yellow-400 transition-colors group min-w-0"
                >
                  <motion.div 
                    className="group-hover:scale-110 transition-transform"
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.div>
                  <span className="text-[9px] font-medium truncate max-w-12 leading-tight">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
            
            {/* Social Links for Mobile */}
            {SOCIAL_LINKS_DATA.map((social, index) => (
              <motion.div
                key={social.href}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                transition={{ 
                  delay: ANIMATION_DELAYS.SHORT * (4 + index), 
                  duration: ANIMATION_DURATIONS.NORMAL 
                }}
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-1 text-gray-400 ${social.color} transition-colors group min-w-0`}
                  aria-label={social.label}
                >
                  <motion.div 
                    className="group-hover:scale-110 transition-transform"
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.div>
                  <span className="text-[9px] font-medium truncate max-w-12">
                    {social.label}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </nav>
    </motion.header>
  );
}
