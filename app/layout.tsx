import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Estudio Criminalístico Perú',
  description: 'Líder en peritajes forenses y defensa legal en Perú.',
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1QB6WHGBJG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1QB6WHGBJG');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
