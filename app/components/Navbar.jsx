import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
          <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      
      <Link href="/">Dashboard</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/posts/create">New Post</Link>
    </nav>
  )
}