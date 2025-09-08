"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/ahmed-elseginy",
      label: "GitHub",
      icon: Github,
      color: "hover:text-primary"
    },
    {
      href: "https://linkedin.com/in/ahmed-elseginy",
      label: "LinkedIn", 
      icon: Linkedin,
      color: "hover:text-secondary"
    },
    {
      href: "mailto:ahmed0elseginy@gmail.com",
      label: "Email",
      icon: Mail,
      color: "hover:text-primary"
    }
  ];

  return (
    <footer className="relative w-full py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-black/50 backdrop-blur-sm border-t border-primary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          {/* Left section - Name and title */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Ahmed El-Seginy
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-400">
              Java Backend Developer • Cairo, Egypt
            </p>
          </motion.div>

          {/* Right section - Social links and copyright */}
          <motion.div 
            className="flex flex-col items-center md:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 inline-flex items-center justify-center border border-gray-600 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-xs md:text-sm text-gray-500">
              <p className="flex items-center justify-center md:justify-end gap-1 flex-wrap">
                © {currentYear} Ahmed El-Seginy. Built with 
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary fill-current mx-1" />
                and modern technologies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom decoration line */}
        <motion.div 
          className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-primary/10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-xs text-gray-600 italic">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
