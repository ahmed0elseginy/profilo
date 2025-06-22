import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants';

const FOOTER_SOCIAL_LINKS = [
  {
    href: SOCIAL_LINKS.GITHUB,
    icon: Github,
    label: "GitHub",
    ariaLabel: "Visit GitHub profile"
  },
  {
    href: SOCIAL_LINKS.LINKEDIN,
    icon: Linkedin,
    label: "LinkedIn",
    ariaLabel: "Visit LinkedIn profile"
  },
  {
    href: SOCIAL_LINKS.EMAIL,
    icon: Mail,
    label: "Email",
    ariaLabel: "Send email"
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 text-center sm:text-left">
          {/* Personal Info */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {PERSONAL_INFO.NAME}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {PERSONAL_INFO.TITLE} from {PERSONAL_INFO.LOCATION}
            </p>
          </div>
          
          {/* Social Links and Copyright */}
          <div className="flex flex-col items-center sm:items-end gap-4">
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {FOOTER_SOCIAL_LINKS.map(({ href, icon: Icon, label, ariaLabel }) => (
                <Link 
                  key={label}
                  href={href} 
                  target={href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 p-1" 
                  aria-label={ariaLabel}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} {PERSONAL_INFO.NAME}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
