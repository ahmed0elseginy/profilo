import { Github, Linkedin, Twitter, Send, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HomeSection() {
  const socialLinks = [
    { href: "https://github.com/ahmed0elseginy", label: "GitHub", Icon: Github },
    { href: "https://linkedin.com/in/ahmed0elseginy", label: "LinkedIn", Icon: Linkedin },
    { href: "https://x.com/ahmed0elseginy", label: "X (Twitter)", Icon: Twitter },
    { href: "https://t.me/", label: "Telegram", Icon: Send },
  ] as const;
   
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-24">
      <div className="mx-auto max-w-6xl px-4 w-full">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-secondary bg-gradient-to-r from-primary/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <Image
                    src="/images/WhatsApp Image 2025-09-08 at 04.31.41_b3b480d2.jpg"
                    alt="Ahmed El-Seginy - Java Software Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-500"
                    priority
                    quality={100}
                  />
                </div>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-right space-y-6">
            <p className="text-gray-300 text-lg font-light tracking-wide">Welcome!...</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-mono">
              Ahmed El-Seginy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Software Engineer
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0 text-gray-300 leading-relaxed font-light">
              "What makes my code so special is the time I have devoted to perfecting it.
              <br className="hidden sm:block" />
              I build scalable systems with Java & Spring Boot..."
            </p>
            <div className="pt-4 flex items-center justify-center lg:justify-end gap-4 flex-wrap">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 inline-flex items-center justify-center border border-slate-700 rounded-full hover:border-primary text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
