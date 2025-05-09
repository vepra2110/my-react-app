import React from 'react'
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  function handleLogOut() {
    navigate('/login');
    localStorage.setItem('isLoggedIn', false);
  }

  return (
    <div className='profile-container'>
      <h1>Profile Page</h1>
      <div className="user-card">
        <div><FiUser /> <h1>{localStorage.getItem('username')} </h1></div>
        <div>Name: { localStorage.getItem('name') } </div>
        <div>College: { localStorage.getItem('college') } </div>
      </div>
      <button onClick={handleLogOut}>Log Out</button>
      
    </div>
  )
}

export default Profile
