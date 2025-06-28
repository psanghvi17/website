import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Pranay',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/website/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
