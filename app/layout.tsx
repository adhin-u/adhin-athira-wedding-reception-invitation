import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato, Pinyon_Script } from 'next/font/google'
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
  metadataBase: new URL('https://reception.adhinathira.in/'),
  title: 'Adhin & Athira | Wedding Reception',
  description: 'You are cordially invited to celebrate the wedding reception of Adhin and Athira on 14th September 2026 at AGP Garden Heritage Hall, Calicut.',
  openGraph: {
    title: 'Adhin & Athira | Wedding Reception',
    description: 'Join us for our wedding reception celebration on 14th September 2026',
    url: 'https://reception.adhinathira.in/',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 1200,
        alt: 'Adhin & Athira Wedding Reception',
      },
    ],
  },
  icons: {
    icon: '/icon.svg?v=2',
  },
}

export const viewport: Viewport = {
  themeColor: '#101a2d',
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
      </body>
    </html>
  )
}
