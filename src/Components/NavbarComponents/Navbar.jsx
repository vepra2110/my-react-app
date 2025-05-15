import React, { useEffect } from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { IoMdPlanet } from "react-icons/io";
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
          <IoMdPlanet className='logo'/>
          <span className='navbar-title'>SPACE FEST</span>
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
        to='/schedule/0'
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
      <button
      onClick={handleProfileClick}
      className='user-logo-button'
      >
        <FaRegUser className='user-logo'/>
      </button>
    </nav>
  )
}

export default Navbar;