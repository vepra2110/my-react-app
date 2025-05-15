import React from 'react'
import { FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import './ProfileStyle.css'

const Profile = () => {
  const navigate = useNavigate();

  function handleLogOut() {
    navigate('/login');
    localStorage.setItem('isLoggedIn', false);
  }

  return (

    <div className='profile-container profile-background'>
      <label className='page-title'><b>User Profile</b></label>

      <div className="user-card">
        <div className='user-name-display'>
          <FiUser className='profile-user-logo' />
          <h1 className='username'>{localStorage.getItem('username')} </h1>
        </div>
        <div className='name-display'>Name: { localStorage.getItem('name') } </div>
        <div className='college'>College: { localStorage.getItem('college') } </div>
        <button onClick={handleLogOut} className='logout-button'>Log Out</button>
      </div>
    </div>
  )
}

export default Profile
