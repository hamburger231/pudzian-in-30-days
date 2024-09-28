'use client'

import { useState, useEffect } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        let res = await fetch('../api/posts/route')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        let data = await res.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchPosts()
  }, [])

  if (error) return <div>Error: {error}</div>
  if (!posts) return <div>Loading...</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}