import React from 'react'
import SignIn from './SignInComponent/SignIn'
import SignUp from './SignUpComponent/SignUp'

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
