import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "YouTube Trending EDA",
    description: "Exploratory Data Analysis on trending YouTube videos across countries.",
    image: "https://placehold.co/600x400.png",
    hint: "youtube analytics dashboard",
    tags: ["Python", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/mahmoud375/YouTube-Trending-EDA.git",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative platform for teams to manage tasks, track progress, and communicate effectively.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard interface",
    tags: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-t border-border text-foreground">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-primary mb-2 shiny-sec">My work</h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    width={600}
                    height={400}
                    className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center px-3">
                  <div className="flex-grow">
                    <h4 className="text-2xl font-semibold">{project.title}</h4>
                    <span className="py-1 text-sm text-muted-foreground">{project.description}</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <div className="size-14 flex justify-center items-center text-muted-foreground group-hover:text-foreground transition duration-300 ease-in-out border border-border p-3 rounded-xl bg-secondary/50 group-hover:bg-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                        <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
