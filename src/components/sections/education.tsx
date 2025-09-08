"use client";

import { GraduationCap, BookOpen, Award, Users, Code, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    date: "Nov 2024 - Present",
    status: "Current",
    title: "B.S.E. in Information and Communications Technology (ICT)",
    institution: "New Cairo Technological University (NCTU)",
    subtitle: "Faculty of Industrial and Energy Technology",
    description: "Currently pursuing advanced coursework in software engineering and system design, focusing on scalable architecture and enterprise solutions.",
    achievements: ["ICT Student", "Software Engineering", "System Design"],
    icon: GraduationCap,
    grade: "In Progress"
  },
  {
    date: "Oct 2020 - Jun 2024",
    status: "Completed",
    title: "High School Diploma, Computer Programming",
    institution: "Misr International Computer & AI Academy | MICA",
    subtitle: "Computer Science Track",
    description: "Mastered Java programming fundamentals with distinction, explored Oracle Database development and PL/SQL programming, and participated in coding competitions.",
    achievements: ["Java Foundation", "Oracle Database", "High Distinction"],
    icon: Code,
    grade: "95.67%"
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My educational journey in technology and software development, 
            building a strong foundation for my career.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-black/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge 
                            variant={edu.status === "Current" ? "default" : "secondary"}
                            className={`text-xs ${
                              edu.status === "Current" 
                                ? "bg-primary text-black" 
                                : "bg-secondary/10 text-secondary border-secondary/20"
                            }`}
                          >
                            {edu.status}
                          </Badge>
                          <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{edu.grade}</p>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {edu.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium text-base">
                      {edu.institution}
                    </CardDescription>
                    <p className="text-sm text-gray-400 mt-1">
                      {edu.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-sm text-secondary font-medium">Key Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <Badge 
                            key={i}
                            variant="outline" 
                            className="text-xs bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
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
          <p className="text-gray-400 text-lg italic max-w-2xl mx-auto">
            "Continuous learning is the key to staying relevant in the ever-evolving world of technology."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
