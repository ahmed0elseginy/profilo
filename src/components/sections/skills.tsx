"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Grouped skills for the Full Tech Stack section
const frontendSkills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
] as const;

const backendSkills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "RabbitMQ", icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
  { name: "ActiveMQ", icon: "https://activemq.apache.org/assets/img/activemq_logo_white_vertical.svg" },
  { name: "Liquibase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/liquibase/liquibase-original.svg" },
  { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
] as const;

const toolsSkills = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Batch Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "JUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Swagger", icon: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
] as const;

const cloudDevOpsSkills = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
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

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm border border-primary/30 mb-8 p-1 rounded-lg">
              <TabsTrigger
                value="frontend"
                className="text-gray-200 font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 hover:text-white hover:bg-primary/10 transition-all duration-300"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="text-gray-200 font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 hover:text-white hover:bg-primary/10 transition-all duration-300"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="text-gray-200 font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 hover:text-white hover:bg-primary/10 transition-all duration-300"
              >
                Tools
              </TabsTrigger>
              <TabsTrigger
                value="devops"
                className="text-gray-200 font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 hover:text-white hover:bg-primary/10 transition-all duration-300"
              >
                DevOps
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {frontendSkills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:bg-black/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                      <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="40px" className="object-contain" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {backendSkills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:bg-black/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                      <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="40px" className="object-contain" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {toolsSkills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:bg-black/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                      <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="40px" className="object-contain" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devops" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cloudDevOpsSkills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:bg-black/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                      <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="40px" className="object-contain" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}