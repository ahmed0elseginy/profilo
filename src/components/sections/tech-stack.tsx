"use client";

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Server, ChevronDown, Database, Settings } from 'lucide-react';
import Image from 'next/image';

const techStack = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Discord", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg" }
] as const;

const skillsData = [
  {
    title: "Backend Development",
    icon: Server,
    description: [
      "Building scalable and maintainable backend systems using Java & Spring Boot",
      "Designing and implementing secure RESTful APIs with Spring Security",
      "Utilizing Spring Data JPA and Hibernate for efficient data persistence",
      "Implementing workflow engines and business process automation"
    ]
  },
  {
    title: "Databases & Data Management",
    icon: Database,
    description: [
      "Proficient in MySQL, PostgreSQL, and Oracle for relational database management",
      "Using Liquibase for version-controlled database schema migrations",
      "Writing complex SQL and PL/SQL queries for data manipulation and retrieval",
      "Experience with database design and optimization"
    ]
  },
  {
    title: "Software Architecture",
    icon: Settings,
    description: [
      "Applying OOP, SOLID principles, and design patterns for clean code",
      "Implementing Event-Driven Architecture with RabbitMQ and ActiveMQ",
      "Experience with API design and documentation using Swagger/OpenAPI",
      "Microservices architecture and CI/CD pipeline management with Jenkins"
    ]
  }
] as const;

// Grouped skills for the Full Tech Stack section
const frontendSkills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
] as const;

const backendSkills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
] as const;

const toolsSkills = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Swagger", icon: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
  { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Discord", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg" },
] as const;

const cloudDevOpsSkills = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "RabbitMQ", icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
  { name: "ActiveMQ", icon: "https://activemq.apache.org/assets/img/activemq_logo_white_vertical.svg" },
  { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Liquibase", icon: "https://www.vectorlogo.zone/logos/liquibase/liquibase-icon.svg" },
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
                    Hello! I'm Ahmed El-Seginy, a passionate Java Software Developer with strong expertise in Spring Boot, RESTful APIs, and scalable backend systems. 
                    Like The Little Prince on his cosmic journey, I travel through different planets of programming languages and frameworks.
                  </p>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                    <blockquote className="pl-4 text-gray-400 italic text-xs md:text-sm">
                      "It is the time you have wasted for your rose that makes your rose so important." - Just like how every line of code I write makes me a better developer.
                    </blockquote>
                  </div>
                  
                  <p>
                    I specialize in building clean, maintainable code using modern Java development stacks. Currently pursuing a Bachelor's degree in ICT at New Cairo Technological University, with hands-on experience gained through mentorships, internships, and real-world projects.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Java Developer", "Spring Boot Expert", "Backend Architect"].map((trait) => (
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

        {/* Full Tech Stack (grouped tiles) */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
              {/* Frontend */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {frontendSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-slate-700 bg-slate-900/30 p-4 flex flex-col items-center gap-2">
                      <div className="relative w-9 h-9">
                        <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="36px" className="object-contain" />
                      </div>
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {backendSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-slate-700 bg-slate-900/30 p-4 flex flex-col items-center gap-2">
                      <div className="relative w-9 h-9">
                        <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="36px" className="object-contain" />
                      </div>
                      <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {toolsSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-slate-700 bg-slate-900/30 p-4 flex flex-col items-center gap-2">
                      <div className="relative w-9 h-9">
                        <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="36px" className="object-contain" />
                      </div>
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cloud & DevOps</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {cloudDevOpsSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-slate-700 bg-slate-900/30 p-4 flex flex-col items-center gap-2">
                      <div className="relative w-9 h-9">
                        <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="36px" className="object-contain" />
                      </div>
                      <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              {/* Empty space or can add content here later */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 