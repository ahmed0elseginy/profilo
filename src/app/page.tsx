import { Header } from "@/components/header";
import { HomeSection } from "@/components/sections/home";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { EducationSection } from "@/components/sections/education";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <TechStackSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
