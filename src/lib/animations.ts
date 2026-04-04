'use client'

import { useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Shared fade-up variants for staggered section reveals
export const fadeUpVariants = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
}

// Custom hook for parallax effects
export function useScrollParallax(
  inputRange: [number, number] = [0, 1],
  outputRange: [number, number] = [0, -100]
) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, inputRange, outputRange)
  return { ref, y, scrollYProgress }
}

// Hook to detect mobile
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}

// Animated counter hook
export function useAnimatedCounter(
  target: number,
  isInView: boolean,
  duration = 1.5
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, target, duration])

  return count
}
