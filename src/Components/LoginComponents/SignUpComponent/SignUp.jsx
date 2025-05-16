import React, { useState } from 'react'
import './SignUpStyle.css'
import { useNavigate } from 'react-router-dom'

const SingUp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name !== '' && username !== '' && password !== '' && college !== '') {
      localStorage.setItem('name', name);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('college', college);
  
      localStorage.getItem('isLoggedIn') ? 
      localStorage.setItem('isLoggedIn', !JSON.parse(localStorage.getItem('isLoggedIn'))) :
      localStorage.setItem('isLoggedIn', true);

      navigate('/profile');
    } else {
      alert('Please fill in all the fields')
    }
  }

  return (
    <div className='signup-background signup-container'>
      <form className="signup-form">

        <div style={{fontSize: '50px', marginBottom:'15px'}}>Sign Up</div>

        <div className="input-row">
          <span>Name: </span>  
          <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          className="input" />
        </div>

        <div className="input-row">
          <span>Username: </span>  
          <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          className="input" />
        </div>

        <div className="input-row">
          <span>Password: </span>  
          <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="input" />
        </div>

        <div className="input-row">
          <span>College: </span>  
          <input
          type="text"
          name="college"
          onChange={e => setCollege(e.target.value)}
          placeholder="College"
          className="input" />
        </div>
        
        <button
        type="submit"
        onClick={handleSignUp}
        className="sign-up-button"
        >Sign Up</button>

      </form>
    </div>
  )
}

export default SingUp
