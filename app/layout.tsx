import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
export const metadata: Metadata = {
  title: 'Estudio Criminalístico Perú ',
  description: 'Somos el estudio criminalístico líder en Perú. Expertos en peritajes forenses y defensa legal con resultados comprobados. Atención en todo el país, ética y precisión garantizadas.',
  keywords: 'peritajes criminalísticos, defensa legal, peritos forenses, abogados criminalistas, servicios jurídicos, Perú',
  authors: [{ name: 'Estudio Criminalístico Perú' }],
  creator: 'Estudio Criminalístico Perú',
  publisher: 'Estudio Criminalístico Perú',
  openGraph: {
    title: 'Estudio Criminalístico Perú | Peritajes Profesionales y Defensa Legal',
    description: 'Expertos en peritajes forenses y defensa legal. Atención en todo el país con ética, precisión y resultados comprobados.',
    url: 'https://www.estudiocriminalisticoperu.com',
    siteName: 'Estudio Criminalístico Perú',
    images: [
      {
        url: '/images/og-image.jpg', // Cambia por la ruta de tu imagen en /public/images
        width: 1200,
        height: 630,
        alt: 'Estudio Criminalístico Perú - Peritajes Profesionales y Defensa Legal'
      }
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Criminalístico Perú | Peritajes Profesionales y Defensa Legal',
    description: 'Expertos en peritajes forenses y defensa legal. Atención en todo el país con ética, precisión y resultados comprobados.',
    images: [image.png], // Cambia por la misma imagen de Open Graph
    creator: '@', // Si tienes Twitter, ponlo aquí
  }
},
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
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
