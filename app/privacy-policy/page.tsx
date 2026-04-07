import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – Italy Trips',
  description: 'Informativa sul trattamento dei dati personali di italysporttrips.com ai sensi del GDPR.',
}

const sections = [
  {
    title: '1. Titolare del Trattamento',
    content:
      'Il titolare del trattamento è K.C. NTOMATA LIMITED, con sede in Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus. Email di contatto: info@italysporttrips.com',
  },
  {
    title: '2. Dati Personali Raccolti',
    content:
      "Raccogliamo i seguenti dati personali: (a) Dati di navigazione — indirizzo IP, tipo di browser, sistema operativo, pagine visitate, raccolti automaticamente; (b) Dati forniti volontariamente — nome, cognome, indirizzo email, numero di telefono, inseriti tramite il modulo di contatto; (c) Dati di preferenza — consenso ai cookie, lingua del browser.",
  },
  {
    title: '3. Finalità del Trattamento',
    content:
      "I dati personali vengono trattati per: rispondere alle richieste di informazioni e preventivi inviate tramite il modulo di contatto; gestire il rapporto contrattuale con i clienti che prenotano un tour; inviare comunicazioni commerciali, solo previo consenso esplicito; adempiere a obblighi di legge; migliorare il sito web attraverso analisi statistiche anonime.",
  },
  {
    title: '4. Base Giuridica del Trattamento',
    content:
      "Il trattamento dei dati si basa su: esecuzione di un contratto o misure precontrattuali (art. 6.1.b GDPR) per la gestione delle richieste; consenso dell'interessato (art. 6.1.a GDPR) per l'invio di comunicazioni di marketing; legittimo interesse (art. 6.1.f GDPR) per la sicurezza del sito e la prevenzione delle frodi.",
  },
  {
    title: '5. Conservazione dei Dati',
    content:
      "I dati personali vengono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti. I dati delle richieste di contatto vengono conservati per 24 mesi dalla data di ricezione. I dati dei clienti vengono conservati per 10 anni per adempiere agli obblighi fiscali e contabili.",
  },
  {
    title: '6. Condivisione dei Dati',
    content:
      "I dati personali non vengono venduti né ceduti a terzi per finalità di marketing. Possono essere condivisi con: fornitori di servizi tecnici che supportano il sito (es. hosting, email); partner operativi necessari all'erogazione del servizio tour (hotel, agenzie locali) previa anonimizzazione ove possibile; autorità competenti ove richiesto dalla legge.",
  },
  {
    title: '7. Trasferimento Internazionale dei Dati',
    content:
      "Essendo la società registrata a Cipro (Unione Europea), il trattamento avviene nel rispetto del GDPR. Qualora alcuni strumenti tecnici comportino trasferimenti verso paesi terzi, adottiamo le misure di tutela adeguate previste dal GDPR (clausole contrattuali standard, ecc.).",
  },
  {
    title: "8. Diritti dell'Interessato",
    content:
      "Ai sensi del GDPR, l'utente ha il diritto di: accesso ai propri dati (art. 15); rettifica (art. 16); cancellazione (art. 17); limitazione del trattamento (art. 18); portabilità dei dati (art. 20); opposizione al trattamento (art. 21); revoca del consenso in qualsiasi momento. Per esercitare questi diritti, invia una email a info@italysporttrips.com",
  },
  {
    title: "9. Reclamo all'Autorità di Controllo",
    content:
      "L'utente ha il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.gpdp.it) o all'autorità di controllo del proprio paese di residenza.",
  },
  {
    title: '10. Sicurezza dei Dati',
    content:
      "Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali da accessi non autorizzati, divulgazione, alterazione o distruzione accidentale. Il sito utilizza il protocollo HTTPS per garantire la crittografia delle comunicazioni.",
  },
  {
    title: '11. Aggiornamenti alla Privacy Policy',
    content:
      "Ci riserviamo il diritto di aggiornare questa informativa in qualsiasi momento. La versione aggiornata sarà pubblicata su questa pagina con nuova data di aggiornamento. Modifiche sostanziali saranno comunicate tramite email agli utenti registrati.",
  },
]

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">Ultimo aggiornamento: 2026</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-14">
          <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
            <div className="bg-primary/10 border border-primary/30 rounded-sm p-5">
              <p className="text-foreground font-medium">
                La presente informativa sulla privacy è redatta ai sensi del Regolamento (UE) 2016/679 (GDPR) e
                descrive le modalità di raccolta e trattamento dei dati personali degli utenti del sito{' '}
                <strong>italysporttrips.com</strong>, gestito da <strong>K.C. NTOMATA LIMITED</strong>, con sede
                in Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.
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
                <p>{section.content}</p>
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
