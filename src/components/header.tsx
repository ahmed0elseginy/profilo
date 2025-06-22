"use client";

import { useState, useCallback } from 'react';
import Link from "next/link";
import { Home, Briefcase, GraduationCap, Mails, FolderGit2, Zap, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "#tech-stack", label: "Tech Stack", icon: Zap },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mails },
] as const;

const socialLinks = [
  { 
    href: "https://github.com/ahmed-elseginy", 
    label: "GitHub", 
    icon: Github,
    color: "hover:text-white"
  },
  { 
    href: "https://linkedin.com/in/ahmed-elseginy", 
    label: "LinkedIn", 
    icon: Linkedin,
    color: "hover:text-blue-400"
  },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const handleScrollChange = useCallback((latest: number) => {
    setScrolled(latest > 50);
  }, []);

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-4 py-2 mt-2 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-lg sm:text-xl font-bold text-yellow-400 shiny-text flex-shrink-0"
        >
          Le Petit Prince
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link 
                  href={link.href} 
                  className="px-3 py-1.5 text-sm text-white/80 hover:text-yellow-400 transition-all duration-300 rounded-full hover:bg-yellow-400/10 relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-yellow-400/5 rounded-full opacity-0 group-hover:opacity-100"
                    layoutId="nav-hover"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </Link>
              </motion.div>
            );
          })}
          
          {/* Desktop Social Links */}
          <div className="flex items-center gap-1 ml-3 pl-3 border-l border-white/10">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (navLinks.length + index), duration: 0.5 }}
                >
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-2 text-white/80 ${social.color} transition-all duration-300 rounded-full hover:bg-yellow-400/10 relative group`}
                    aria-label={social.label}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-yellow-400/5 rounded-full opacity-0 group-hover:opacity-100"
                      layoutId={`social-hover-${social.label}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-end items-center gap-1 sm:gap-2 text-xs overflow-x-auto max-w-[60%]">
          {navLinks.slice(0, 4).map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Link 
                  href={link.href} 
                  className="flex flex-col items-center gap-1 text-gray-400 hover:text-yellow-400 transition-colors group p-1"
                >
                  <motion.div 
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>
                  <span className="text-[8px] sm:text-[9px] font-medium hidden sm:block">
                    {link.label.split(' ')[0]}
                  </span>
                </Link>
              </motion.div>
            );
          })}
          
          {/* Contact Link for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link 
              href="#contact" 
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-yellow-400 transition-colors group p-1"
            >
              <motion.div 
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                whileTap={{ scale: 0.95 }}
              >
                <Mails className="w-full h-full" />
              </motion.div>
              <span className="text-[8px] sm:text-[9px] font-medium hidden sm:block">
                Contact
              </span>
            </Link>
          </motion.div>
          
          {/* Mobile Social Links */}
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (5 + index), duration: 0.5 }}
                className="flex-shrink-0"
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-1 text-gray-400 ${social.color} transition-colors group p-1`}
                  aria-label={social.label}
                >
                  <motion.div 
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>
                  <span className="text-[8px] sm:text-[9px] font-medium hidden sm:block">
                    {social.label}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
