import Link from 'next/link'
import { Logo } from './Logo'

interface Links {
  label: string
  route: string
}

const links: Links[] = [
  { label: 'Home', route: '/' },
  { label: 'Empleos', route: '/jobs' }
  // { label: 'My offers', route: '/my-offers' },
  // { label: 'CV', route: '/cv' },
  // { label: 'Who sees me', route: '/who-sees-me' },
  // { label: 'Magic Search', route: '/magic' }
]

export function Navigation () {
  return (
    <header className='py-10'>
      <nav>
        <ul className='flex flex-row text-base text-txt-gray justify-center items-center gap-8'>
          <li>
            <Link href='/'>
              <Logo />
            </Link>
          </li>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
