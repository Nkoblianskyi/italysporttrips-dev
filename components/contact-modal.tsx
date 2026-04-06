'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Send, CheckCircle2 } from 'lucide-react'
import { tours } from '@/lib/tours'

interface ContactModalProps {
  open: boolean
  onClose: () => void
  preselectedTour?: string
}

function SuccessScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-5">
        <CheckCircle2 className="w-8 h-8 text-primary" />
      </div>
      <h3
        className="text-2xl font-bold uppercase tracking-wide text-foreground mb-2"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Messaggio Inviato!
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs">
        Grazie per averci contattato. Il nostro team ti risponderà entro{' '}
        <strong className="text-foreground">24 ore lavorative</strong>.
      </p>
      <button
        onClick={onClose}
        className="bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase px-8 py-3 rounded-sm hover:bg-accent transition-colors"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Chiudi
      </button>
    </div>
  )
}

export default function ContactModal({ open, onClose, preselectedTour = '' }: ContactModalProps) {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    tour: preselectedTour,
    messaggio: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  // Sync preselectedTour when modal opens
  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, tour: preselectedTour }))
      setErrors({})
      setSuccess(false)
    }
  }, [open, preselectedTour])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleClose = useCallback(() => {
    setSuccess(false)
    setErrors({})
    onClose()
  }, [onClose])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleClose])

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
    `w-full bg-input border ${
      errors[name] ? 'border-destructive' : 'border-border'
    } rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Modulo di contatto"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-festival-dark/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div className="bg-background border border-border rounded-t-xl sm:rounded-sm w-full sm:max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Modal header */}
        <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-background z-10">
          <div>
            <h2
              className="text-lg font-bold uppercase tracking-wide text-foreground leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Richiedi Informazioni
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">Risposta entro 24 ore lavorative</p>
          </div>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Chiudi modulo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-5">
          {success ? (
            <SuccessScreen onClose={handleClose} />
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
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
                  <label
                    className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
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
                <label
                  className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
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
                <label
                  className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
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
                <label
                  className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Tour di Interesse
                </label>
                <select
                  className="w-full bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  value={form.tour}
                  onChange={(e) => setForm((f) => ({ ...f, tour: e.target.value }))}
                >
                  <option value="">Seleziona un tour...</option>
                  {tours.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.title} – {t.location}
                    </option>
                  ))}
                  <option value="personalizzato">Tour personalizzato</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Messaggio <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={4}
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
          )}
        </div>
      </div>
    </div>
  )
}
