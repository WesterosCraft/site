import { Footer } from '@/components/footer'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import '../styles/globals.css'
import { Karla } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'

const karla = Karla({ weight: ['400', '500'], style: ['normal', 'italic'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Minecraft',
    'Game of Thrones',
    'Westeros',
    'WesterosCraft',
    'ASOIAF',
    'A Song of Ice and Fire',
  ],
  authors: [
    {
      name: 'Jacob Granberry',
      url: 'https://jacobgranberry.com',
    },
  ],
  creator: 'Jacob Granberry',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@westeroscraft',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${karla.className} relative flex min-h-screen flex-col antialiased`}>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
