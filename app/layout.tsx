import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
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
    'investigación criminal',
    'perito judicial',
    'análisis forense',
    'asesoría legal especializada',
  ],
  authors: [{ name: 'Estudio Criminalístico Perú' }],
  creator: 'Estudio Criminalístico Perú',
  publisher: 'Estudio Criminalístico Perú',
  openGraph: {
    title: 'Estudio Criminalístico Perú | Peritajes Profesionales y Defensa Legal',
    description:
      'Expertos en peritajes forenses y defensa legal en todo el Perú. Resultados con precisión, ética y comprobados.',
    url: 'https://www.estudiocriminalisticoperu.com',
    siteName: 'Estudio Criminalístico Perú',
    images: [
      {
        url: '/images/og-image.jpg', // cambia por tu imagen real en /public/images
        width: 1200,
        height: 630,
        alt: 'Estudio Criminalístico Perú - Peritajes y Defensa Legal',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  icons: {
    icon: '/icon.png', // tu logo en la carpeta /public
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Fuentes */}
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
