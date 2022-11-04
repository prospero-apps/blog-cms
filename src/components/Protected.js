import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Protected = () => {
  let navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('https://web-production-ce1a.up.railway.app/protected', {headers : {
      Authorization: token,
    }}).then(res => {
      console.log(res)
    }).catch(err => {
      navigate('/login')
    })
  }, [])

  return (
    <div>
      <h1>Protected</h1>
    </div>
  )
}

export default Protected
