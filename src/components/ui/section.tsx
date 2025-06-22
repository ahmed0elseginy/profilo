'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { SectionProps } from '@/lib/types';
import { LAYOUT, ANIMATION_DURATIONS } from '@/lib/constants';

interface ExtendedSectionProps extends SectionProps {
  variant?: 'default' | 'padded' | 'full-height';
  background?: 'transparent' | 'subtle' | 'cosmic';
  animate?: boolean;
}

export function Section({ 
  id, 
  className, 
  children, 
  variant = 'default',
  background = 'transparent',
  animate = true,
  ...props 
}: ExtendedSectionProps) {
  const baseClasses = 'relative w-full overflow-hidden';
  
  const variantClasses = {
    default: 'py-16 md:py-24',
    padded: `py-${LAYOUT.SECTION_PADDING_Y_MOBILE / 4} md:py-${LAYOUT.SECTION_PADDING_Y / 4}`,
    'full-height': 'min-h-screen flex items-center justify-center',
  };

  const backgroundClasses = {
    transparent: '',
    subtle: 'bg-gradient-to-b from-transparent via-white/5 to-transparent',
    cosmic: 'section-wave-divider floating-particles',
  };

  const sectionClasses = cn(
    baseClasses,
    variantClasses[variant],
    backgroundClasses[background],
    className
  );

  if (!animate) {
    return (
      <section id={id} className={sectionClasses} {...props}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={sectionClasses}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.SLOW }}
      viewport={{ once: true, margin: '-100px' }}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
} 