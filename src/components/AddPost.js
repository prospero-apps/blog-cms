import React, { useState } from 'react'
import '../style.css';
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(false)  
  const navigate = useNavigate();

  const addPost = async () => {
    if (!title || !content) {
      setError(true)
      return false
    }

    const token = localStorage.getItem('token')  
    const decodedToken = jwt_decode(token) 
    const user = decodedToken.id

    let result = await fetch("https://web-production-ce1a.up.railway.app/posts", {
      method: 'post',
      body: JSON.stringify({title, content, published, user}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    navigate('/')
  }

  return (
    <div className='form-page'>
      <h1>Add Post</h1>
      <form action="/posts" method='post'>
        <label>
          Title:
          <input 
            type="text" 
            placeholder='My New Post' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && !title && <span className='error'>Title is required</span>}
        </label>
        <label>
          Content:
          <textarea
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {error && !content && <span className='error'>Content is required</span>}
        </label>
        <label className='checkbox-label'>
          Publish {' '}
          <input 
            type="checkbox" 
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
        </label>
        <button 
          type='button'
          className='form-button'
          onClick={addPost}
        >
          Add Post
        </button>
      </form>
    </div>
  )
}

export default AddPost
