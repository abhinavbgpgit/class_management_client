import React, { useState ,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
import { green } from '@mui/material/colors';
import './AdminNavigation.css'
import axios from 'axios'
const CreateClass = () => {
    const [className, setClassName] = useState("")
    const [classTime, setClassTime] = useState("")
    const [studentName, setStudentName] = useState("")
    const [teacherName, setTeacherName] = useState("")
    const[data,setData]=useState([])
    const [studentData, setStudentData] = useState([])
    const [teacherData, setTeacherData] = useState([])
    const classesTime=["10:00am to 11:00am","11:00am to 12:00am","1:00pm to 2:00pm","2:00pm to 3:00pm","3:00pm to 4:00pm","4:00pm to 5:00pm"]
   
    useEffect(() => {
      axios.get("http://localhost:5000/readstudent").then((response) => {
        setStudentData(response.data); 
        console.log(response.data); 
         
      })
      axios.get("http://localhost:5000/readteacher").then((response) => {
        setTeacherData(response.data);     
      })
    }, [])
      const sendData=()=>
      {
        console.log(className,classTime,studentName,teacherName)
        axios.post("http://localhost:5000/createclass",{className: className, classTime: classTime, studentName:studentName,teacherName:teacherName} ).then((response) => {console.log(response.data)
          
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
   <div><h2 style={{color:"white",border:"2px dashed white", "border-radius":"10px"}}>Create New Class</h2></div>
   <ul className='create_class'>
    <li><span>Class Name</span><input name='className' onChange={(e)=>{setClassName(e.target.value)}}></input></li>
    <li><span>Class Time</span> <select  name='classTime' onChange={(e)=>{setClassTime(e.target.value)}} >
    <option  selected disabled hidden >Choose..</option>
            {  classesTime.map((item)=>
                {return  <option >{item}</option>})}           
          </select></li>
          <li><span>Student Name</span> <select name='studentName'   onChange={(e) => { setStudentName(e.target.value) }} >
          <option  selected disabled hidden >Choose..</option>
            {studentData.map((item) => { return <option >{item.name}</option> })}
          </select></li>
          
          <li><span>Teacher Name</span> <select name='teacherName' onChange={(e) => { setTeacherName(e.target.value) }} >
          <option  selected disabled hidden>Choose..</option>
            {teacherData.map((item) => { return <option >{item.name}</option> })}
          </select></li>       
    </ul>
    <button onClick={(e)=>{sendData(e)}}>Create Class</button>
    
         
      
</Box>
    </div>
  )
}

export default CreateClass