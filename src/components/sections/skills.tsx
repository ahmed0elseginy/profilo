"use client";

import { motion } from "framer-motion";
import { Code, Database, Shield, Zap, Cloud, GitBranch, Globe, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Universe",
    subtitle: "The Core of My Planet",
    description: "In the depths of my planet lies the powerful core that drives everything",
    icon: <Server className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Java", level: 90, story: "My native language, spoken fluently across all planets" },
      { name: "Spring Boot", level: 85, story: "The magical framework that brings applications to life" },
      { name: "Spring Security", level: 80, story: "Guardian of the digital realms, protecting against cosmic threats" },
      { name: "RESTful APIs", level: 85, story: "Bridges that connect distant worlds" },
      { name: "MySQL", level: 75, story: "The vast library where all knowledge is stored" },
      { name: "Oracle Database", level: 70, story: "Ancient wisdom keeper of structured data" }
    ]
  },
  {
    title: "Development Tools",
    subtitle: "My Trusty Companions",
    description: "Every explorer needs the right tools for their journey",
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Git & GitHub", level: 85, story: "My time machine and collaboration portal" },
      { name: "Maven", level: 75, story: "The architect that builds digital castles" },
      { name: "Docker", level: 70, story: "Magical containers that carry applications across space" },
      { name: "Liquibase", level: 75, story: "The chronicler of database evolution" },
      { name: "Swagger/OpenAPI", level: 80, story: "The translator that speaks to all systems" }
    ]
  },
  {
    title: "Frontend Cosmos",
    subtitle: "The Face of Digital Worlds",
    description: "Creating beautiful interfaces that users love to explore",
    icon: <Globe className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "HTML & CSS", level: 80, story: "The foundation stones of the digital universe" },
      { name: "JavaScript", level: 75, story: "The spell that brings static pages to life" },
      { name: "Thymeleaf", level: 70, story: "The artist that paints dynamic web pages" },
      { name: "React", level: 65, story: "Modern magic for building reactive interfaces" }
    ]
  },
  {
    title: "Architecture & Patterns",
    subtitle: "The Art of System Design",
    description: "Crafting elegant solutions that stand the test of time",
    icon: <Shield className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "SOLID Principles", level: 85, story: "The sacred laws that guide clean code" },
      { name: "Design Patterns", level: 80, story: "Time-tested blueprints for common challenges" },
      { name: "Clean Architecture", level: 80, story: "The art of building maintainable systems" },
      { name: "Event-Driven Architecture", level: 75, story: "Systems that communicate like celestial bodies" },
      { name: "Microservices", level: 70, story: "Independent worlds working in harmony" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-6 lg:px-8 bg-background">
      {/* Floating elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-15 blur-3xl floating-element" />
      <div className="absolute bottom-20 left-16 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full opacity-10 blur-3xl floating-element" />
      
      {/* Constellation of stars */}
      <div className="absolute top-16 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 floating-element animate-twinkle" />
      <div className="absolute top-32 right-1/3 w-3 h-3 bg-yellow-300 rounded-full opacity-40 floating-element animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-yellow-500 rounded-full opacity-50 floating-element animate-twinkle" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-yellow-200 rounded-full opacity-30 floating-element animate-twinkle" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shiny-text">
            My Technical Constellation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Each skill is like a star in my constellation - some shine brighter than others, but together they form the unique pattern of my expertise..."
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="story-card p-8 rounded-3xl h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-primary opacity-80 font-medium">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: skillIndex * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        {/* Skill story - shows on hover */}
                        <motion.p 
                          className="text-xs text-muted-foreground/70 italic mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                        >
                          "{skill.story}"
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
            "Like the Little Prince learning about different planets, I continue to explore new technologies and expand my constellation of skills..."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
