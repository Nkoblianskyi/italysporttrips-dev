'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import type { Tour } from '@/lib/tours'
import ContactModal from '@/components/contact-modal'

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })
}

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} preselectedTour={tour.slug} />
      <article className="bg-card border border-border rounded-sm overflow-hidden card-hover h-full flex flex-col group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-festival-dark/80 via-transparent to-transparent" />
          {tour.badge && (
            <span
              className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {tour.badge}
            </span>
          )}
          <span
            className="absolute top-3 right-3 bg-festival-dark/80 text-accent text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-sm border border-accent/30"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {tour.categoryLabel}
          </span>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-1 text-foreground/90">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="text-xs font-medium truncate">{tour.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <h3
              className="font-bold text-lg tracking-wide uppercase text-foreground leading-tight mb-1 group-hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {tour.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3 font-medium">{tour.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
              {tour.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{formatDate(tour.dateStart)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Max {tour.maxParticipants} pers.</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-3 gap-2">
            <Link
              href={`/tour/${tour.slug}`}
              className="text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Dettagli &rarr;
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-sm hover:bg-accent transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Richiedi Info
            </button>
          </div>
        </div>
      </article>
    </>
  )
}
