import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Mateus Holanda | Portfolio',
  description: "Mateus Holanda's portfolio website",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
