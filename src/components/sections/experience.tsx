import { Briefcase } from "lucide-react";

const experiences = [
  {
    date: "Sep 2024 - Mar 2025",
    title: "Java with Spring Mentorship",
    company: "Zag Systems Company",
    description: [
      "Developed a scalable backend for a social media platform using Java and Spring Boot.",
      "Designed and implemented secure RESTful APIs with JWT and role-based access control.",
      "Collaborated on system architecture improvements and scalability strategies.",
    ],
  },
  {
    date: "Jun 2024 - Feb 2025",
    title: "Self-learning & Online Courses",
    company: "Part-time alongside mentorship",
    description: [
      "Advanced skills in Spring Boot, Java, and backend development through practical projects.",
      "Built RESTful APIs and integrated MySQL and Thymeleaf in backend systems.",
      "Studied authentication mechanisms, including JWT and access control strategies.",
      "Applied clean architecture principles to improve code structure and maintainability.",
    ],
  },
  {
    date: "Oct 2022 - Jun 2024",
    title: "Student Intern",
    company: "MICA – Misr International Computer & AI",
    description: [
      "Built Java applications and Arduino-based projects as part of coursework.",
      "Gained experience with Oracle SQL/PLSQL and took part in coding competitions.",
      "Strengthened problem-solving skills through hands-on software development tasks.",
    ],
  },
];

export function ExperienceSection() {
    return (
      <section id="experience" className="relative w-full py-20 md:py-28 px-6 lg:px-8 bg-background">
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary rounded-full opacity-10 blur-3xl -translate-y-1/2" />
  
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 shiny-text">
            Work Experience
          </h3>
          <div className="relative md:pl-6">
            {/* Vertical line for desktop */}
            <div className="absolute left-6 top-2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block rounded-full"></div>
  
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="md:pl-10 relative">
                  {/* Circle with icon for desktop */}
                  <div className="absolute -left-1 top-1 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary border-4 border-background shadow-lg">
                    <Briefcase className="text-primary-foreground" />
                  </div>
  
                  <div className="md:ml-4 p-6 bg-card rounded-2xl border border-transparent hover:border-primary/50 transition-all">
                    <p className="text-sm text-muted-foreground">{exp.date}</p>
                    <h4 className="text-2xl font-semibold mt-1 text-foreground">{exp.title}</h4>
                    <p className="text-lg text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                    <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }