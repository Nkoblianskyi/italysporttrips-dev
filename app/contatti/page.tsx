'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Mail, Phone, Clock, CheckCircle2, X, Send } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-festival-dark/80 backdrop-blur-sm">
      <div className="bg-festival-surface border border-border rounded-sm max-w-md w-full p-8 text-center relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h2
          className="text-2xl font-bold uppercase tracking-wide text-foreground mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Messaggio Inviato!
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Grazie per averci contattato. Il nostro team ti risponderà entro{' '}
          <strong className="text-foreground">24 ore lavorative</strong>.
        </p>
        <button
          onClick={onClose}
          className="bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-accent transition-colors w-full"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Chiudi
        </button>
      </div>
    </div>
  )
}

function ContactFormContent() {
  const searchParams = useSearchParams()
  const tourSlug = searchParams.get('tour') || ''

  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    tour: tourSlug,
    messaggio: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nome.trim()) e.nome = 'Campo obbligatorio'
    if (!form.cognome.trim()) e.cognome = 'Campo obbligatorio'
    if (!form.email.trim()) e.email = 'Campo obbligatorio'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email non valida'
    if (!form.messaggio.trim()) e.messaggio = 'Campo obbligatorio'
    if (!form.privacy) e.privacy = 'Devi accettare la privacy policy'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSuccess(true)
    setForm({ nome: '', cognome: '', email: '', telefono: '', tour: '', messaggio: '', privacy: false })
  }

  const inputClass = (name: string) =>
    `w-full bg-input border ${errors[name] ? 'border-destructive' : 'border-border'
    } rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`

  return (
    <>
      {success && <SuccessModal onClose={() => setSuccess(false)} />}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
              Nome <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="Mario"
              className={inputClass('nome')}
              value={form.nome}
              onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
            />
            {errors.nome && <p className="text-xs text-destructive mt-1">{errors.nome}</p>}
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
              Cognome <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="Rossi"
              className={inputClass('cognome')}
              value={form.cognome}
              onChange={(e) => setForm((f) => ({ ...f, cognome: e.target.value }))}
            />
            {errors.cognome && <p className="text-xs text-destructive mt-1">{errors.cognome}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            placeholder="mario.rossi@email.com"
            className={inputClass('email')}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
            Telefono
          </label>
          <input
            type="tel"
            placeholder="+39 340 1234567"
            className={inputClass('telefono')}
            value={form.telefono}
            onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
            Tour di Interesse
          </label>
          <select
            className="w-full bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            value={form.tour}
            onChange={(e) => setForm((f) => ({ ...f, tour: e.target.value }))}
          >
            <option value="">Seleziona un tour...</option>
            <option value="grande-festa-del-calcio-roma">Grande Festa del Calcio – Roma</option>
            <option value="torneo-tennis-parigi">Torneo Tennis Parigi</option>
            <option value="gran-premio-monza">Gran Premio di Monza</option>
            <option value="tour-ciclismo-alpi">Tour Ciclismo sulle Alpi</option>
            <option value="basketball-madrid">Basketball Night Madrid</option>
            <option value="atletica-berlino">Campionati Europei di Atletica – Berlino</option>
            <option value="tour-personalizzato">Tour personalizzato</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
            Messaggio <span className="text-primary">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Descrivici le tue esigenze: numero di persone, date preferite, richieste speciali..."
            className={inputClass('messaggio')}
            value={form.messaggio}
            onChange={(e) => setForm((f) => ({ ...f, messaggio: e.target.value }))}
          />
          {errors.messaggio && <p className="text-xs text-destructive mt-1">{errors.messaggio}</p>}
        </div>

        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
              className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              Ho letto e accetto la{' '}
              <a href="/privacy-policy" className="text-primary underline hover:no-underline" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>{' '}
              e autorizzo il trattamento dei miei dati personali ai sensi del GDPR.
            </span>
          </label>
          {errors.privacy && <p className="text-xs text-destructive mt-1">{errors.privacy}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase py-4 rounded-sm hover:bg-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {submitting ? (
            <>
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Invio in corso...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Invia Richiesta
            </>
          )}
        </button>
      </form>
    </>
  )
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="relative bg-festival-surface border-b border-border overflow-hidden">
          <div className="absolute inset-0 festival-stripe opacity-50" />
          <div className="relative max-w-6xl mx-auto px-4 py-16">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Parliamo
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-foreground mb-3 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contattaci
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Pronto a pianificare la tua prossima avventura sportiva? Scrivici e ti risponderemo entro 24 ore con un preventivo personalizzato.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-festival-surface border border-border rounded-sm p-6">
                <h2
                  className="text-lg font-bold uppercase tracking-wide text-foreground mb-5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Informazioni
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <address className="not-italic">
                      <p className="font-bold text-sm text-foreground">K.C. NTOMATA LIMITED</p>
                      <p className="text-sm text-muted-foreground">Stylianou Lena, 24 Christiana Court</p>
                      <p className="text-sm text-muted-foreground">Flat/Office 202, Strovolos</p>
                      <p className="text-sm text-muted-foreground">2019 Nicosia, Cyprus</p>
                    </address>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:info@italysporttrips.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      info@italysporttrips.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+39061234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +39 06 1234567
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">Orari di assistenza</p>
                      <p className="text-sm text-muted-foreground">Lun–Ven: 09:00–18:00</p>
                      <p className="text-sm text-muted-foreground">Sab: 10:00–14:00</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-sm p-5">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p
                      className="text-sm font-bold tracking-wider uppercase text-foreground mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Risposta garantita
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Ogni richiesta riceve una risposta personalizzata entro 24 ore lavorative da parte del nostro team di esperti.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-festival-surface border border-border rounded-sm p-6 md:p-8">
                <h2
                  className="text-xl font-bold uppercase tracking-wide text-foreground mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Invia una Richiesta
                </h2>
                <Suspense fallback={<div className="text-muted-foreground text-sm">Caricamento...</div>}>
                  <ContactFormContent />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
