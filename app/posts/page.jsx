'Use Client'
import { Suspense } from "react"
import PostList from "./PostList"
import Loading from "../loading"

export default function Posts() {
  return (
    <main>
      <nav>
        <div>
          <h2>Posts</h2>
          <p><small>Read and Learn</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </main>
  )
}