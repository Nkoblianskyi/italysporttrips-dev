import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Trophy, Target, Heart, Globe } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo – Italy Trips',
  description: 'Scopri la storia di Italy Trips: la nostra missione, il nostro team e la passione per i tour outdoor in Italia e in Europa.',
}

const values = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Eccellenza',
    desc: "Ogni tour viene curato nei minimi dettagli. Dall’itinerario agli alloggi, ci assicuriamo che ogni aspetto del viaggio sia all’altezza delle aspettative.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Passione',
    desc: 'Amiamo la natura e i viaggi attivi. Questa passione si riflette nella qualità e nell’autenticità di ogni esperienza che proponiamo.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Personalizzazione',
    desc: 'Ogni cliente è unico. Offriamo sia pacchetti standard che tour completamente personalizzati per gruppi, aziende e occasioni speciali.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Copertura Europea',
    desc: 'Dalle Alpi alle coste del Mediterraneo: creiamo itinerari outdoor in tutta Europa, scegliendo i luoghi più belli e le stagioni migliori.',
  },
]

const team = [
  {
    role: 'Fondatore & Direttore',
    bio: 'Viaggiatore instancabile, ha trasformato la passione per la montagna e le strade panoramiche in un progetto professionale dopo anni di itinerari in Europa.',
  },
  {
    role: 'Responsabile Tour Italia',
    bio: 'Specialista di itinerari italiani tra passi alpini, borghi e parchi naturali. Cura fornitori locali e garantisce esperienze autentiche sul territorio.',
  },
  {
    role: 'Coordinatrice Tour Europa',
    bio: 'Polivalente e multilingue, coordina i tour in Francia, Spagna e Germania con grande attenzione ai dettagli logistici.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="relative bg-festival-surface border-b border-border overflow-hidden">
          <div className="absolute inset-0 festival-stripe opacity-50" />
          <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              La Nostra Storia
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-foreground mb-4 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Chi Siamo
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Italy Trips nasce dall&apos;incontro tra la passione per la natura e l&apos;arte di organizzare viaggi indimenticabili.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                La Nostra Missione
              </span>
              <h2
                className="text-3xl font-bold uppercase tracking-wide text-foreground mb-5 text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Portarti dentro il viaggio
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Italy Trips è un servizio di tour outdoor fondato con una missione chiara: rendere accessibili esperienze autentiche in montagna e su strada, eliminando la complessità organizzativa e lasciandoti solo il bello del viaggio.
                </p>
                <p>
                  Sappiamo quanto possa essere complicato organizzare un itinerario ben fatto: scegliere i percorsi giusti, incastrare tappe e trasferimenti, trovare alloggi comodi e affidabili. Noi ci occupiamo di tutto, così tu puoi concentrarti solo sull’esperienza.
                </p>
                <p>
                  Con oltre 10 anni di esperienza nell’organizzazione di viaggi, abbiamo accompagnato centinaia di persone in esperienze uniche in Italia e in tutta Europa.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-square">
                <Image src="/images/about-team.jpg" alt="Il team Italy Trips" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-festival-surface border border-border p-5 rounded-sm shadow-xl max-w-xs">
                <p
                  className="text-xs font-bold tracking-widest uppercase text-primary mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Registrata in
                </p>
                <p className="text-sm font-bold text-foreground">K.C. NTOMATA LIMITED</p>
                <address className="text-xs text-muted-foreground mt-1 not-italic">
                  Stylianou Lena, 24 Christiana Court<br />
                  Flat/Office 202, Strovolos<br />
                  2019 Nicosia, Cyprus
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-festival-surface border-y border-border py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Cosa ci guida
              </span>
              <h2
                className="text-3xl font-bold uppercase tracking-wide text-foreground text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                I Nostri Valori
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors">
                  <div className="text-primary mb-3">{v.icon}</div>
                  <h3
                    className="font-bold text-base uppercase tracking-wide text-foreground mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Le Persone
            </span>
            <h2
              className="text-3xl font-bold uppercase tracking-wide text-foreground text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Il Nostro Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.role} className="bg-festival-surface border border-border rounded-sm p-6 text-center hover:border-primary/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-festival-muted border-2 border-primary/30 mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
                <p
                  className="text-sm font-bold tracking-wider uppercase text-primary mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2
              className="text-3xl font-bold uppercase tracking-wide text-primary-foreground mb-4 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vieni a far parte della nostra community
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Unisciti a centinaia di viaggiatori che hanno già vissuto esperienze indimenticabili con noi.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-accent transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contattaci ora <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
