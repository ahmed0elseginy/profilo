import { ArrowDown, Send, Sparkles } from "lucide-react";

export function HomeSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-foreground dark:text-white">
      {/* Animated Elements */}
      <Send className="w-16 h-16 absolute top-20 left-0 text-primary animate-fly-across opacity-70" style={{ animationDuration: '30s', animationDelay: '1s' }} />
      <Sparkles className="w-10 h-10 absolute top-1/4 right-0 text-primary animate-shooting-star" style={{ animationDuration: '8s', animationDelay: '3s' }}/>

      <div className="z-10 flex flex-col items-center px-4">
        <p className="text-lg md:text-xl text-primary">Welcome to my planet</p>
        <h1 className="text-5xl md:text-8xl font-bold mt-2 mb-4 shiny-text">
          Ahmed Elseginy
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground">
          Full-Stack Developer
        </p>
        <a href="#projects" className="absolute bottom-20 md:bottom-10 animate-bounce text-foreground dark:text-white">
          <p className="text-sm mb-1">Scroll to explore</p>
          <ArrowDown className="w-8 h-8 mx-auto" />
        </a>
      </div>

      {/* Planet SVG */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-1/2">
        <PlanetSvg />
      </div>
    </section>
  );
}

const PlanetSvg = () => (
    <svg
      viewBox="0 0 1440 350"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-full"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M0,150 C200,250 400,100 720,200 C1040,300 1240,150 1440,250 L1440,350 L0,350 Z"
        className="fill-primary"
        filter="url(#glow)"
      ></path>
      {/* Craters */}
      <circle cx="200" cy="220" r="30" className="fill-secondary" opacity="0.4" />
      <circle cx="500" cy="180" r="50" className="fill-secondary" opacity="0.4" />
      <circle cx="900" cy="250" r="40" className="fill-secondary" opacity="0.4" />
      <circle cx="1200" cy="230" r="25" className="fill-secondary" opacity="0.4" />
    </svg>
  );
