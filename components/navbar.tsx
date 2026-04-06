'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Trophy } from 'lucide-react'

const navLinks = [
  { href: '/tour', label: 'Tour' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-festival-dark/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="w-8 h-8" />

          <span
            className="text-lg font-bold tracking-widest uppercase text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Italy<span className="text-primary">Sport</span>Trips
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tour"
            className="bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase px-5 py-2 rounded-sm hover:bg-accent transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prenota
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-festival-surface border-t border-border">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium tracking-widest uppercase text-foreground hover:text-primary px-6 py-3 border-b border-border/50 transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link
                href="/tour"
                className="block bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase px-5 py-3 rounded-sm text-center hover:bg-accent transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
                onClick={() => setOpen(false)}
              >
                Prenota ora
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
