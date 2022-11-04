import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <nav>
      <img className='logo' src={logo} alt='logo'/>
      {        
        token ?
          <ul className='nav-links'>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/addpost'>Add Post</Link></li>
            <li><Link className='link' onClick={logout} to='/login'>Log Out</Link></li>
          </ul>
          :
          <ul className='nav-links'>
            <li><Link className='link' to='/signup'>Sign Up</Link></li>
            <li><Link className='link' to='/login'>Log In</Link></li>
          </ul>
      }                     
    </nav>
  )
}

export default Header
