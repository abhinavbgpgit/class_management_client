import React from 'react'
import './login.css'
import Student from './Student'
import Teacher from './Teacher'
import Admin from './Admin'
const Login = () => {
  return (
    <>
    <div className='main'>
    <Student/>
    <Teacher/>
    <Admin/>
    </div>
</>
    )
}

export default Login