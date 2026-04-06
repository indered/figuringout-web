'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function getDevice() {
  const ua = navigator.userAgent
  if (/Mobi|Android|iPhone|iPad/i.test(ua)) return 'mobile'
  if (/Tablet|iPad/i.test(ua)) return 'tablet'
  return 'desktop'
}

function getReferrerSource() {
  const ref = document.referrer
  if (!ref) return 'direct'
  if (/google\./i.test(ref)) return 'google'
  if (/bing\./i.test(ref)) return 'bing'
  if (/instagram\.com/i.test(ref)) return 'instagram'
  if (/linkedin\.com/i.test(ref)) return 'linkedin'
  if (/facebook\.com|fb\.com/i.test(ref)) return 'facebook'
  if (/twitter\.com|x\.com/i.test(ref)) return 'twitter'
  if (/whatsapp/i.test(ref)) return 'whatsapp'
  if (/t\.co/i.test(ref)) return 'twitter'
  return 'other'
}

export default function Tracker() {
  const pathname = usePathname()
  const maxScroll = useRef(0)
  const tracked = useRef(false)

  // Track page visit
  useEffect(() => {
    tracked.current = false
    maxScroll.current = 0

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer,
        source: getReferrerSource(),
        device: getDevice(),
        screenWidth: window.innerWidth,
      }),
    }).catch(() => {})
  }, [pathname])

  // Track scroll depth
  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      if (scrollPercent > maxScroll.current) {
        maxScroll.current = scrollPercent
      }
    }

    const sendScroll = () => {
      if (maxScroll.current > 0 && !tracked.current) {
        tracked.current = true
        navigator.sendBeacon(
          '/api/track',
          JSON.stringify({
            type: 'scroll',
            page: pathname,
            scrollDepth: maxScroll.current,
          })
        )
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('beforeunload', sendScroll)
    // Also send after 30 seconds if still on page
    const timer = setTimeout(sendScroll, 30000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('beforeunload', sendScroll)
      clearTimeout(timer)
      sendScroll()
    }
  }, [pathname])

  return null
}
