import React, { useState, useEffect } from 'react'
import { Post } from '../interfaces/Post'

const PostInfo = () => {
  console.log('PostInfo')

  const [post, setPost] = useState<Post>()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then(setPost)
  }, [])

  return (
    <>
      <h1>Post Info</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  )
}

export default PostInfo
