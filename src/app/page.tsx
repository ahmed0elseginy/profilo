import dynamic from 'next/dynamic';
import { Header } from "@/components/header";
import { HomeSection } from "@/components/sections/home";
import { Footer } from "@/components/footer";

// Lazy load non-critical sections for better performance
const TechStackSection = dynamic(() => import("@/components/sections/tech-stack").then(mod => ({ default: mod.TechStackSection })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-lg" />,
});

const ProjectsSection = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-lg" />,
});

const EducationSection = dynamic(() => import("@/components/sections/education").then(mod => ({ default: mod.EducationSection })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-lg" />,
});

const ExperienceSection = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.ExperienceSection })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-lg" />,
});

const ContactSection = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/20 rounded-lg" />,
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Above the fold content - loaded immediately */}
        <HomeSection />
        
        {/* Below the fold content - lazy loaded */}
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
