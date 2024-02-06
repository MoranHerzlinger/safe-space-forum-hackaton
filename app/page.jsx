import Link from 'next/link';
import { Suspense } from "react";
import Loading from "./loading"
import GetPostsByIdList from "./posts/PostByIdList"


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
      <div className="flex justify-center my-8">
        <p>Hi Moran! welcome to our "Safe Space Forum"! Here you can share and help others whenever you feel uncomfortable online.
          We ask to maintain respect towards others and appropriate language.
          Thank you and we hope we helped you </p>
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