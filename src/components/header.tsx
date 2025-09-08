"use client";

import { useState, useCallback } from 'react';
import Link from "next/link";
import { Briefcase, GraduationCap, Mails, FolderGit2, Zap, Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "#home", label: "Overview", icon: Zap },
  { href: "#about", label: "About", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: FolderGit2 },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mails },
] as const;


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const handleScrollChange = useCallback((latest: number) => {
    setScrolled(latest > 50);
  }, []);

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-primary/30 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-center items-center">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-primary hover:bg-transparent transition-all duration-300 relative"
                >
                  <Link href={link.href} className="flex items-center gap-2 relative group">
                    <Icon className="w-4 h-4" />
                    {link.label}
                    {link.href === "#home" && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                    )}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
          
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-primary/10"
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-primary/30">
              <SheetHeader>
                <SheetTitle className="text-primary text-left">Navigation</SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.href}
                        asChild
                        variant="ghost"
                        className="w-full justify-start text-white hover:text-primary hover:bg-primary/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href={link.href} className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          {link.label}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
