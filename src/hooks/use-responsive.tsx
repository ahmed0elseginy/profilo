'use client';

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/lib/constants';
import type { Breakpoint } from '@/lib/types';

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  currentBreakpoint: Breakpoint;
  windowWidth: number;
  windowHeight: number;
}

export function useResponsive(): UseResponsiveReturn {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = windowSize;

  const getCurrentBreakpoint = (): Breakpoint => {
    if (width >= BREAKPOINTS['2XL']) return '2xl';
    if (width >= BREAKPOINTS.XL) return 'xl';
    if (width >= BREAKPOINTS.LG) return 'lg';
    if (width >= BREAKPOINTS.MD) return 'md';
    return 'sm';
  };

  return {
    isMobile: width < BREAKPOINTS.MD,
    isTablet: width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG,
    isDesktop: width >= BREAKPOINTS.LG,
    isLarge: width >= BREAKPOINTS.XL,
    currentBreakpoint: getCurrentBreakpoint(),
    windowWidth: width,
    windowHeight: height,
  };
} 