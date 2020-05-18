import React, { useState, useEffect } from 'react'
import { Post } from '../Post.interface'

const AllPosts = () => {
  console.log('AllPosts')

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(setPosts)
  }, [])

  return (
    <>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  )
}

export default AllPosts
