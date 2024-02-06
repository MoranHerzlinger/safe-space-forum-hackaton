import Image from 'next/image'
import Link from 'next/link'
import Logo from './space-logo.png'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
          <Image
        src={Logo}
        alt='safe-space logo'
        width={250}
        placeholder='blur'
        quality={100}
        className={style.logo}
      />
      
      <Link href="/">Dashboard </Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">New Ticket</Link>
    </nav>
  )
}