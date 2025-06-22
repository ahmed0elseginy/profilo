"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, ChevronDown, Database, Settings } from 'lucide-react';

const techStack = [
  { name: "Python", icon: "python.svg" },
  { name: "SQL", icon: "sql.svg" },
  { name: "JAX", icon: "jax.svg" },
  { name: "PyTorch", icon: "pytorch.svg" },
  { name: "TensorFlow", icon: "tensorflow.svg" },
  { name: "Keras", icon: "keras.svg" },
  { name: "Scikit-learn", icon: "scikit-learn.svg" },
  { name: "OpenCV", icon: "opencv.svg" },
  { name: "Kaggle", icon: "kaggle.svg" },
  { name: "Hadoop", icon: "hadoop.svg" },
  { name: "AWS", icon: "aws.svg" },
  { name: "Azure", icon: "azure.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Kubernetes", icon: "kubernetes.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "PowerBI", icon: "powerbi.svg" },
  { name: "Tableau", icon: "tableau.svg" },
  { name: "Matplotlib", icon: "matplotlib.svg" },
  { name: "Seaborn", icon: "seaborn.svg" },
  { name: "Plotly", icon: "plotly.svg" },
  { name: "Flask", icon: "flask.svg" },
  { name: "Git", icon: "git.svg" },
  { name: "GitHub", icon: "github.svg" },
  { name: "VSCode", icon: "vscode.svg" },
  { name: "Jupyter", icon: "jupyter.svg" },
  { name: "Colab", icon: "colab.svg" },
  { name: "Notion", icon: "notion.svg" },
  { name: "Obsidian", icon: "obsidian.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "Canva", icon: "canva.svg" },
  { name: "OBS", icon: "obs.svg" },
  { name: "Slack", icon: "slack.svg" },
  { name: "Discord", icon: "discord.svg" }
];

const skillsData = [
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: [
      "Building scalable and maintainable backend systems using Java & Spring Boot",
      "Designing and implementing secure RESTful APIs with Spring Security",
      "Utilizing Spring Data JPA and Hibernate for efficient data persistence"
    ]
  },
  {
    title: "Databases & Data Management",
    icon: <Database className="w-6 h-6" />,
    description: [
      "Proficient in MySQL and Oracle for relational database management",
      "Using Liquibase for version-controlled database schema migrations",
      "Writing complex SQL and PL/SQL queries for data manipulation and retrieval"
    ]
  },
  {
    title: "Software Architecture",
    icon: <Settings className="w-6 h-6" />,
    description: [
      "Applying OOP, SOLID principles, and design patterns for clean code",
      "Implementing Event-Driven Architecture with ActiveMQ",
      "Experience with API design and documentation using Swagger/OpenAPI"
    ]
  }
];

export function TechStackSection() {
  const [openSkill, setOpenSkill] = useState<number | null>(null);
  
  // Double the tech stack for seamless scrolling
  const extendedTechStack = [...techStack, ...techStack];

  const toggleSkill = (index: number) => {
    setOpenSkill(openSkill === index ? null : index);
  };

  return (
    <section id="tech-stack" className="relative w-full py-20 md:py-32 px-6 lg:px-8 section-wave-divider">
      <div className="max-w-7xl mx-auto">
        
        {/* Tech Stack Scrolling Section */}
        <div className="relative overflow-x-hidden py-8 mb-16">
          <motion.h2 
            className="text-center text-3xl md:text-4xl font-bold text-white mb-8 shiny-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Full Tech Stack
          </motion.h2>
          
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 md:gap-20 w-max">
            {extendedTechStack.map((tech, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % techStack.length) * 0.02, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src={`/svg/${tech.icon}`}
                  alt={tech.name.toLowerCase()}
                  className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  width="30" 
                  height="30" 
                  loading="lazy"
                />
                <span className="text-lg font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What I Do & About Me Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* About Me Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-8 rounded-2xl shadow-2xl">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>
              
              {/* Inner glow effect */}
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/5 to-amber-400/10 rounded-xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white shiny-text">
                    About Me
                  </h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hello! I'm Ahmed Elseginy, a passionate developer exploring the vast universe of technology. 
                    Like The Little Prince on his cosmic journey, I travel through different planets of programming languages and frameworks.
                  </p>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                    <blockquote className="pl-4 text-gray-400 italic text-sm">
                      "It is the time you have wasted for your rose that makes your rose so important." - Just like how every line of code I write makes me a better developer.
                    </blockquote>
                  </div>
                  
                  <p>
                    I specialize in building robust backend systems, analyzing data to uncover hidden insights, 
                    and deploying machine learning models that solve real-world problems. Every project is a new adventure!
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full">
                      Problem Solver
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full">
                      Continuous Learner
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full">
                      Team Player
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white shiny-text">
                What I Do
              </h3>
            </div>
            
            <div className="space-y-4">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="w-full group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300">
                    {/* Small decorative corners */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-yellow-400/50 rounded-tl-lg"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-yellow-400/50 rounded-tr-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-yellow-400/50 rounded-bl-lg"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-yellow-400/50 rounded-br-lg"></div>
                    
                    <div 
                      className="flex items-center gap-3 p-4 hover:bg-yellow-400/5 transition-colors relative z-10"
                      onClick={() => toggleSkill(index)}
                    >
                      <div className="text-yellow-400 transition-transform duration-300 group-hover:rotate-6">
                        {skill.icon}
                      </div>
                      <div className="flex items-center gap-2 flex-grow justify-between">
                        <span className="text-white text-lg font-medium">
                          {skill.title}
                        </span>
                        <motion.div
                          animate={{ rotate: openSkill === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openSkill === index ? "auto" : 0,
                        opacity: openSkill === index ? 1 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-4 pb-4">
                        <div className="space-y-2">
                          {skill.description.map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: openSkill === index ? 1 : 0,
                                x: openSkill === index ? 0 : -20
                              }}
                              transition={{ 
                                delay: openSkill === index ? itemIndex * 0.1 : 0,
                                duration: 0.3
                              }}
                            >
                              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 