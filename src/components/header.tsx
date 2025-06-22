"use client";

import { useState } from 'react';
import Link from "next/link";
import { Home, Briefcase, GraduationCap, Mails, FolderGit2, Zap, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { href: "#tech-stack", label: "Tech Stack", icon: <Zap /> },
    { href: "#projects", label: "Projects", icon: <FolderGit2 /> },
    { href: "#education", label: "Education", icon: <GraduationCap /> },
    { href: "#experience", label: "Experience", icon: <Briefcase /> },
    { href: "#contact", label: "Contact", icon: <Mails /> },
  ];

  const socialLinks = [
    { 
      href: "https://github.com/ahmed-elseginy", 
      label: "GitHub", 
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-white"
    },
    { 
      href: "https://linkedin.com/in/ahmed-elseginy", 
      label: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-400"
    },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-4 py-2 mt-2 flex justify-between items-center transition-all duration-300">
        <Link href="#home" className="text-xl font-bold text-yellow-400 shiny-text">
          Le Petit Prince
        </Link>
        
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
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
          ))}
          
          {/* Social Links for Desktop */}
          <div className="flex items-center gap-1 ml-3 pl-3 border-l border-white/10">
            {socialLinks.map((social, index) => (
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
                    {social.icon}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-yellow-400/5 rounded-full opacity-0 group-hover:opacity-100"
                    layoutId={`social-hover-${social.label}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Nav */}
        <div className="lg:hidden flex w-full justify-end items-center gap-2 text-xs">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link 
                href={link.href} 
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-yellow-400 transition-colors group"
              >
                <motion.div 
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.div>
                <span className="text-[9px] font-medium">{link.label}</span>
              </Link>
            </motion.div>
          ))}
          
          {/* Social Links for Mobile */}
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (navLinks.length + index), duration: 0.5 }}
            >
              <a 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-1 text-gray-400 ${social.color} transition-colors group`}
                aria-label={social.label}
              >
                <motion.div 
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.div>
                <span className="text-[9px] font-medium">{social.label}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
