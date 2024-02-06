'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CreateComment({postId, getComment }) {
  const router = useRouter()
  const [body, setBody] = useState('')



  
  const handleSubmit = async (e)  => {
    //e.preventDefault()
    const newComment = {postId, body, user_email: 'moran@besafe.dev' }

    const res = await fetch('http://localhost:4000/comments', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newComment)
  
    })
    

    if (res.status >= 200 && res.status <= 300) {
    //  router.push(`/posts/${postId}`);
      setBody('');

    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Comment:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      
      <button className="btn-primary" >Add</button>
    </form>
  )
}