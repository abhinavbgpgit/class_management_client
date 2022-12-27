import React, { useState ,useEffect} from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import ClassModal from './ClassModal'

const SingleClass = ({item,index,setData}) => {
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
      
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
     
      const deleteClass=(id)=>
      {
        
        let dita=axios.delete(`http://localhost:5000/deleteclass/${id}`)
            .then(() => setData(dita));
        console.log(id)
        axios.get("http://localhost:5000/readclass").then((response) => {
          return setData(response.data);
      })
      }
      
  return (
    <>
     <div className='manage_class_main'>
               <ul className='manage_class_rows'>
                    <li >{index+1}.</li>
                    <li >{item.className}</li>
                    <li>{item.classTime}</li>
                    <li>{item.studentName}</li>
                    <li>{item.teacherName}</li>
                    <li><button onClick={()=>deleteClass(item._id)}><DeleteForeverIcon sx={{ color:"red", cursor: "pointer" }}/></button> </li>
                    <li><button  onClick={()=> setOpen(true)}><BorderColorIcon sx={{ color:"blue", cursor: "pointer" }} /></button></li>

                </ul>
                </div>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <ClassModal item={item} setOpen={setOpen} setData={setData}/>
      </Modal>
      
    </>
  )
}

export default SingleClass