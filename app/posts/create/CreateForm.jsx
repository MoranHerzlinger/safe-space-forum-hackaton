"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newPost = { title, body, tags, user_email: 'moran@besafe.dev' }

    const res = await fetch('http://localhost:4000/posts', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPost)
    })

    if (res.status === 201) {
     // router.refresh() // we need this if using cached version in order to fetch the new post
      router.push('/posts')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Tags:</span>
        <select 
          onChange={(e) => setTags(e.target.value)}
          value={tags}
        >
          <option value="low">Fishing</option>
          <option value="medium">Grooming</option>
          <option value="high">Sexual Harassment </option>
          <option value="high">Cyberbullying</option>
          <option value="high">Misinformation</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Post</span>}
    </button>
    </form>
  )
}