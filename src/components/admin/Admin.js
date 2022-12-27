import React from 'react'
import AdminNavigation from './AdminNavigation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import CreateStudent from './CreateStudent';
import CreateClass from './CreateClass';
import CreateTeacher from './CreateTeacher';
import ManageStudent from './ManageStudent';
import ManageTeacher from './ManageTeacher';
import ManageClass from './ManageClass';


const Admin = () => {
  return (
    <>
     <div className='admin_text'><h1>Admin Setting</h1></div>
     <AdminNavigation/>
    
      <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route path="/createstudent" element={<CreateStudent/>} />
      <Route path="/createclass" element={<CreateClass/>} />
      <Route path="/creatteacher" element={<CreateTeacher/>} />
      <Route path="/managestudent" element={<ManageStudent/>} />
      <Route path="/manageclass" element={<ManageClass/>} />
      <Route path="/manageteacher" element={<ManageTeacher/>} />
      </Routes>
    
    </>
   
  )
}

export default Admin