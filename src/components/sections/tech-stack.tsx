"use client";

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Server, ChevronDown, Database, Settings } from 'lucide-react';
import Image from 'next/image';

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
] as const;

const skillsData = [
  {
    title: "Backend Development",
    icon: Server,
    description: [
      "Building scalable and maintainable backend systems using Java & Spring Boot",
      "Designing and implementing secure RESTful APIs with Spring Security",
      "Utilizing Spring Data JPA and Hibernate for efficient data persistence"
    ]
  },
  {
    title: "Databases & Data Management",
    icon: Database,
    description: [
      "Proficient in MySQL and Oracle for relational database management",
      "Using Liquibase for version-controlled database schema migrations",
      "Writing complex SQL and PL/SQL queries for data manipulation and retrieval"
    ]
  },
  {
    title: "Software Architecture",
    icon: Settings,
    description: [
      "Applying OOP, SOLID principles, and design patterns for clean code",
      "Implementing Event-Driven Architecture with ActiveMQ",
      "Experience with API design and documentation using Swagger/OpenAPI"
    ]
  }
] as const;

export function TechStackSection() {
  const [openSkill, setOpenSkill] = useState<number | null>(null);
  
  // Double the tech stack for seamless scrolling
  const extendedTechStack = useMemo(() => [...techStack, ...techStack], []);

  const toggleSkill = useCallback((index: number) => {
    setOpenSkill(prevOpen => prevOpen === index ? null : index);
  }, []);

  return (
    <section id="tech-stack" className="relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 section-wave-divider">
      <div className="max-w-7xl mx-auto">
        
        {/* Tech Stack Scrolling Section */}
        <div className="relative overflow-x-hidden py-6 md:py-8 mb-12 md:mb-16">
          <motion.h2 
            className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 shiny-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Full Tech Stack
          </motion.h2>
          
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 md:gap-12 lg:gap-20 w-max">
            {extendedTechStack.map((tech, index) => (
              <motion.div 
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2 group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % techStack.length) * 0.02, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-6 h-6 md:w-7 md:h-7">
                  <Image 
                    src={`/svg/${tech.icon}`}
                    alt={`${tech.name} icon`}
                    fill
                    className="object-contain transition-transform group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    sizes="(max-width: 768px) 24px, 28px"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm md:text-base lg:text-lg font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What I Do & About Me Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* About Me Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-6 md:p-8 rounded-2xl shadow-2xl">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 md:w-6 md:h-6 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 md:w-6 md:h-6 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>
              
              {/* Inner glow effect */}
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/5 to-amber-400/10 rounded-xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white shiny-text">
                    About Me
                  </h3>
                </div>
                
                <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                  <p>
                    Hello! I'm Ahmed Elseginy, a passionate developer exploring the vast universe of technology. 
                    Like The Little Prince on his cosmic journey, I travel through different planets of programming languages and frameworks.
                  </p>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                    <blockquote className="pl-4 text-gray-400 italic text-xs md:text-sm">
                      "It is the time you have wasted for your rose that makes your rose so important." - Just like how every line of code I write makes me a better developer.
                    </blockquote>
                  </div>
                  
                  <p>
                    I specialize in building robust backend systems, analyzing data to uncover hidden insights, 
                    and deploying machine learning models that solve real-world problems. Every project is a new adventure!
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Problem Solver", "Continuous Learner", "Team Player"].map((trait) => (
                      <span 
                        key={trait}
                        className="px-2 md:px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full"
                      >
                        {trait}
                      </span>
                    ))}
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
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-400"></div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white shiny-text">
                What I Do
              </h3>
            </div>
            
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  className="bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleSkill(index)}
                    className="w-full p-4 md:p-6 flex items-center justify-between text-left group hover:bg-yellow-400/5 transition-colors"
                    aria-expanded={openSkill === index ? "true" : "false"}
                    aria-controls={`skill-content-${index}`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                        <Icon className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {skill.title}
                      </h4>
                    </div>
                    <motion.div
                      animate={{ rotate: openSkill === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    id={`skill-content-${index}`}
                    initial={false}
                    animate={{ 
                      height: openSkill === index ? "auto" : 0,
                      opacity: openSkill === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 space-y-2 md:space-y-3">
                      {skill.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
} 