import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Estudio Criminalístico Perú | Peritajes Profesionales y Defensa Legal',
  description:
    'Somos el estudio criminalístico líder en Perú. Expertos en peritajes forenses y defensa legal con resultados comprobados. Atención en todo el país, ética y precisión garantizadas.',
  keywords: [
    'peritajes criminalísticos',
    'defensa legal',
    'peritos forenses',
    'abogados criminalistas',
    'servicios jurídicos',
    'Perú',
  ],
  authors: [{ name: 'Estudio Criminalístico Perú' }],
  creator: 'Estudio Criminalístico Perú',
  publisher: 'Estudio Criminalístico Perú',
  openGraph: {
    title: 'Estudio Criminalístico Perú | Peritajes Profesionales y Defensa Legal',
    description:
      'Expertos en peritajes forenses y defensa legal. Atención en todo el país con ética, precisión y resultados comprobados.',
    images: ['/images/ecp-logo.jpg'],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
