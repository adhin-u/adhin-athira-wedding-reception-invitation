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

const PRODUCTION_URL = 'https://reception.adhinathira.in'

// Cloudflare Pages injects these at build time for every deployment (production and
// preview alike). On a preview build, CF_PAGES_URL is that preview's own *.pages.dev
// address — use it so og:image/twitter:image resolve on whatever URL is actually
// serving the build, instead of always pointing at the production domain.
const siteUrl =
  process.env.CF_PAGES_BRANCH === 'main' || !process.env.CF_PAGES_URL
    ? PRODUCTION_URL
    : process.env.CF_PAGES_URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Adhin & Athira | Wedding Reception',
  description: 'You are cordially invited to celebrate the wedding reception of Adhin and Athira on 14th September 2026 at AGP Garden Heritage Hall, Calicut.',
  openGraph: {
    title: 'Adhin & Athira | Wedding Reception',
    description: 'Join us for our wedding reception celebration on 14th September 2026',
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhin & Athira | Wedding Reception',
    description: 'Join us for our wedding reception celebration on 14th September 2026',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

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
