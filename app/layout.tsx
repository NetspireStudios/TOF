import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Omar Foundation - Empowering Communities Together',
  description: 'Join us in our mission to create positive change in communities around the world. Every donation makes a difference.',
  keywords: 'nonprofit, charity, donation, community, help, volunteer, Omar Foundation',
  authors: [{ name: 'The Omar Foundation' }],
  openGraph: {
    title: 'The Omar Foundation - Empowering Communities Together',
    description: 'Join us in our mission to create positive change in communities around the world.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Omar Foundation - Empowering Communities Together',
    description: 'Join us in our mission to create positive change in communities around the world.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-slate-800 min-h-screen">
        {children}
      </body>
    </html>
  )
} 