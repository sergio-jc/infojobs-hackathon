import { Logo } from './components/Logo'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Infojobs - Mejorador de Descripciones',
  description: 'Una pequeña herramienta que te ayuda a mejorar las descripciones de las ofertas en infojobs'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='py-10'>
          <h1 className='flex flex-col justify-center items-center text-xl'>
            <Logo />
            <strong className='font-semibold tracking-wider text-black/80'>Mejorador de Opciones</strong>
          </h1>
        </header>
        {children}
      </body>
    </html>
  )
}
