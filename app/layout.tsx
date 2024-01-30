import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
/* import './globals.css' */
import './page.css';
import NavTab from '@/src/components/NavTab/NavTab';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%'
        }} >
          <nav style={{backgroundColor:'#09090C'}} >
            <NavTab />
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
