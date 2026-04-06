'use client'

import { useState } from 'react'
import ContactModal from '@/components/contact-modal'

interface TourDetailClientProps {
  tourSlug: string
}

export default function TourDetailClient({ tourSlug }: TourDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} preselectedTour={tourSlug} />
      <button
        onClick={() => setModalOpen(true)}
        className="block w-full bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase text-center py-3.5 rounded-sm hover:bg-accent transition-colors"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Richiedi Informazioni
      </button>
    </>
  )
}
