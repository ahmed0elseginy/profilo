import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Smartphone, Wind } from "lucide-react";

const skills = [
  { name: "HTML5", icon: <Code className="w-8 h-8" /> },
  { name: "CSS3", icon: <Code className="w-8 h-8" /> },
  { name: "JavaScript", icon: <Code className="w-8 h-8" /> },
  { name: "TypeScript", icon: <Code className="w-8 h-8" /> },
  { name: "React", icon: <Code className="w-8 h-8" /> },
  { name: "Next.js", icon: <Code className="w-8 h-8" /> },
  { name: "Node.js", icon: <Code className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-8 h-8" /> },
  { name: "Firebase", icon: <Database className="w-8 h-8" /> },
  { name: "React Native", icon: <Smartphone className="w-8 h-8" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies I use to build modern, robust, and scalable applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-12">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 bg-background/50 hover:bg-background transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <div className="text-primary">{skill.icon}</div>
                <p className="font-semibold text-center">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
