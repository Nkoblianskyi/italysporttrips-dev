import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, MapPin, Clock, Users, CheckCircle2, XCircle, ArrowLeft, Zap } from 'lucide-react'
import { tours } from '@/lib/tours'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import TourCard from '@/components/tour-card'
import TourDetailClient from '@/components/tour-detail-client'
import type { Metadata } from 'next'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} – Italy Sport Trips`,
    description: tour.description.slice(0, 155),
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const related = tours.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 2)
  const otherTours = tours.filter((t) => t.id !== tour.id).slice(0, 2)
  const suggestions = related.length > 0 ? related : otherTours

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-festival-dark via-festival-dark/40 to-transparent" />

          {tour.badge && (
            <div className="absolute top-6 left-4 md:left-8">
              <span
                className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {tour.badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 pb-8">
            <Link
              href="/tour"
              className="inline-flex items-center gap-1.5 text-xs text-foreground/70 hover:text-primary transition-colors mb-4 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Tutti i Tour
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="bg-festival-dark/80 text-accent text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-sm border border-accent/30"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {tour.categoryLabel}
              </span>
              <span className="text-foreground/60 text-xs">&middot;</span>
              <span className="text-xs text-foreground/60 font-medium">{tour.difficulty}</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-foreground mb-1 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {tour.title}
            </h1>
            <p className="text-foreground/80 text-sm md:text-base">{tour.subtitle}</p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: <Calendar className="w-4 h-4 text-primary" />, label: 'Inizio', value: formatDate(tour.dateStart) },
                  { icon: <Calendar className="w-4 h-4 text-primary" />, label: 'Fine', value: formatDate(tour.dateEnd) },
                  { icon: <Clock className="w-4 h-4 text-primary" />, label: 'Durata', value: tour.duration },
                  { icon: <Users className="w-4 h-4 text-primary" />, label: 'Gruppo', value: `Max ${tour.maxParticipants}` },
                ].map((item) => (
                  <div key={item.label} className="bg-festival-surface border border-border rounded-sm p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      {item.icon}
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                    <p className="text-sm font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2
                  className="text-2xl font-bold uppercase tracking-wide text-foreground mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Descrizione del Tour
                </h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2
                  className="text-2xl font-bold uppercase tracking-wide text-foreground mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Punti Salienti
                </h2>
                <ul className="space-y-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Includes / Excludes */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3
                    className="text-lg font-bold uppercase tracking-wide text-foreground mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Cosa Include
                  </h3>
                  <ul className="space-y-2">
                    {tour.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold uppercase tracking-wide text-foreground mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Non Include
                  </h3>
                  <ul className="space-y-2">
                    {tour.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-festival-surface border border-border rounded-sm overflow-hidden">
                <div className="bg-primary p-5">
                  <p
                    className="text-sm font-bold tracking-widest uppercase text-primary-foreground/90"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {tour.title}
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-1">{tour.duration} &middot; max {tour.maxParticipants} pers.</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{formatDate(tour.dateStart)} – {formatDate(tour.dateEnd)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">Massimo {tour.maxParticipants} partecipanti</span>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <TourDetailClient tourSlug={tour.slug} />
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      Risposta entro 24 ore lavorative
                    </p>
                  </div>

                  <div className="bg-festival-muted rounded-sm p-3 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Rimborso completo garantito in caso di annullamento dell&apos;evento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related tours */}
        {suggestions.length > 0 && (
          <section className="bg-festival-surface border-t border-border py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2
                className="text-2xl font-bold uppercase tracking-wide text-foreground mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Potrebbe Interessarti Anche
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {suggestions.map((t) => (
                  <TourCard key={t.id} tour={t} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
