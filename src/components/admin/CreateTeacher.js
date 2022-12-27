import React, { useState ,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
import { green } from '@mui/material/colors';
import './AdminNavigation.css'
import axios from 'axios'

const CreateTeacher = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setaddress] = useState("")
  const[data,setData]=useState([]) 

    const storeNewTeacherData=()=>
        {     
        console.log(name,email,phoneNumber,address)
      axios.post("http://localhost:5000/createteacher",{name: name, email:email,phoneNumber:phoneNumber,address:address} )
      .then((response) => {console.log(response.data)
        
      });
    }

return (
  <div>
      <Box
    sx={{
      
      width: 400,
      height: 300,
      backgroundColor: "rgb(40, 111, 173)",
      borderRadius:5,
      margin:"100px",
      padding:"15px"
      
    }}
  >
 <div><h2 style={{color:"white",border:"2px dashed white", "border-radius":"10px"}}>Create New Teacher</h2></div>
 <ul className='create_class'>
  <li><span> Name</span><input name='name' onChange={(e)=>{setName(e.target.value)}}></input></li>
  <li><span>Email</span><input name='email' onChange={(e)=>{setEmail(e.target.value)}}></input></li>
  <li><span>Phone</span><input name='phoneNumber' onChange={(e)=>{setPhoneNumber(e.target.value)}}></input></li>
  <li><span>Address</span><input name='address' onChange={(e)=>{setaddress(e.target.value)}}></input></li>      
  </ul>
  <button onClick={(e)=>{storeNewTeacherData()}}>Create new teacher</button>
  
       
    
</Box>
  </div>
)
}

export default CreateTeacher