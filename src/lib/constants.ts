// Animation constants
export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.8,
  VERY_SLOW: 1.2,
} as const;

export const ANIMATION_DELAYS = {
  NONE: 0,
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.5,
} as const;

// Responsive breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Layout constants
export const LAYOUT = {
  HEADER_HEIGHT: 64,
  FOOTER_HEIGHT: 120,
  SECTION_PADDING_Y: 80,
  SECTION_PADDING_Y_MOBILE: 60,
  MAX_CONTENT_WIDTH: 1280,
} as const;

// Social links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/ahmed0elseginy',
  LINKEDIN: 'https://linkedin.com/in/ahmed0elseginy',
  EMAIL: 'mailto:ahmed0elseginy@gmail.com',
} as const;

// Personal information
export const PERSONAL_INFO = {
  NAME: 'Ahmed El-Seginy',
  TITLE: 'Software Developer',
  LOCATION: 'Giza, Egypt',
  TAGLINE: 'Backend Developer & Code Explorer',
  DESCRIPTION: 'Building scalable backend systems with Java & Spring Boot...',
} as const;

// Tech stack categories for better organization
export const TECH_CATEGORIES = {
  BACKEND: 'Backend Development',
  DATABASE: 'Databases & Data Management', 
  ARCHITECTURE: 'Software Architecture',
  DEVOPS: 'DevOps & Cloud',
  TOOLS: 'Development Tools',
  LANGUAGES: 'Programming Languages',
} as const;

// Color palette
export const COLORS = {
  PRIMARY: '#fbbf24', // yellow-400
  SECONDARY: '#8b5cf6', // purple-500
  ACCENT: '#06b6d4', // cyan-500
  SUCCESS: '#10b981', // emerald-500
  WARNING: '#f59e0b', // amber-500
  ERROR: '#ef4444', // red-500
} as const; 