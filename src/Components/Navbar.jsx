import React, { useEffect } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (localStorage.getItem('username')  && JSON.parse(localStorage.getItem('isLoggedIn'))) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  }

  return (
    <nav className='navbar-style'>

      <Link to='/'>
        <span className='title-container'>
          <BiLogoReact className='logo'/>
          <span className='navbar-title'>React Router</span>
        </span>
      </Link>

      <div className="navbar-links">
        <Link
        to='/'
        className='link'
        >
          Home
        </Link>
        <Link
        to='/schedule'
        className='link'
        >
          Schedule
        </Link>
        <Link
        to='/team'
        className='link'
        >
          Team
        </Link>
      </div>
      
      {/* {localStorage.getItem('username')  && JSON.parse(localStorage.getItem('isLoggedIn'))  ? 

        <Link
        to='/profile'
        >
          <FaRegUser className='user-logo'/>
        </Link>
      :
        <Link
        to='/login'
        >
          <FaRegUser className='user-logo'/>
        </Link>
      } */}

      <button onClick={handleProfileClick}><FaRegUser className='user-logo'/></button>
    </nav>
  )
}

export default Navbar;