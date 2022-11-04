import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AddComment from './AddComment'
import '../style.css'
import Comment from './Comment'

const PostPage = () => {
  const [post, setPost] = useState()
  const [comments, setComments] = useState();
  const [addedComment, setAddedComment] = useState(false)
  const [deletedComment, setDeletedComment] = useState(false)
  let { id } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    setAddedComment(false)
    setDeletedComment(false)
    getPost()
    getComments()
  }, [addedComment, deletedComment])

  const getPost = async() => {
    let result = await fetch(`https://web-production-ce1a.up.railway.app/posts/${id}`)
    result = await result.json()
    setPost(result)
  }

  const getComments = async() => {
    let result = await fetch(`https://web-production-ce1a.up.railway.app/posts/${id}/comments`)
    result = await result.json()
    setComments(result)
  }

  const deletePost = async() => {
    let result = await fetch(`https://web-production-ce1a.up.railway.app/posts/${id}`, {
      method: 'delete'
    })
    result = await result.json()
    if (result) {      
      navigate('/')
      alert('Post deleted.')
    }
  }

  const updatePost = () => {
    navigate(`/updatePost/${post._id}`)
  }

  return (
    <div className='page'>
      { post &&
        <div className='postpage'>
          <h1>{post.title}</h1>      
          <p>{post.content}</p>
          <p className='post-item-username'>by {post.user.username}</p>
          <p>{post.date.slice(0, 10)}</p> 
          <div className='post-buttons'>
            <button 
              type='button'
              className='form-button'
              onClick={deletePost}
            >
              Delete Post
            </button>
            <button 
              type='button'
              className='form-button'
              onClick={updatePost}
            >
              Update Post
            </button>
          </div>
          {comments &&
            <h2>Comments ({comments.length})</h2>
          }          
          <AddComment postId={post._id} setAddedComment={setAddedComment}/>

          { comments && 
              comments.map((comment) => {
                return <Comment key={comment._id} comment={comment} setDeletedComment={setDeletedComment} />
              })
          }
        </div>
      }     
    </div>
  )
}

export default PostPage
