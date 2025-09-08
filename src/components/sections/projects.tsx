"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, Code, Database, Shield, Zap, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luisi ERP-System – USA",
    subtitle: "The Enterprise Universe",
    description: "Developed a comprehensive monolithic service using Spring Boot (backend) and Next.js with ShadCN UI & Redux (frontend). Secured authentication with AWS Cognito and managed relational data using PostgreSQL.",
    story: "Here I learned that enterprise systems are like complex galaxies - every component must work in perfect harmony.",
    tags: ["Spring Boot", "Next.js", "AWS Cognito", "PostgreSQL", "RabbitMQ", "Redux"],
    githubUrl: "#",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Social Media Platform – Zag Systems",
    subtitle: "The Planet of Connections",
    description: "Designed and developed RESTful APIs with Java Spring Boot, applied Spring Security with ActiveMQ Artemis, and managed relational data using MySQL + Hibernate + Liquibase.",
    story: "Building connections between people taught me that APIs are like bridges between worlds.",
    tags: ["Java", "Spring Boot", "Spring Security", "ActiveMQ", "MySQL", "Hibernate", "Swagger"],
    githubUrl: "#",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "User Management Backend",
    subtitle: "The Kingdom of Access",
    description: "Developed full CRUD RESTful endpoints following REST standards. Integrated a message publishing endpoint and followed OpenAPI specifications for API documentation.",
    story: "Managing users taught me that every individual deserves secure and efficient access to digital services.",
    tags: ["Java", "REST API", "OpenAPI", "CRUD", "Message Publishing"],
    githubUrl: "#",
    icon: <Shield className="w-6 h-6" />,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Toda - Backend",
    subtitle: "The Organizer's Star",
    description: "Implemented essential CRUD operations with a focus on maintainability and code readability. Prioritized clean architecture and modular code for demonstration and testing purposes.",
    story: "Like the Little Prince tending to his rose, I tended to each line of code with care and attention.",
    tags: ["Java", "CRUD", "Clean Architecture", "Modular Design"],
    githubUrl: "#",
    icon: <Code className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Simple E-commerce",
    subtitle: "The Merchant's Asteroid",
    description: "Built CRUD functionalities using Spring Boot, MySQL, and Thymeleaf for a dynamic web interface. Focused on creating a seamless shopping experience.",
    story: "Commerce flows like a river - it needs clear channels and secure foundations to reach its destination.",
    tags: ["Spring Boot", "MySQL", "Thymeleaf", "CRUD", "Web Interface"],
    githubUrl: "#",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600"
  },
];

// Removed motion variants and animations for a static presentation

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 lg:px-8 overflow-hidden section-wave-divider">
      {/* Background planets, nebula, and stars removed */}

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My Journey Through Code
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "I have visited many planets in my coding journey. Each project taught me something new about the universe of software development..."
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <div key={project.id}>
              <Link 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group h-full"
              >
                <div className="relative border border-slate-700 rounded-lg p-6 bg-slate-900/30 h-full">
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-3">
                           <div className="w-3 h-3 rounded-full bg-primary"></div>
                           <span className="text-xs text-primary font-medium uppercase tracking-wider">
                             {project.subtitle}
                           </span>
                         </div>
                        <div className="text-xs text-gray-400">
                          Backend Project
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
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
                         <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                        <blockquote className="pl-4 text-gray-400 italic text-sm">
                        "{project.story}"
                      </blockquote>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                       <div className="flex items-center gap-2 mb-3">
                         <div className="w-2 h-2 rounded-full bg-accent"></div>
                         <span className="text-sm text-accent font-medium">Technologies Used</span>
                       </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                          <span 
                          key={tag} 
                            className="px-3 py-1 text-xs font-medium text-gray-300 bg-slate-700/50 border border-primary/20 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                        >
                          {tag}
                          </span>
                      ))}
                      </div>
                    </div>

                     {/* Hover indicator */}
                     <div className="absolute bottom-6 right-6 text-primary opacity-70">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
            "All these planets I've visited have shaped me into the developer I am today. Each line of code is a star in my constellation of learning..."
          </p>
        </div>
      </div>
    </section>
  );
}
