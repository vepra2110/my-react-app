import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {
  
  return (
    <div className='page-container'>
      {console.log(localStorage.getItem('username'))}
      
      {localStorage.getItem('username') ? 
        <SignIn /> : 
        <SignUp />}
    </div>
  )
}

export default Login
