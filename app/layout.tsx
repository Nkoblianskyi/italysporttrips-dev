import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Italy Trips – Tour d’Autore in Italia e in Europa',
  description:
    'Tour d’autore in Italia e in Europa: montagne, strade panoramiche e natura. Piccoli gruppi, guide selezionate e organizzazione senza stress.',
  keywords: 'tour d’autore, viaggi outdoor, trekking, cicloviaggi, moto tour, montagne, Italia, Europa',
  authors: [{ name: 'Italy Trips' }],
  openGraph: {
    title: 'Italy Trips – Tour d’Autore in Italia e in Europa',
    description: 'Tour d’autore in Italia e in Europa: natura, montagne e strade panoramiche.',
    url: 'https://italysporttrips.com',
    siteName: 'Italy Trips',
    locale: 'it_IT',
    type: 'website',
  },
  metadataBase: new URL('https://italysporttrips.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" data-scroll-behavior="smooth">
      <body className={`${barlow.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
