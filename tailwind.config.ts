import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-ubuntu)', 'sans-serif'],
        headline: ['var(--font-ubuntu)', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fly-across': {
          '0%': { transform: 'translateX(-20vw) rotate(-15deg)' },
          '100%': { transform: 'translateX(120vw) rotate(10deg)' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(30vw) translateY(-30vh) rotate(20deg)', opacity: '1' },
          '100%': { transform: 'translateX(-30vw) translateY(30vh) rotate(20deg)', opacity: '0' },
        },
         'star-twinkle': {
            '0%': { 'background-position': '0 0, 10px 10px' },
            '50%': { 'background-position': '-10px 10px, 5px -5px' },
            '100%': { 'background-position': '0 0, 10px 10px' },
        },
        'shine': {
          'to': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fly-across': 'fly-across 25s linear infinite',
        'shooting-star': 'shooting-star 5s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 10s linear infinite',
        'shine': 'shine 4s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
