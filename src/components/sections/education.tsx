"use client";

import { GraduationCap, BookOpen, Award, Users, Code, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    date: "Nov 2024 - Present",
    status: "Current Journey",
    title: "B.S.E. in Information and Communications Technology (ICT)",
    institution: "New Cairo Technological University (NCTU)",
    subtitle: "Faculty of Industrial and Energy Technology",
    story: "Here I am currently exploring the vast universe of technology, learning new constellations of knowledge each day while building modern software solutions.",
    description: [
      "Advanced coursework in software engineering and system design",
      "Hands-on projects in modern development frameworks and methodologies",
      "Focus on scalable system architecture and enterprise solutions",
    ],
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    achievements: ["ICT Student", "Software Engineering", "System Design"]
  },
  {
    date: "Oct 2020 - Jun 2024",
    status: "Completed",
    title: "High School Diploma, Computer Programming (Grade: 95.67%)",
    institution: "Misr International Computer & AI Academy | MICA",
    subtitle: "The Academy of First Steps",
    story: "This was where my journey began - a small planet where I first learned to speak the language of machines and discovered my passion for Java development.",
    description: [
      "Mastered Java programming fundamentals with distinction",
      "Explored Oracle Database development and PL/SQL programming", 
      "Participated in coding competitions and hackathons",
    ],
    icon: <Code className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600",
    achievements: ["Java Foundation", "Oracle Database", "High Distinction"]
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
      {/* Background planets, stars, and clouds removed */}

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
                  <div className="relative border border-slate-700 rounded-lg p-6 bg-slate-900/30 ml-6 md:ml-0">
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
