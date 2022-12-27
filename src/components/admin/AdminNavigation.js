import React from 'react'
import './AdminNavigation.css'
import {Link} from 'react-router-dom'

const AdminNavigation = () => {
  return (
    <div className='div_main'>
        <ul className='nav'>
            <li ><Link className='link' to="createstudent" >Create Students</Link></li>
            <li ><Link  className='link' to="creatteacher" >Create Teachers</Link></li>
            <li ><Link className='link' to="createclass" >Create Classes</Link></li>
            <li ><Link className='link' to="managestudent" >Manage Students</Link></li>
            <li ><Link className='link' to="manageteacher" >Manage Teachers</Link></li>
            <li ><Link className='link' to="manageclass" >Manage Classes</Link></li>
        </ul>

    </div>
  )
}

export default AdminNavigation