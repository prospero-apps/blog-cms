import React, { useEffect, useState } from 'react'
import '../style.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [])

  const collectData = async () => {
    let result = await fetch("https://web-production-ce1a.up.railway.app/signup", {
      method: 'post',
      body: JSON.stringify({username, password, confirm}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json()
    navigate('/')
  }

  return (
    <div className='form-page'>
      <h1>Sign Up</h1>
      <form action="" method='post'>
        <label>
          Username:
          <input 
            type="text" 
            placeholder='John Smith' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input 
            type="password" 
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </label>
        <button 
          type='button'
          className='form-button'
          onClick={collectData}
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
