"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Heart, Star } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ahmed0elseginy@gmail.com",
      href: "mailto:ahmed0elseginy@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+20 101 407 8842",
      href: "tel:+201014078842"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Giza, Egypt",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="relative w-full py-20 md:py-32 px-6 lg:px-8 bg-background overflow-hidden section-wave-divider">
      {/* Gentle floating rose-inspired elements */}
      <motion.div 
        className="absolute top-24 right-16 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-12"
        animate={{ 
          rotate: 360,
          y: [-6, 8, -6],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Floating heart-shaped cloud */}
      <motion.div 
        className="absolute bottom-32 left-12 w-20 h-12 bg-gradient-to-r from-red-200/8 to-pink-200/8 rounded-full blur-sm"
        animate={{ 
          x: [0, 25, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Constellation of gentle stars */}
      <motion.div 
        className="absolute top-16 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-32 left-1/3 w-3 h-3 bg-yellow-300 rounded-full"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-40 right-1/3 w-2 h-2 bg-yellow-500 rounded-full"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Dreamy planet */}
      <motion.div 
        className="absolute top-1/2 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-10"
        animate={{ 
          rotate: -360,
          x: [-5, 15, -5]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shiny-text">
            Let's Begin a New Chapter
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            "One sees clearly only with the heart. What is essential is invisible to the eye."<br/>
            Like the Little Prince, I believe in meaningful connections. Reach out and let's create something wonderful together.
          </p>
          
          {/* Quote from Little Prince */}
          <motion.div
            className="flex items-center justify-center gap-2 text-yellow-400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-5 h-5" />
            <span className="italic">Ready to tame a new friendship?</span>
            <Heart className="w-5 h-5" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                Find Me in the Universe
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 border border-yellow-400/10 hover:border-yellow-400/30 hover:bg-slate-700/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform shadow-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-white hover:text-yellow-400 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Inspirational quote */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-yellow-400/30 p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Decorative glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5 rounded-2xl"></div>
              <blockquote className="relative text-center">
                <p className="text-gray-300 italic mb-4">
                  "If you tame me, then we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world."
                </p>
                <footer className="text-sm text-yellow-400 font-medium">— The Little Prince</footer>
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              {/* Decorative corner elements for form card */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-3 border-t-3 border-yellow-400 rounded-tl-xl"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-3 border-t-3 border-yellow-400 rounded-tr-xl"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-3 border-b-3 border-yellow-400 rounded-bl-xl"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-3 border-b-3 border-yellow-400 rounded-br-xl"></div>
              
              {/* Inner glow effect */}
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/5 to-amber-400/10 rounded-xl pointer-events-none"></div>
              
              <div className="relative mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Send className="w-6 h-6 text-yellow-400" />
                  Send a Message
                </h3>
                <p className="text-gray-300">
                  Every great journey begins with a simple hello. What's yours?
                </p>
              </div>
              
              <div className="relative">
              <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final quote */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-yellow-400/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg italic max-w-2xl mx-auto">
            "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye."
          </p>
          <p className="text-yellow-400 mt-4 font-medium">
            Let's build something meaningful together ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
