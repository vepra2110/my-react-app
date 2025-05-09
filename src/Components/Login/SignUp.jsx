import React, { useState } from 'react'
import './SignUpStyle.css'
import { Link } from 'react-router'

const SingUp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');

  const handleSignUp = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('college', college);

    localStorage.getItem('isLoggedIn') ? 
    localStorage.setItem('isLoggedIn', !JSON.parse(localStorage.getItem('isLoggedIn'))) :
    localStorage.setItem('isLoggedIn', true);
  }

  return (
    <div className='signup-container'>
      <div className='title'>Sign Up</div>
      <div>
        <span>Name: </span>  
        <input
        type="text"
        name="name"
        onChange={e => setName(e.target.value)}
        placeholder="Name" />
      </div>
      <div>
        <span>Username: </span>  
        <input
        type="text"
        name="username"
        onChange={e => setUsername(e.target.value)}
        placeholder="Username" />
      </div>
      <div>
        <span>Password: </span>  
        <input
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="Password" />
      </div>
      <div>
        <span>College: </span>  
        <input
        type="text"
        name="college"
        onChange={e => setCollege(e.target.value)}
        placeholder="College" />
      </div>
      
      <Link
      to='/profile'
      >
        <button
        type="submit"
        onClick={handleSignUp}
        >Sign Up</button>
      </Link>
    </div>
  )
}

export default SingUp
