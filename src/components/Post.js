import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className='post-item'> 
      <h1>{post.title}</h1> 
      { post.content.length > 100 ?
        <p>{post.content.slice(0, 100)}...</p>:
        <p>{post.content}</p>
      }     
      <p className='post-item-username'>by {post.user.username}</p>
      <p>{post.date.slice(0, 10)}</p>      
      <Link to={`/posts/${post._id}`}>View Post</Link>
    </div>
  )
}

export default Post
