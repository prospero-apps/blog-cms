import React, { useState } from 'react'
import '../style.css';
import jwt_decode from 'jwt-decode'

const AddComment = ({ postId, setAddedComment }) => {
  const [content, setContent] = useState('');

  const addComment = async() => {   
    const token = localStorage.getItem('token')  
    const decodedToken = jwt_decode(token) 
    const user = decodedToken.id
    
    const blogpost = postId  
    let result = await fetch(`https://web-production-ce1a.up.railway.app/posts/${postId}/comments`, {
      method: 'post',
      body: JSON.stringify({content, blogpost, user}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    setContent('')
    setAddedComment(true)    
  }
  
  return (
    <div className='form-page' style={{alignItems: 'flex-start', marginBottom: '10px'}}>
      <p>Add comment...</p>
      <form action={`/posts/${postId}/comments`} method='post'>        
        <label>
          <textarea
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>        
        <button 
          type='button'
          className='form-button'
          onClick={addComment}
          disabled={!content}
        >
          Add Comment
        </button>
      </form>
    </div>
  )
}

export default AddComment
