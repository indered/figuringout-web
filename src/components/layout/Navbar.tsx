'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: '#1A1A1A' }}>
          Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: '#1A1A1A' }}>
          <Link href="#flavors" className="hover:text-[#14B8A6] transition-colors">Flavors</Link>
          <Link href="/story" className="hover:text-[#14B8A6] transition-colors">Our Story</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#waitlist"
            className="hidden md:block text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105 shadow-md"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            Join Waitlist
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: '#1A1A1A', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: '#1A1A1A', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: '#1A1A1A', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-6 text-lg font-medium" style={{ backgroundColor: 'white', color: '#1A1A1A' }}>
          <Link href="#flavors" onClick={() => setMenuOpen(false)}>Flavors</Link>
          <Link href="/story" onClick={() => setMenuOpen(false)}>Our Story</Link>
          <Link
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="self-start text-sm font-bold px-5 py-2 rounded-full"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  )
}
