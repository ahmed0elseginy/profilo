"use client";

import * as React from "react"

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
} as const

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile)
    }
    
    // Set initial value
    onChange()
    
    // Listen for changes
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(
      `(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`
    )
    
    const onChange = () => {
      setIsTablet(
        window.innerWidth >= BREAKPOINTS.mobile && 
        window.innerWidth < BREAKPOINTS.tablet
      )
    }
    
    onChange()
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isTablet
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.desktop}px)`)
    
    const onChange = () => {
      setIsDesktop(window.innerWidth >= BREAKPOINTS.desktop)
    }
    
    onChange()
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isDesktop
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  React.useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < BREAKPOINTS.mobile) {
        setBreakpoint('mobile')
      } else if (width < BREAKPOINTS.tablet) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    
    let timeoutId: NodeJS.Timeout
    const debouncedUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateBreakpoint, 150)
    }

    window.addEventListener('resize', debouncedUpdate)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [])

  return breakpoint
}

export function useViewportSize() {
  const [viewportSize, setViewportSize] = React.useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: undefined,
    height: undefined
  })

  React.useEffect(() => {
    const updateSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateSize()
    
    let timeoutId: NodeJS.Timeout
    const debouncedUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateSize, 150)
    }

    window.addEventListener('resize', debouncedUpdate)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [])

  return viewportSize
}
