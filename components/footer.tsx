import Link from 'next/link'
import { Trophy, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-festival-surface border-t border-border mt-0">
      {/* Ticker */}
      <div className="bg-primary overflow-hidden py-2">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-xs font-bold tracking-widest uppercase text-primary-foreground mx-6" style={{ fontFamily: 'var(--font-display)' }}>
              TOUR SPORTIVI &bull; ITALIA &bull; EUROPA &bull; CALCIO &bull; TENNIS &bull; MOTORSPORT &bull; CICLISMO &bull; BASKET &bull; ATLETICA &bull;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
              <span
                className="text-lg font-bold tracking-widest uppercase text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Italy<span className="text-primary">Sport</span>Trips
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tour sportivi esclusivi in Italia e in tutta Europa. Vivi la passione dello sport dal vivo con i migliori pacchetti di viaggio.
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <address className="not-italic">
                <p className="font-medium text-foreground">K.C. NTOMATA LIMITED</p>
                <p>Stylianou Lena, 24 Christiana Court</p>
                <p>Flat/Office 202, Strovolos</p>
                <p>2019 Nicosia, Cyprus</p>
              </address>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold tracking-widest uppercase text-foreground mb-4 text-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Navigazione
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/tour', label: 'Tour Sportivi' },
                { href: '/chi-siamo', label: 'Chi Siamo' },
                { href: '/contatti', label: 'Contatti' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/cookie-policy', label: 'Cookie Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold tracking-widest uppercase text-foreground mb-4 text-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contatti
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@italysporttrips.com" className="hover:text-primary transition-colors">
                  info@italysporttrips.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-festival-muted rounded-sm border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Siamo operativi dal lunedì al venerdì, ore 9:00–18:00. Sabato 10:00–14:00.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Italy Sport Trips – K.C. NTOMATA LIMITED. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-muted-foreground flex gap-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
