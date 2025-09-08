"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Heart, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmed0elseginy@gmail.com",
      href: "mailto:ahmed0elseginy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+02) 01000 432 923",
      href: "tel:+201000432923"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's connect and discuss 
            how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-black/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-black/30 border border-primary/10 hover:border-primary/30 hover:bg-black/50 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-white hover:text-primary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-black/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
                  <p className="text-gray-400 text-sm">
                    I'm always excited to discuss new opportunities and collaborate on interesting projects.
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:ahmed0elseginy@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                  <Send className="w-5 h-5 text-primary" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg italic max-w-2xl mx-auto mb-4">
            "Great things in business are never done by one person. They're done by a team of people."
          </p>
          <p className="text-primary font-medium">
            Let's build something amazing together ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
