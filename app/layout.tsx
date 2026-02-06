import type { Metadata } from 'next'
import { Fraunces, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Pranay Sanghvi | Senior Software Developer',
  description:
    'Co-founder building resilient, high-performance platforms for hiring, logistics, and enterprise transformation.',
  metadataBase: new URL('https://thepranay.com'),
  openGraph: {
    title: 'Pranay Sanghvi | Senior Software Developer',
    description:
      'Co-founder building resilient, high-performance platforms for hiring, logistics, and enterprise transformation.',
    url: 'https://thepranay.com',
    siteName: 'Pranay Sanghvi',
    images: [
      {
        url: '/og-pranay.png',
        width: 1200,
        height: 630,
        alt: 'Pranay Sanghvi portfolio preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranay Sanghvi | Senior Software Developer',
    description:
      'Co-founder building resilient, high-performance platforms for hiring, logistics, and enterprise transformation.',
    images: ['/og-pranay.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main className="pt-16 md:pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
