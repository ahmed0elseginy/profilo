import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Home, Briefcase, GraduationCap, Mails, FolderGit2 } from "lucide-react";

export function Header() {
  const navLinks = [
    { href: "#home", label: "Home", icon: <Home /> },
    { href: "#projects", label: "Projects", icon: <FolderGit2 /> },
    { href: "#education", label: "Education", icon: <GraduationCap /> },
    { href: "#experience", label: "Experience", icon: <Briefcase /> },
    { href: "#contact", label: "Contact", icon: <Mails /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="container mx-auto px-4 py-3 mt-4 bg-card/70 backdrop-blur-lg rounded-full w-auto border border-border/30">
        <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors rounded-full">
                {link.label}
              </Link>
            ))}
             <div className="border-l border-border/50 h-6 mx-2"></div>
            <ThemeToggle />
        </div>
        
        {/* Mobile Nav */}
        <div className="md:hidden flex w-full justify-between items-center gap-4 text-xs">
           {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                 <div className="w-6 h-6">{link.icon}</div>
                 <span>{link.label}</span>
              </Link>
            ))}
             <div className="flex flex-col items-center gap-1">
                <ThemeToggle />
                 <span>Theme</span>
            </div>
        </div>
      </nav>
    </header>
  );
}
