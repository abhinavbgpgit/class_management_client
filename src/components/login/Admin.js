import React, { useState } from 'react'
import {useNavigation,redirect, useNavigate } from "react-router-dom";

import './login.css'
const Admin = () => {
  const [adminName, setAdminName]=useState('')
  const [adminPassword, setAdminPassword]=useState('')
  const navigate=useNavigate()
  const authAdmin=()=>
  {
  if(adminName==="ram" && adminPassword==="ram")
  { return navigate("/admin")
   alert("nahin ja rha")
   console.log(adminName,adminPassword)
}
  else{
    alert("chutiya ka baal")
  }
  }

  return (
    <>

    <div className='login'> Admin Login 
     <div><label>Name</label><input type="text" placeholder='Enter your name...' onChange={(e)=>setAdminName(e.target.value)}></input></div>   
        <div><label>Password</label><input type="password" placeholder='Enter your password...' onChange={(e)=>setAdminPassword(e.target.value)}></input></div>
        <div><button onClick={()=>authAdmin()} >Login</button></div>
    </div>
    </>
  )
}

export default Admin