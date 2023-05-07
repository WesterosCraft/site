import '../styles/globals.css'
import { MainNav } from '@/components/main-nav'
import { Karla } from 'next/font/google'

const karla = Karla({ weight: ['400', '500'], style: ['normal', 'italic'], subsets: ['latin'] })

export const metadata = {
  title: 'WesterosCraft',
  description: 'Creating the world of Westeros, block by block',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${karla.className} relative flex min-h-screen flex-col`}>
        <MainNav />
        {children}
      </body>
    </html>
  )
}
