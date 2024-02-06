import Link from 'next/link';
import { Suspense } from "react";
import Loading from "./loading"
import GetPostsByIdList from "./posts/PostByIdList"
import Logo from './IMG_0126.png'
import Image from 'next/image'

function PostsById() {
  const userEmail = "shahaf@gmail.com"
  return (
    <main>
      {/* <nav>
        <div>
          <h2>Posts</h2>
          <p><small>Read and Learn</small></p>
        </div>
      </nav> */}
      <Suspense fallback={<Loading />}>
        <GetPostsByIdList {...userEmail}/>
      </Suspense>
    </main>
  )
}


export default function Home() {
  
  return (
    <main>
      
      <h2 className='headlines'>Moran's Dashboard</h2>
      <div className="flex justify-center my-8" >
          <Image className="try" src={Logo} />
        <p style={{margin: "10px"}} className='text'>Hi Moran! <br/> welcome to our "Safe Space Forum"!<br/> 
        Here you can share and help others whenever you feel uncomfortable online.
        <br/> We ask to maintain respect towards others and appropriate language.
        <br/>Thank you and we hope we helped you </p>
      </div>
      {/* <div className="flex justify-center my-8">
        <Link href="/posts">
          <button className="btn-primary">View Posts</button>
        </Link>
      </div> */}
      <h2 className='headlines'>Your Posts</h2>
      <PostsById />
    </main>
  )
}