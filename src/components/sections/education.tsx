"use client";

import { GraduationCap, BookOpen, Award, Users, Code, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    date: "Nov 2024 - Jun 2028",
    status: "Present Journey",
    title: "Bachelor in Information and Communications Technology (ICT)",
    institution: "New Cairo Technological University (NCTU)",
    subtitle: "The University Planet",
    story: "Here I am currently exploring the vast universe of technology, learning new constellations of knowledge each day.",
    description: [
      "Leading the Google Developer Groups Club, bringing together fellow explorers of code",
      "Competed in Be Al-Masry Tech Hackathon 2024, where ideas collide like meteors",
    ],
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    achievements: ["Club Organizer", "Hackathon Participant"]
  },
  {
    date: "Oct 2020 - Jun 2024",
    status: "Completed",
    title: "High School Diploma, Computer Programming",
    institution: "Misr International Computer & AI Academy | MICA",
    subtitle: "The Academy of First Steps",
    story: "This was where my journey began - a small planet where I first learned to speak the language of machines.",
    description: [
      "Mastered Java programming like learning to tend to digital roses",
      "Explored Oracle Database realms and Arduino landscapes",
      "Participated in coding competitions, each one a new adventure",
    ],
    icon: <Code className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600",
    achievements: ["Java Foundation", "Database Explorer", "Competition Veteran"]
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
    x: -60,
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 25,
      duration: 0.8
    }
  }
};

const timelineVariants = {
  hidden: { height: 0 },
  visible: { 
    height: "calc(100% - 4rem)",
    transition: { 
      duration: 2, 
      ease: "easeInOut" as const,
      delay: 0.5
    }
  }
};

export function EducationSection() {
  return (
    <section id="education" className="relative w-full py-20 md:py-32 px-6 lg:px-8 bg-background overflow-hidden section-wave-divider">
      {/* Academic constellation - Books floating like planets */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-20"
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [-8, 12, -8]
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Floating book */}
        <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg opacity-60 shadow-lg transform rotate-12" />
        <div className="absolute top-1 left-1 w-14 h-2 bg-amber-300/80 rounded-sm" />
        <div className="absolute top-4 left-1 w-14 h-2 bg-amber-300/60 rounded-sm" />
      </motion.div>
      
      {/* University planet */}
      <motion.div 
        className="absolute bottom-28 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-25"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* University ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-6 border-2 border-indigo-300/30 rounded-full rotate-45" />
      </motion.div>
      
      {/* Floating graduation cap */}
      <motion.div 
        className="absolute top-1/2 right-12 w-12 h-8"
        animate={{ 
          rotate: [0, 5, -5, 0],
          x: [-5, 10, -5],
          y: [-3, 7, -3]
        }}
        transition={{ 
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-full h-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-sm opacity-70" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full" />
        <div className="absolute top-2 right-0 w-2 h-6 bg-yellow-400 opacity-80 transform rotate-12" />
      </motion.div>
      
      {/* Knowledge orb */}
      <motion.div 
        className="absolute top-1/3 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-20"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Animated stars constellation */}
      <motion.div 
        className="absolute top-24 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-1/3 w-3 h-3 bg-yellow-300 rounded-full"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-40 left-1/3 w-2 h-2 bg-yellow-500 rounded-full"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Floating cloud */}
      <motion.div 
        className="absolute top-1/3 left-8 w-24 h-12 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-sm"
        animate={{ 
          x: [0, 30, 0],
          y: [-5, 5, -5]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Learning Across Worlds
        </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Each school is like a planet with its own atmosphere of knowledge. Here's my journey through the educational cosmos..."
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline with glow effect */}
          <motion.div 
            className="absolute left-8 top-8 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden md:block shadow-lg"
            style={{
              boxShadow: "0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--secondary) / 0.3)"
            }}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          
          {/* Timeline dots for extra visual interest */}
          <motion.div 
            className="absolute left-6 top-20 w-5 h-5 bg-primary rounded-full hidden md:block opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 2, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute left-6 bottom-20 w-5 h-5 bg-secondary rounded-full hidden md:block opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="md:pl-20 relative">
                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-4 top-6 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl border-2 border-yellow-400/50 z-10">
                    <div className="text-slate-900">
                      {edu.icon}
                </div>
                  </div>

                  {/* Content card */}
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ml-6 md:ml-0">
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
                              {edu.status}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">
                              {edu.date}
                            </span>
                          </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {edu.title}
                          </h4>
                        <p className="text-yellow-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                        <p className="text-sm text-gray-400">
                            {edu.subtitle}
                          </p>
                      </div>

                      {/* Quote */}
                      <div className="relative mb-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                        <blockquote className="pl-4 text-gray-400 italic text-sm">
                        "{edu.story}"
                      </blockquote>
                      </div>

                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="text-sm text-amber-400 font-medium">Key Highlights</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.slice(0, 3).map((achievement, i) => (
                              <span 
                            key={i}
                                className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full"
                          >
                                {achievement}
                              </span>
                        ))}
                      </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            "Education is not just about collecting certificates - it's about collecting wisdom from every world you visit..."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
