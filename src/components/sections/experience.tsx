"use client";

import { Briefcase, Rocket, BookOpen, School, Zap, Building, Users, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "Sep 2024 - Mar 2025",
    status: "Current",
    title: "Java with Spring Mentorship",
    company: "Zag Systems Company",
    location: "Remote",
    story: "Learning scalable systems and secure architectures in the corporate galaxy.",
    achievements: ["System Architecture", "Security Expert", "Team Collaboration"],
    type: "Mentorship",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    date: "Jun 2024 - Feb 2025",
    status: "Self-Learning",
    title: "Online Courses & Development",
    company: "The Digital Observatory",
    location: "Part-time",
    story: "Building my knowledge library and mastering modern development practices.",
    achievements: ["Spring Framework", "API Design", "Clean Architecture"],
    type: "Education",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    date: "Oct 2022 - Jun 2024",
    status: "Foundation",
    title: "Student Intern",
    company: "MICA – Misr International Computer & AI",
    location: "Giza, Egypt",
    story: "My first steps into programming, competitions, and hands-on development.",
    achievements: ["Java Foundation", "Hardware Integration", "Problem Solving"],
    type: "Internship",
    icon: <School className="w-6 h-6" />
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1
  }
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-20 md:py-32 px-6 lg:px-8 bg-background overflow-hidden section-wave-divider">
      {/* Floating airplane inspired by Little Prince */}
      <motion.div 
        className="absolute top-20 right-12 w-16 h-8"
        animate={{ 
          x: [-100, 1400],
          y: [-5, 5, -5]
        }}
        transition={{ 
          x: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-60 transform rotate-12" />
      </motion.div>

      {/* Floating planets */}
      <motion.div 
        className="absolute top-32 left-16 w-18 h-18 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-18"
        animate={{ 
          rotate: 360,
          y: [-8, 12, -8]
        }}
        transition={{ 
          rotate: { duration: 28, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-24 right-20 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-15"
        animate={{ 
          rotate: -360,
          x: [-10, 10, -10]
        }}
        transition={{ 
          rotate: { duration: 22, repeat: Infinity, ease: "linear" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Dreamy cloud */}
      <motion.div 
        className="absolute top-1/2 left-4 w-20 h-10 bg-gradient-to-r from-blue-100/8 to-purple-100/8 rounded-full blur-sm"
        animate={{ 
          x: [0, 40, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Twinkling stars */}
      <motion.div 
        className="absolute top-28 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{ 
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-44 left-1/3 w-3 h-3 bg-yellow-300 rounded-full"
        animate={{ 
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div 
        className="absolute top-2/3 right-1/5 w-2 h-2 bg-yellow-500 rounded-full"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
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
          <h3 className="text-4xl md:text-6xl font-bold mb-6 shiny-text">
            Professional Odyssey
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Every workplace is a new planet with its own culture and challenges. Here's my journey through the professional cosmos..."
          </p>
        </motion.div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-400 rounded-full hidden md:block"></div>

          <motion.div 
            className="space-y-16 md:space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => {
              // Alternate pattern: Left, Right, Left, Right...
              const isRight = index % 2 === 1;
              
              return (
                <motion.div 
                  key={index} 
                  className={`flex items-center ${isRight ? 'md:justify-end' : 'md:justify-start'}`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-5/12 ${isRight ? 'md:mr-8' : 'md:ml-8'}`}>
                    {/* Timeline node */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl border-2 border-yellow-400/50 z-10 hidden md:flex`}>
                      <div className="text-slate-900">
                        {exp.icon}
                      </div>
                    </div>

                    {/* Mobile timeline node */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl border-2 border-yellow-400/50 z-10 md:hidden mb-4 mx-auto">
                      <div className="text-slate-900 text-sm">
                        {exp.icon}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                      {/* Decorative corner elements */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>
                      
                      {/* Inner glow effect */}
                      <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/5 to-amber-400/10 rounded-xl pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                              <span className="text-xs text-yellow-400 font-medium uppercase tracking-wider">
                                {exp.status}
                              </span>
                            </div>
                            <span className="text-xs text-gray-400">
                              {exp.date}
                            </span>
                          </div>
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h4>
                          <p className="text-yellow-400 font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-400">
                            {exp.location}
                          </p>
                        </div>

                        {/* Quote */}
                        <div className="relative mb-4">
                          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                          <blockquote className="pl-4 text-gray-400 italic text-sm">
                            "{exp.story}"
                          </blockquote>
                        </div>

                        {/* Key achievements */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="text-sm text-amber-400 font-medium">Key Achievements</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.achievements.slice(0, 3).map((achievement, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
            "What I have learned in my travels is that work is not just about completing tasks - it's about growing, learning, and making connections that span across the universe..."
          </p>
        </motion.div>
      </div>
    </section>
  );
}