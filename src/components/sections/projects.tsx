import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative platform for teams to manage tasks, track progress, and communicate effectively.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard interface",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Blog",
    description: "A content-focused blog with a markdown editor, static site generation for speed, and a clean reading experience.",
    image: "https://placehold.co/600x400.png",
    hint: "minimalist blog",
    tags: ["Next.js", "Contentful", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden flex flex-col group">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    data-ai-hint={project.hint}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-end gap-2">
                  <Button asChild variant="ghost" size="icon">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
