import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 lg:px-8 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
            <h3 className="text-2xl font-bold">Ahmed El-Seginy</h3>
            <p className="text-muted-foreground mt-1">Software Developer from Giza, Egypt</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
                <Link href="https://github.com/ahmed0elseginy" target="_blank" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github className="w-6 h-6"/>
                </Link>
                <Link href="https://linkedin.com/in/ahmed0elseginy" target="_blank" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6"/>
                </Link>
                <Link href="mailto:ahmed0elseginy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                    <Mail className="w-6 h-6"/>
                </Link>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ahmed El-Seginy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
