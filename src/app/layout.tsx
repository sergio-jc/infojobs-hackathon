import { Navigation } from '@/components/Navigation'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Infojobs Compere',
  icons: {
    icon: '/favicon.ico'
  },
  description:
    'Compara ofertas de trabajo utilizando IA'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
