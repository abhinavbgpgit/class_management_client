import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios'
import { Dialog } from '@mui/material';
const ClassModal = ({ item, setOpen, setData }) => {

  const [className, setClassName] = useState(item.className)
  const [classTime, setClassTime] = useState(item.classTime)
  const [studentName, setStudentName] = useState(item.studentName)
  const [teacherName, setTeacherName] = useState(item.teacherName)
  const [studentData, setStudentData] = useState([])
  const [teacherData, setTeacherData] = useState([])
  const classesTime = ["10:00am to 11:00am", "11:00am to 12:00am", "1:00pm to 2:00pm", "2:00pm to 3:00pm", "3:00pm to 4:00pm", "4:00pm to 5:00pm"]
  console.log(item)
  var name = className;
  var time = classTime;
  var student = studentName;
  var teacher = teacherName;
  useEffect(() => {
    axios.get("http://localhost:5000/readstudent").then((response) => {
      setStudentData(response.data); 
      console.log(response.data); 
       
    })
    axios.get("http://localhost:5000/readteacher").then((response) => {
      setTeacherData(response.data);     
    })
  }, [])



  const updateData = (id) => {
    console.log(classTime)
    let dita = axios.put(`http://localhost:5000/updateclass/${id}`, { className, classTime, studentName, teacherName })
      .then(() => console.log(dita));
    setOpen(false)
    axios.get("http://localhost:5000/readclass").then((response) => {
      return setData(response.data);
    })
  }

  return (
    <>
      <Box
        sx={{

          width: 400,
          height: 300,
          backgroundColor: "rgb(40, 111, 173)",
          borderRadius: 5,
          marginLeft: "40%",
          marginTop: "10%",
          padding: "15px"

        }}
      >
        <div ><h2 style={{ color: "white", textAlign: "center" }}>Update Class</h2></div>
        <ul className='create_class'>
          <li><span>Class Name</span><input name='className' value={name} onChange={(e) => { setClassName(e.target.value) }}></input></li>
          
          <li><span>Class Time</span> <select name='classTime' onChange={(e) => { setClassTime(e.target.value) }} >
          <option  selected disabled hidden >{time}</option>
            {classesTime.map((item) => { return <option >{item}</option> })}
          </select></li>
          <li><span>Student Name</span> <select name='classTime'  onChange={(e) => { setStudentName(e.target.value) }} >
          <option  selected disabled hidden >{student}</option>
            {studentData.map((item) => { return <option >{item.name}</option> })}
          </select></li>
          <li><span>Teacher Name</span> <select name='classTime'  onChange={(e) => { setTeacherName(e.target.value) }} >
          <option  selected disabled hidden >{teacher}</option>
            {teacherData.map((item) => { return <option >{item.name}</option> })}
          </select></li>
          
         
        </ul>
        <button onClick={() => { updateData(item._id) }}>Update Class</button>

  



      </Box>
    </>
  )
}

export default ClassModal