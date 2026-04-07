import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy – Italy Trips',
  description: "Informativa sull'utilizzo dei cookie sul sito italysporttrips.com.",
}

const sections = [
  {
    title: '1. Cosa sono i Cookie',
    content:
      "I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente (computer, smartphone, tablet) quando questo li visita. Vengono utilizzati per far funzionare il sito correttamente, per migliorare l'esperienza utente e per raccogliere informazioni statistiche sull'utilizzo del sito.",
    items: null,
  },
  {
    title: '2. Tipologie di Cookie Utilizzati',
    content: null,
    items: [
      { name: 'Cookie Tecnici (necessari)', desc: "Indispensabili per il funzionamento del sito. Senza questi cookie alcune funzionalità non sarebbero disponibili. Non richiedono il consenso dell'utente." },
      { name: 'Cookie Analitici', desc: "Utilizzati per raccogliere informazioni statistiche aggregate sull'utilizzo del sito (pagine visitate, tempo di permanenza, ecc.). Sono usati esclusivamente in forma anonima." },
      { name: 'Cookie di Preferenze', desc: "Permettono al sito di ricordare le scelte dell'utente (come la lingua o il consenso ai cookie) per migliorare l'esperienza di navigazione." },
      { name: 'Cookie di Marketing', desc: "Se attivi, vengono utilizzati per mostrare annunci pertinenti agli interessi dell'utente. Al momento non utilizziamo cookie di marketing di terze parti." },
    ],
  },
  {
    title: '3. Cookie di Terze Parti',
    content:
      'Il sito potrebbe caricare contenuti o strumenti di terze parti (es. mappe, video embedded, pulsanti di condivisione social) che installano i propri cookie. Non abbiamo controllo su questi cookie. Ti invitiamo a consultare le rispettive privacy policy di questi fornitori.',
    items: null,
  },
  {
    title: '4. Durata dei Cookie',
    content:
      'I cookie possono essere di sessione (vengono eliminati alla chiusura del browser) o persistenti (rimangono sul dispositivo per un periodo definito, solitamente da 30 giorni a 2 anni). Ogni tipo di cookie utilizzato da questo sito ha una durata specifica disponibile su richiesta.',
    items: null,
  },
  {
    title: '5. Gestione del Consenso',
    content:
      "Al primo accesso al sito, viene mostrato un banner che ti permette di accettare o rifiutare i cookie non necessari. Puoi modificare le tue preferenze in qualsiasi momento dalla pagina Cookie Policy. Il rifiuto dei cookie non necessari non pregiudica la navigazione del sito.",
    items: null,
  },
  {
    title: '6. Come Disabilitare i Cookie dal Browser',
    content:
      "Puoi disabilitare o eliminare i cookie direttamente dalle impostazioni del tuo browser: Chrome (Impostazioni > Privacy e Sicurezza > Cookie), Firefox (Impostazioni > Privacy e Sicurezza), Safari (Preferenze > Privacy), Edge (Impostazioni > Cookie e autorizzazioni del sito).",
    items: null,
  },
  {
    title: '7. Aggiornamenti a Questa Policy',
    content:
      "Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. Ti invitiamo a consultare periodicamente questa pagina.",
    items: null,
  },
  {
    title: '8. Contatti',
    content:
      "Per qualsiasi domanda relativa ai cookie e al trattamento dei tuoi dati personali, puoi contattarci all'indirizzo email: info@italysporttrips.com oppure per posta a: K.C. NTOMATA LIMITED, Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.",
    items: null,
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative bg-festival-surface border-b border-border overflow-hidden">
          <div className="absolute inset-0 festival-stripe opacity-50" />
          <div className="relative max-w-4xl mx-auto px-4 py-14">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 px-3 py-1 rounded-sm mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Legale
            </span>
            <h1
              className="text-4xl font-bold uppercase tracking-wide text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">Ultimo aggiornamento: 2026</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-14">
          <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
            <div className="bg-primary/10 border border-primary/30 rounded-sm p-5">
              <p className="text-foreground font-medium">
                Questo documento descrive la Cookie Policy di{' '}
                <strong>Italy Trips</strong> (dominio: italysporttrips.com), gestito da{' '}
                <strong>K.C. NTOMATA LIMITED</strong>, con sede in Stylianou Lena, 24 Christiana Court,
                Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="border-b border-border pb-8 last:border-0">
                <h2
                  className="text-lg font-bold uppercase tracking-wide text-foreground mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {section.title}
                </h2>
                {section.content && <p>{section.content}</p>}
                {section.items && (
                  <ul className="space-y-3 mt-3">
                    {section.items.map((item) => (
                      <li key={item.name} className="bg-festival-muted rounded-sm p-3">
                        <span className="font-medium text-foreground">{item.name}: </span>
                        {item.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
