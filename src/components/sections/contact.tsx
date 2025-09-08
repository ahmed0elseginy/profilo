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
      value: "(+02) 01000 432 923",
      href: "tel:+201000432923"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="relative w-full py-20 md:py-32 px-6 lg:px-8 bg-background overflow-hidden section-wave-divider">
      {/* Background planets, clouds, and stars removed */}

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
            <div className="relative border border-slate-700 rounded-lg p-8 bg-slate-900/30">

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
              className="relative border border-slate-700 rounded-lg p-6 bg-slate-900/30"
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
            <div className="relative border border-slate-700 rounded-lg p-8 bg-slate-900/30">

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
