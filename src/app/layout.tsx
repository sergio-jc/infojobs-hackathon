import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Infojobs - Mejorador de Descripciones',
  description:
    'Una pequeña herramienta que te ayuda a mejorar las descripciones de las ofertas en infojobs'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
