import React from 'react'
import './login.css'
const Student = () => {
  return (
    <div className='login'> Student Login 
     <div><label>Name</label><input type="text" placeholder='Enter your name...'></input></div>   
        <div><label>Password</label><input type="password" placeholder='Enter your password...'></input></div>
        <div><button>Login</button></div>
    </div>
  )
}

export default Student