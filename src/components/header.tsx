import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const navLinks = [
    {
      href: "#home",
      label: "Home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
        </svg>
      ),
    },
    {
      href: "/Mahmoud_Elgendy_CV.pdf",
      label: "Resume",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
    },
    {
      href: "#contact",
      label: "Contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <nav className="fixed flex left-0 right-0 z-[100] bg-secondary/70 border border-border backdrop-blur-xl transition-all md:top-0 md:bottom-auto bottom-0 md:w-[45rem] rounded-t-2xl md:rounded-full md:mt-6 md:justify-self-center">
        <div className="container mx-auto flex justify-center items-center p-3">
          <ul className="flex w-full justify-between items-center md:space-x-6 md:justify-center md:gap-12 gap-6">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-1 md:flex-none">
                <Link
                  href={link.href}
                  className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-xs md:text-base"
                  target={link.label === 'Resume' ? '_blank' : '_self'}
                  rel={link.label === 'Resume' ? 'noopener noreferrer' : ''}
                >
                  <span className="md:hidden flex items-center justify-center w-6 h-6">{link.icon}</span>
                  <span className="hidden md:inline-block">{link.label}</span>
                  <span className="md:hidden">{link.label}</span>
                </Link>
              </li>
            ))}
             <li className="flex-1 md:flex-none flex justify-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
