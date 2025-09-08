"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mx-auto mb-6"></div>
        </motion.div>

        {/* Full Tech Stack (grouped tiles) */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-10">
              {/* Frontend */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {frontendSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors">
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
                <h3 className="text-2xl font-semibold mb-4 text-primary">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {backendSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors">
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
                <h3 className="text-2xl font-semibold mb-4 text-primary">Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {toolsSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors">
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
                <h3 className="text-2xl font-semibold mb-4 text-primary">Cloud & DevOps</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {cloudDevOpsSkills.map((tech) => (
                    <div key={tech.name} className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors">
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