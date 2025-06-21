import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FolderGit2 } from "lucide-react";

const projects = [
    {
      title: "Backend – Social Media App",
      description: "Designed and developed RESTful APIs with Java and Spring Boot, with advanced security and an Event-Driven Architecture.",
      tags: ["Java", "Spring Boot", "Spring Security", "ActiveMQ", "MySQL", "Swagger"],
      githubUrl: "#", 
    },
    {
      title: "Simple E-commerce Platform",
      description: "Built CRUD functionalities using Spring Boot, MySQL, and Thymeleaf for a dynamic web interface.",
      tags: ["Spring Boot", "MySQL", "Thymeleaf"],
      githubUrl: "#",
    },
    {
      title: "User-Management-Backend",
      description: "Developed full CRUD RESTful endpoints with a layered architecture and Liquibase for schema evolution.",
      tags: ["Java", "REST", "OpenAPI", "Liquibase"],
      githubUrl: "#",
    },
    {
      title: "To-Do-List-Backend",
      description: "Implemented essential CRUD operations with a focus on maintainability, clean architecture, and modular code.",
      tags: ["Java", "CRUD", "Clean Architecture"],
      githubUrl: "#",
    },
  ];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 lg:px-8 bg-background">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-secondary rounded-full opacity-30 blur-2xl" />
      <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 shiny-text">Projects</h2>
        <p className="text-lg text-muted-foreground mb-12">A glimpse into my universe of code.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projects.map((project) => (
            <Link key={project.title} href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block group bg-card p-6 rounded-2xl border border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <FolderGit2 className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">{project.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
