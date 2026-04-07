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
  title: 'Italy Sport Trips – Tour Sportivi in Italia e in Europa',
  description:
    'Scopri i migliori tour sportivi in Italia e in Europa. Calcio, tennis, ciclismo e molto altro. Prenota la tua avventura sportiva con Italy Sport Trips.',
  keywords: 'tour sportivi, viaggi sportivi, calcio, tennis,ciclismo, Italia, Europa',
  authors: [{ name: 'Italy Sport Trips' }],
  openGraph: {
    title: 'Italy Sport Trips – Tour Sportivi in Italia e in Europa',
    description: 'Scopri i migliori tour sportivi in Italia e in Europa.',
    url: 'https://italysporttrips.com',
    siteName: 'Italy Sport Trips',
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
