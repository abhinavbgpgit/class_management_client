import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './manageclass.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SingleClass from './SingleClass';


const ManageClass = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [data, setData] = useState([])
  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  useEffect(() => {
    axios.get("http://localhost:5000/readclass").then((response) => {
      setData(response.data);      
    })
   
  }, [])
  const deleteClass = (id) => {

    let dita = axios.delete(`http://localhost:5000/deleteclass/${id}`)
      .then(() => setData(dita));
    console.log(id)
  }


  return (
    <>
      <div>
        <div><h2>Manage Classes</h2></div>
        <div className='manage_class_header'>
          <ul className='manage_class_rows'>
            <li><b><h3>S.N.</h3></b></li>
            <li><b><h3>Class Name.</h3></b></li>
            <li><b><h3>Class Time</h3></b></li>
            <li><b><h3>Student Name.</h3></b></li>
            <li><b><h3>Teacher Name.</h3></b></li>
            <li>........ </li>
            <li>........</li>

          </ul>
        </div>
        {
          data.map((item, index) => {
            return (
              <>
                <SingleClass item={item} index={index} setData={setData}/>
              </>
            )
          })
        }
      </div>



    </>
  )
}

export default ManageClass