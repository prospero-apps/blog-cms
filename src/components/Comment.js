import React from 'react'
import '../style.css'

const Comment = ({ comment, setDeletedComment }) => {

  const deleteComment = async() => {
    let result = await fetch(`https://web-production-ce1a.up.railway.app/posts/${comment.blogpost}/comments/${comment._id}`, {
      method: 'delete'
    }) 
    setDeletedComment(true)  
  }

  return (
    <div className='comment'>
      <p>{comment.content}</p>
      <p>{comment.user.username}</p>
      <p>{comment.date.slice(0, 10)}</p>
      <button 
        type='button'
        className='form-button'
        onClick={deleteComment}
      >
        Delete Comment
      </button>
    </div>
  )
}

export default Comment
