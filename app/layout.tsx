import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hope Foundation - Changing Lives Together',
  description: 'Join us in our mission to create positive change in communities around the world. Every donation makes a difference.',
  keywords: 'nonprofit, charity, donation, community, help, volunteer',
  authors: [{ name: 'Hope Foundation' }],
  openGraph: {
    title: 'Hope Foundation - Changing Lives Together',
    description: 'Join us in our mission to create positive change in communities around the world.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hope Foundation - Changing Lives Together',
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
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
} 