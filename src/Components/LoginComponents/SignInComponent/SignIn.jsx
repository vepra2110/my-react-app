import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignInStyle.css'


const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignIn = () => {
        if(username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
            localStorage.setItem('isLoggedIn', true);
            navigate('/profile');
        } else {
            alert('Wrong Credentials! Please Re-enter')
        } 
    }

    const handleReturnSignUp = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('name');
        localStorage.removeItem('password');
        localStorage.removeItem('college');
        
        navigate('/login');
    }

  return (
    <div className='background'>
      <form className='signin-form'>

        <span style={{fontSize: '50px', marginBottom:'15px'}}>Sign In</span>

        <div>
          <span>Username: </span>
          <input
          type="text"
          name="username"
          placeholder="Username"
          className='input-box'
          onChange={e => setUsername(e.target.value)} />
        </div>

        <div>
          <span>Password: </span>
          <input
          type="password"
          name="password"
          placeholder="Password"
          className='input-box'
          onChange={e => setPassword(e.target.value)} />
        </div>

        <button type="submit" className='sign-in-button' onClick={handleSignIn}>Sign In</button>

        <span style={{marginTop: '25px'}}>New user? <button className='signup-here-button' onClick={handleReturnSignUp}>Sign Up here</button></span>

      </form>
    </div>
  )
}

export default SignIn;