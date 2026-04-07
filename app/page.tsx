import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, Shield, Star } from 'lucide-react'
import { tours } from '@/lib/tours'
import TourCard from '@/components/tour-card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const tips = [
  {
    title: 'Parti con calma',
    desc: 'Arriva al punto di ritrovo con un buon margine: briefing, controllo attrezzatura e un caffè insieme rendono la partenza più serena.',
  },
  {
    title: 'Documenti e contatti',
    desc: 'Tieni offline documenti, assicurazione e numeri utili. In montagna la copertura può essere variabile e conviene essere pronti.',
  },
  {
    title: 'Zaino compatto e leggero',
    desc: 'Viaggiare leggeri fa la differenza: uno zaino essenziale, strati tecnici e un antipioggia sono spesso più utili di mille extra.',
  },
  {
    title: 'Trasferimenti semplici',
    desc: 'Se puoi, usa treni e bus: meno stress, più puntualità e zero pensieri su parcheggi o ZTL.',
  },
  {
    title: 'Carta di credito sempre con te',
    desc: 'In rifugi e piccoli borghi non sempre c’è ATM vicino. Porta una carta contactless e un po’ di contanti per emergenze.',
  },
  {
    title: 'Controlla il meteo',
    desc: 'In quota il tempo cambia in fretta. Porta sempre uno strato caldo, un impermeabile leggero e protezione solare.',
  },
]

const faqs = [
  {
    q: 'Come posso prenotare un tour?',
    a: 'Puoi contattarci tramite il modulo nella pagina Contatti oppure via email. Ti rispondiamo entro 24 ore lavorative con disponibilità e proposta su misura.',
  },
  {
    q: 'Cosa è incluso nel prezzo?',
    a: 'Dipende dal tour: nella pagina di ogni viaggio trovi la lista completa di inclusioni/esclusioni (alloggi, guide, assistenza, eventuali noleggi e servizi logistici).',
  },
  {
    q: 'Cosa succede in caso di maltempo?',
    a: 'La sicurezza viene prima di tutto. Se serve, adattiamo itinerario e attività (o riprogrammiamo) mantenendo la migliore esperienza possibile in base alle condizioni.',
  },
  {
    q: 'I tour sono adatti alle famiglie con bambini?',
    a: "Assolutamente sì! I tour con difficoltà 'Facile' sono perfetti per famiglie. Basta indicarcelo in fase di prenotazione e adatteremo il programma alle esigenze dei vostri bambini.",
  },
  {
    q: "È necessaria un'assicurazione?",
    a: 'Consigliamo sempre un’assicurazione viaggio personale. Per alcuni itinerari in quota o più tecnici può essere richiesta: te lo indichiamo chiaramente prima della conferma.',
  },
  {
    q: 'Posso personalizzare un tour?',
    a: "Certamente. Offriamo anche pacchetti su misura per gruppi aziendali, eventi privati e compleanni. Contattaci per un preventivo dedicato.",
  },
]

export default function HomePage() {
  const featuredTours = tours.slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Tour outdoor e avventure in Europa"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-festival-dark/70" />
          <div className="absolute inset-0 festival-stripe" />
          <div className="absolute top-16 left-0 right-0 border-t border-primary/30" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-24">
            <div className="max-w-2xl">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Tour Outdoor d’Autore
              </span>
              <h1
                className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-foreground leading-none mb-4 text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Vivi la montagna{' '}
                <span className="text-primary neon-glow">da protagonista</span>{' '}
                in Italia e in Europa
              </h1>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-lg">
                Tour guidati e curati nei dettagli: trekking in quota, cicloviaggi panoramici e moto tour tra passi alpini. Piccoli gruppi, ritmi giusti, esperienze autentiche.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tour"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase px-7 py-3 rounded-sm hover:bg-accent transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Esplora i Tour
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/chi-siamo"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground text-sm font-bold tracking-widest uppercase px-7 py-3 rounded-sm hover:border-primary hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Chi Siamo
                </Link>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-festival-surface/90 backdrop-blur-sm border-t border-border">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-around gap-4">
              {[
                { num: '500+', label: 'Clienti soddisfatti' },
                { num: '6', label: 'Tipi di esperienze' },
                { num: '12', label: 'Paesi europei' },
                { num: '4.9', label: 'Rating medio' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>{s.num}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image src="/images/about-team.jpg" alt="Il nostro team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-5 rounded-sm shadow-xl">
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>10+</div>
                <div className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)' }}>Anni di esperienza</div>
              </div>
            </div>
            <div>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Chi Siamo
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground mb-4 text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                La tua avventura, la nostra missione
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Italy Trips nasce dalla passione per i viaggi attivi e per la natura. Organizziamo tour outdoor in Italia e in Europa, curando ogni dettaglio: itinerari, guide, alloggi, trasferimenti e piccoli momenti che rendono il viaggio davvero tuo.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Itinerari curati e ritmi equilibrati',
                  'Guide esperte e locali selezionati',
                  'Gruppi piccoli per un servizio personale',
                  'Supporto 24/7 durante il tour',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/chi-siamo"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:text-accent transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Scopri di più <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* TOUR PREVIEW */}
        <section className="bg-festival-surface border-y border-border py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  I Nostri Tour
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground text-balance"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  I prossimi appuntamenti
                </h2>
              </div>
              <Link
                href="/tour"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-accent hover:text-primary transition-colors flex-shrink-0"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Vedi tutti <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* TRAVEL TIPS */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Consigli di Viaggio
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Come prepararsi al meglio
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <div key={tip.title} className="bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-colors">
                <div
                  className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center mb-3"
                >
                  <span className="text-primary font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className="font-bold text-base uppercase tracking-wide text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-primary py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { icon: <Star className="w-8 h-8" />, title: 'Qualità garantita', desc: 'Strutture selezionate, guide affidabili e logistica senza stress' },
                { icon: <Globe className="w-8 h-8" />, title: 'Tutta Europa', desc: "Itinerari tra Alpi, coste e parchi: nuove partenze durante l'anno" },
                { icon: <Shield className="w-8 h-8" />, title: 'Sicurezza prima di tutto', desc: 'Briefing, assistenza e adattamento itinerario in base alle condizioni' },
              ].map((item) => (
                <div key={item.title} className="text-primary-foreground">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h3
                    className="font-bold text-lg uppercase tracking-wide mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Domande frequenti
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-card border border-border rounded-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:text-primary transition-colors">
                  <span
                    className="font-bold text-sm uppercase tracking-wide text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {faq.q}
                  </span>
                  <span className="text-primary flex-shrink-0 group-open:rotate-45 transition-transform duration-200 text-xl leading-none font-bold">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-festival-surface border-y border-border py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground mb-4 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pronto per la tua prossima avventura?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Contattaci oggi e costruiamo insieme il tuo tour perfetto in Italia o in Europa.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-accent transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contattaci ora
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
