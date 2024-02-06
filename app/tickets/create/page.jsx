import CreateForm from './CreateForm'
import Logo from './add-new-post.png'
import Image from 'next/image'

export default async function CreateTicket() {
  return (
    <main>
      <Image src={Logo} 
      width={250}
      alt='Create New Post'
      style={{ display: 'block', margin: 'auto' }} />
       <br/>
       <CreateForm />
    </main>
  )
}