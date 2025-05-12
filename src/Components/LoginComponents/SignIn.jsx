import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


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
    <div className='signin-container'>
      <span>Sign In</span>
      <div>
        <span>Username: </span>
        <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <span>Password: </span>
        <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSignIn}>Sign In</button>
      <span>New user? <button onClick={handleReturnSignUp}>Sign Up here</button></span>
    </div>
  )
}

export default SignIn;