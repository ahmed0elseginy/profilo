"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderGit2, Code, Database, Shield, Zap, Globe, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luisi ERP-System",
    subtitle: "Enterprise Management Platform",
    description: "Developed a comprehensive monolithic service using Spring Boot (backend) and Next.js with ShadCN UI & Redux (frontend). Secured authentication with AWS Cognito and managed relational data using PostgreSQL.",
    story: "Here I learned that enterprise systems are like complex galaxies - every component must work in perfect harmony.",
    tags: ["Spring Boot", "Next.js", "AWS Cognito", "PostgreSQL", "RabbitMQ", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Globe,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Social Media Platform",
    subtitle: "Zag Systems Backend",
    description: "Designed and developed RESTful APIs with Java Spring Boot, applied Spring Security with ActiveMQ Artemis, and managed relational data using MySQL + Hibernate + Liquibase.",
    story: "Building connections between people taught me that APIs are like bridges between worlds.",
    tags: ["Java", "Spring Boot", "Spring Security", "ActiveMQ", "MySQL", "Hibernate", "Swagger"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Database,
    category: "Backend"
  },
  {
    id: 3,
    title: "User Management System",
    subtitle: "Secure Access Control",
    description: "Developed full CRUD RESTful endpoints following REST standards. Integrated a message publishing endpoint and followed OpenAPI specifications for API documentation.",
    story: "Managing users taught me that every individual deserves secure and efficient access to digital services.",
    tags: ["Java", "REST API", "OpenAPI", "CRUD", "Message Publishing"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Shield,
    category: "Backend"
  },
  {
    id: 4,
    title: "Toda - Task Manager",
    subtitle: "Clean Architecture Demo",
    description: "Implemented essential CRUD operations with a focus on maintainability and code readability. Prioritized clean architecture and modular code for demonstration and testing purposes.",
    story: "Like the Little Prince tending to his rose, I tended to each line of code with care and attention.",
    tags: ["Java", "CRUD", "Clean Architecture", "Modular Design"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Code,
    category: "Backend"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    subtitle: "Shopping Experience",
    description: "Built CRUD functionalities using Spring Boot, MySQL, and Thymeleaf for a dynamic web interface. Focused on creating a seamless shopping experience.",
    story: "Commerce flows like a river - it needs clear channels and secure foundations to reach its destination.",
    tags: ["Spring Boot", "MySQL", "Thymeleaf", "CRUD", "Web Interface"],
    githubUrl: "#",
    liveUrl: "#",
    icon: Zap,
    category: "Full Stack"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 lg:px-8">
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
            Featured Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in backend development, 
            full-stack solutions, and modern software architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Story Quote */}
                    <div className="relative bg-black/30 rounded-lg p-3 border border-primary/10">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                      <blockquote className="pl-4 text-gray-400 italic text-xs">
                        "{project.story}"
                      </blockquote>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-sm text-secondary font-medium">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 hover:text-white transition-all duration-300"
                        asChild
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 hover:text-white transition-all duration-300"
                        asChild
                      >
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg italic max-w-2xl mx-auto mb-6">
            "Each project represents a step forward in my journey as a developer, 
            combining technical expertise with creative problem-solving."
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 hover:text-white transition-all duration-300"
            asChild
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
