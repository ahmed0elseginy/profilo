"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, Code, Database, Shield, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Backend – Social Media App",
    subtitle: "The Planet of Connections",
    description: "On this planet, I discovered the secret of bringing people together through code. Built with Java and Spring Boot, I created a universe where souls can connect across the digital void.",
    story: "Here I learned that security is like trust - it must be earned and carefully protected.",
    tags: ["Java", "Spring Boot", "Spring Security", "ActiveMQ", "MySQL", "Swagger"],
    githubUrl: "#",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Simple E-commerce Platform",
    subtitle: "The Merchant's Asteroid",
    description: "A small world where commerce flourishes. I built this marketplace using Spring Boot and MySQL, where every transaction tells a story of trust and exchange.",
    story: "What makes this platform special is the time I devoted to making each interaction meaningful.",
    tags: ["Spring Boot", "MySQL", "Thymeleaf"],
    githubUrl: "#",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "User-Management-Backend",
    subtitle: "The Kingdom of Access",
    description: "In this realm, I learned that managing users is like tending to a garden - each one unique, each one requiring special care and attention through RESTful APIs.",
    story: "The layered architecture here reminds me of the layers of understanding we build in relationships.",
    tags: ["Java", "REST", "OpenAPI", "Liquibase"],
    githubUrl: "#",
    icon: <Shield className="w-6 h-6" />,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "To-Do-List-Backend",
    subtitle: "The Organizer's Star",
    description: "On this tiny star, I discovered that the most important tasks are often the simplest ones. Clean architecture and modular code became my guiding principles.",
    story: "Like the Little Prince tending to his rose, I tended to each line of code with care.",
    tags: ["Java", "CRUD", "Clean Architecture"],
    githubUrl: "#",
    icon: <Code className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
    rotateX: 10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 25,
      duration: 0.8
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 lg:px-8 overflow-hidden section-wave-divider">
      {/* Cosmic Background with Planets */}
      
      {/* Large Saturn-like planet with rings */}
      <motion.div 
        className="absolute top-20 right-16 w-32 h-32"
        animate={{ 
          rotate: 360,
          y: [-8, 12, -8]
        }}
        transition={{ 
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Planet body */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600 opacity-80 shadow-2xl" />
        {/* Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-8 border-4 border-amber-300/40 rounded-full rotate-12" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-6 border-2 border-amber-400/30 rounded-full rotate-12" />
      </motion.div>
      
      {/* Smaller blue planet */}
      <motion.div 
        className="absolute bottom-24 left-12 w-20 h-20"
        animate={{ 
          rotate: -360,
          x: [-5, 10, -5]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 opacity-70 shadow-xl" />
        {/* Thin ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-4 border-2 border-cyan-300/30 rounded-full -rotate-45" />
      </motion.div>
      
      {/* Small green planet */}
      <motion.div 
        className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 opacity-60"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Cosmic dust and nebula */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-40 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Star field constellation */}
      <motion.div 
        className="absolute top-16 left-1/4 w-2 h-2 bg-white rounded-full"
        animate={{ 
          scale: [1, 1.5, 1], 
          opacity: [0.6, 1, 0.6],
          boxShadow: ["0 0 5px rgba(255,255,255,0.5)", "0 0 15px rgba(255,255,255,0.8)", "0 0 5px rgba(255,255,255,0.5)"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-32 right-1/3 w-3 h-3 bg-yellow-200 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.4, 0.9, 0.4],
          boxShadow: ["0 0 3px rgba(255,255,200,0.5)", "0 0 10px rgba(255,255,200,0.8)", "0 0 3px rgba(255,255,200,0.5)"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-200 rounded-full"
        animate={{ 
          scale: [1, 1.4, 1], 
          opacity: [0.5, 1, 0.5],
          boxShadow: ["0 0 4px rgba(200,220,255,0.5)", "0 0 12px rgba(200,220,255,0.8)", "0 0 4px rgba(200,220,255,0.5)"]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-3/4 right-1/5 w-2 h-2 bg-pink-200 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.8, 0.3],
          boxShadow: ["0 0 3px rgba(255,200,220,0.5)", "0 0 8px rgba(255,200,220,0.7)", "0 0 3px rgba(255,200,220,0.5)"]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div 
        className="absolute top-2/3 left-1/5 w-1 h-1 bg-white rounded-full"
        animate={{ 
          scale: [1, 2, 1], 
          opacity: [0.4, 1, 0.4],
          boxShadow: ["0 0 2px rgba(255,255,255,0.5)", "0 0 6px rgba(255,255,255,0.8)", "0 0 2px rgba(255,255,255,0.5)"]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      {/* Additional small stars for depth */}
      <div className="absolute top-40 left-1/6 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-300/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/5 right-1/6 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/5 left-1/3 w-1 h-1 bg-pink-300/50 rounded-full animate-pulse" style={{ animationDelay: '6s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 section-entrance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 shiny-text">
            My Journey Through Code
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "I have visited many planets in my coding journey. Each project taught me something new about the universe of software development..."
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Link 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group h-full"
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 h-full">
                  {/* Decorative corner elements */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/5 to-amber-400/10 rounded-xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <span className="text-xs text-yellow-400 font-medium uppercase tracking-wider">
                            {project.subtitle}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">
                          Backend Project
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {project.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Quote */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                        <blockquote className="pl-4 text-gray-400 italic text-sm">
                        "{project.story}"
                      </blockquote>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-sm text-amber-400 font-medium">Technologies Used</span>
                      </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                          <span 
                          key={tag} 
                            className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-yellow-400/20 rounded-full hover:bg-yellow-400/10 hover:border-yellow-400/40 transition-all duration-300"
                        >
                          {tag}
                          </span>
                      ))}
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <span className="text-sm font-medium">View Project</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
            "All these planets I've visited have shaped me into the developer I am today. Each line of code is a star in my constellation of learning..."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
