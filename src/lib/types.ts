import { LucideIcon } from 'lucide-react';

// Base types
export interface BaseEntity {
  id: string | number;
  title: string;
  description: string;
}

// Navigation types
export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactElement;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactElement;
  color: string;
}

// Project types
export interface Project extends BaseEntity {
  subtitle: string;
  story: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ReactElement;
  color: string;
  featured?: boolean;
}

// Tech stack types
export interface TechItem {
  name: string;
  icon: string;
  category?: string;
}

export interface Skill {
  title: string;
  icon: React.ReactElement;
  description: string[];
  level?: number; // 1-5 scale
}

// Experience types
export interface Experience extends BaseEntity {
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  achievements: string[];
  type: 'work' | 'volunteer' | 'internship';
}

// Education types
export interface Education extends BaseEntity {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string | number[];
  staggerChildren?: number;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component props types
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
}

// Utility types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Theme = 'light' | 'dark';
export type Status = 'idle' | 'loading' | 'success' | 'error'; 