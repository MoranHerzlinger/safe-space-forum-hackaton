'use client'
import { notFound } from "next/navigation"
import CreateComment from "./CreateComment"


export const dynamicParams = true // default val = true
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/posts')
  const posts = await res.json()
  return posts.map((post) => ({
    id: post.id
  }))
}

async function getPosts(id) {
  const res = await fetch(`http://localhost:4000/posts/${id}`, {
    next: {
      revalidate: 0
    }
  })

  if (!res.ok) {
    notFound()
  }
  return res.json()
}

//get comments
async function getComments(id) {
  const res = await fetch(`http://localhost:4000/comments`, {next: {
    revalidate: 0
  }});

  const comments = await res.json();

  // Filter comments based on the provided postId
  const commentsForPost = comments.filter(comment => comment.postId === id);
  
  return commentsForPost;
}




export default async function PostDetails({ params }) {
  const post = await getPosts(params.id)
  const comments = await getComments(params.id);
  
  

  return (
    <main>
        <h2 className="headlines">Post Details</h2>
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className={`pill ${post.tags}`}>
          #{post.tags} 
        </div>
      </div>
        <CreateComment postId={params.id} />
      <section>
        <h2 className="headlines">Comments</h2>
        <ul>
          {comments.map((comment) => (
           
            <li className="card" key={comment.id}>
              <p>{comment.body}</p>
            </li>
            
          ))}
        </ul>
      </section>
    </main>
  )
}
