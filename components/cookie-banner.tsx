'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consenso cookie"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 bg-festival-surface border border-primary/40 rounded-sm shadow-2xl p-5"
    >
      <div className="flex items-start gap-3 mb-4">
        <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p
            className="text-sm font-bold tracking-wider uppercase text-foreground mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cookie &amp; Privacy
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Utilizziamo i cookie per migliorare la tua esperienza. Leggi la nostra{' '}
            <Link href="/cookie-policy" className="text-primary underline hover:no-underline">
              Cookie Policy
            </Link>{' '}
            e la{' '}
            <Link href="/privacy-policy" className="text-primary underline hover:no-underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <button
          onClick={decline}
          className="text-muted-foreground hover:text-foreground transition-colors ml-auto flex-shrink-0"
          aria-label="Chiudi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={decline}
          className="flex-1 border border-border text-foreground text-xs font-bold tracking-widest uppercase py-2 rounded-sm hover:border-primary/50 transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Rifiuta
        </button>
        <button
          onClick={accept}
          className="flex-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase py-2 rounded-sm hover:bg-accent transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Accetta
        </button>
      </div>
    </div>
  )
}
