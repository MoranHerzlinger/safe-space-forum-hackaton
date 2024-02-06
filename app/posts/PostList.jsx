import Link from "next/link"

async function getPosts() {
await new Promise(resolve => setTimeout(resolve,1200))
    //imitate delay
    const res = await fetch('http://localhost:4000/posts', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }

  export default async function PostList() {
    const posts = await getPosts()
  
    return (
      <>
        {posts.map((post) => (
          <div key={post.id} className="card my-5">
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 200)}...</p>
              <div className={`pill ${post.tags}`}>
                {post.priority} tags
              </div>
            </Link>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="text-center">Will you be the first to share?</p>
        )}
      </>
    )
  }