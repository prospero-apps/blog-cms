import React, { useEffect, useState } from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }    
  }, [])

  const handleLogin = () => {
    axios.post('https://web-production-ce1a.up.railway.app/login', {username, password}).then(user => {
      localStorage.setItem('token', user.data.token)
      navigate('/')
    }).catch(err => {
      alert("Please enter correct data.")
    })    
  }

  return (
    <div className='form-page'>
      <h1>Log In</h1>
      <form action="/login" method='post'>
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
        <button 
          type='button'
          className='form-button'
          onClick={handleLogin}
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
