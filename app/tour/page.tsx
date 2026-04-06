'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, X, Search } from 'lucide-react'
import { tours, categories, countries } from '@/lib/tours'
import TourCard from '@/components/tour-card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export default function TourCatalogPage() {
  const [activeCategory, setActiveCategory] = useState('tutti')
  const [activeCountry, setActiveCountry] = useState('tutti')
  const [sortBy, setSortBy] = useState<'date' | 'duration'>('date')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...tours]
    if (activeCategory !== 'tutti') result = result.filter((t) => t.category === activeCategory)
    if (activeCountry !== 'tutti') result = result.filter((t) => t.country === activeCountry)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      )
    }
    result.sort((a, b) => {
      if (sortBy === 'date') return new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime()
      if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration)
      return 0
    })
    return result
  }, [activeCategory, activeCountry, sortBy, searchQuery])

  const resetFilters = () => {
    setActiveCategory('tutti')
    setActiveCountry('tutti')
    setSortBy('date')
    setSearchQuery('')
  }

  const hasActiveFilters =
    activeCategory !== 'tutti' || activeCountry !== 'tutti' || sortBy !== 'date' || searchQuery !== ''

  const inputClass = 'bg-input border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors w-full'

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <section className="relative bg-festival-surface border-b border-border overflow-hidden">
          <div className="absolute inset-0 festival-stripe opacity-50" />
          <div className="relative max-w-6xl mx-auto px-4 py-16">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Catalogo Completo
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-foreground mb-3 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tutti i Tour Sportivi
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Esplora la nostra selezione di tour sportivi in Italia e in Europa. Filtra per sport, paese o prezzo e trova l&apos;esperienza perfetta per te.
            </p>
          </div>

          {/* Scoreboard decoration */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-3 gap-px bg-border/40 border border-border/60 rounded-sm overflow-hidden">
            {['CAL', 'TEN', 'MOT', 'CIC', 'BAS', 'ATL'].map((cat) => (
              <div key={cat} className="bg-festival-muted px-4 py-3 text-center">
                <span
                  className="text-xs font-bold tracking-widest uppercase text-primary"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between mb-4 md:hidden">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{filtered.length}</span> tour trovati
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-border rounded-sm px-3 py-2 text-sm font-bold tracking-wider uppercase text-foreground hover:border-primary transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtri
              {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-primary" />}
            </button>
          </div>

          {/* Filter panel */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mb-8`}>
            <div className="bg-festival-surface border border-border rounded-sm p-5">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Cerca tour..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-input border border-border rounded-sm pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full"
                  />
                </div>

                {/* Category */}
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className={inputClass}
                  aria-label="Filtra per sport"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>

                {/* Country */}
                <select
                  value={activeCountry}
                  onChange={(e) => setActiveCountry(e.target.value)}
                  className={inputClass}
                  aria-label="Filtra per paese"
                >
                  {countries.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className={inputClass}
                  aria-label="Ordina per"
                >
                  <option value="date">Ordina: Data</option>
                  <option value="duration">Ordina: Durata</option>
                </select>
              </div>

              {hasActiveFilters && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Filtri attivi — <span className="text-foreground font-medium">{filtered.length} risultati</span>
                  </p>
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 text-xs text-primary hover:text-accent transition-colors font-medium"
                  >
                    <X className="w-3 h-3" /> Azzera filtri
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop category pills + result count */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{filtered.length}</span> tour trovati
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActiveCategory(c.value)}
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-colors ${activeCategory === c.value
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                    }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-festival-surface border border-border rounded-sm">
              <p
                className="text-xl font-bold uppercase tracking-wide text-foreground mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Nessun tour trovato
              </p>
              <p className="text-sm text-muted-foreground mb-4">Prova a modificare i filtri di ricerca</p>
              <button
                onClick={resetFilters}
                className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-sm hover:bg-accent transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Azzera filtri
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
