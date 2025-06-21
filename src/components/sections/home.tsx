import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function HomeSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Ahmed Elseginy
              </h1>
              <p className="text-primary font-medium text-lg">Full-Stack Developer</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build beautiful, responsive, and highly performant web applications from scratch, turning ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <img
              src="https://placehold.co/550x550.png"
              data-ai-hint="developer portrait"
              alt="Ahmed Elseginy"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
