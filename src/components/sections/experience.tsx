"use client";

import { Briefcase, Rocket, BookOpen, School, Zap, Building, Users, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "May 2025 - Present",
    status: "Current",
    title: "Software Engineer Intern",
    company: "ZagSystems",
    location: "Remote",
    story: "Designing and implementing workflow engine modules to support business processes while learning scalable system architecture.",
    achievements: ["Workflow Engine Development", "CI/CD with Jenkins", "System Architecture"],
    type: "Internship",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    date: "Sep 2024 - Aug 2025",
    status: "Completed",
    title: "Java with Spring Mentorship",
    company: "ZagSystems",
    location: "Remote",
    story: "Gained hands-on mentorship in Spring Boot, Microservices, and Event-Driven Architecture while building real-world applications.",
    achievements: ["Spring Boot Mastery", "RESTful APIs", "Social Media Platform"],
    type: "Mentorship",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    date: "Jun 2024 - Jan 2025",
    status: "Completed",
    title: "Spring Boot Bootcamp",
    company: "Online Learning",
    location: "Remote",
    story: "Built sample applications with Spring Boot & MySQL, practicing JWT authentication and modular project structuring.",
    achievements: ["Spring Boot & MySQL", "JWT Authentication", "Clean Architecture"],
    type: "Education",
    icon: <BookOpen className="w-6 h-6" />
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
                    <div className="relative border border-slate-700 rounded-lg p-6 bg-slate-900/30">
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