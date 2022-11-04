import React, { useState, useEffect } from 'react'
import '../style.css'
import Post from './Post'

const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async() => {
    let result = await fetch('https://web-production-ce1a.up.railway.app/posts')
    result = await result.json()
    setPosts(result)
  }

  console.log(posts);

  return (
    <div className='page'>
      <div className='homepage'>
        { posts &&
            posts.map((post) => {
              return <Post key={post._id} post={post} />
            })
        }
      </div>
    </div>
  )
}

export default HomePage
