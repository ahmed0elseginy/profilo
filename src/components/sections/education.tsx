import { GraduationCap } from "lucide-react";

const education = [
  {
    date: "Nov 2024 - Jun 2028 (in progress)",
    title: "Bachelor in Information and Communications Technology (ICT)",
    institution: "New Cairo Technological University (NCTU)",
    description: [
      "Organizer, Google Developer Groups Club.",
      "Participant, Be Al-Masry Tech Hackathon 2024.",
    ],
  },
  {
    date: "Oct 2020 - Jun 2024",
    title: "High School Diploma, Computer Programming",
    institution: "Misr International Computer & Ai Academy | MICA",
    description: [
      "Focus on Java programming and Oracle Database.",
      "Participated in competitions using Arduino and worked on various projects.",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-medium text-center mb-12">
          Education
        </h3>
        <div className="relative md:pl-6">
          {/* Vertical line for desktop */}
          <div className="absolute left-6 top-2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="md:pl-10 relative">
                {/* Circle with icon for desktop */}
                <div className="absolute -left-1 top-1 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary border-4 border-background">
                  <GraduationCap className="text-primary-foreground" />
                </div>

                <div className="md:ml-4">
                  <p className="text-sm text-muted-foreground">{edu.date}</p>
                  <h4 className="text-2xl font-semibold mt-1">{edu.title}</h4>
                  <p className="text-lg text-muted-foreground mt-1">
                    {edu.institution}
                  </p>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
                    {edu.description.map((point, i) => (
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
