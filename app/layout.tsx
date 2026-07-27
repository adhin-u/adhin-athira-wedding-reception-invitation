import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato, Pinyon_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
})

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Adhin & Athira | Wedding Reception',
  description: 'You are cordially invited to celebrate the wedding reception of Adhin and Athira on 14th September 2026 at AGP Garden Heritage Hall, Calicut.',
  generator: 'v0.app',
  openGraph: {
    title: 'Adhin & Athira | Wedding Reception',
    description: 'Join us for our wedding reception celebration on 14th September 2026',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7a9a7a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} ${pinyonScript.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
