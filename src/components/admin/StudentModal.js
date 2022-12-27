import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios'
import { Dialog } from '@mui/material';

const StudentModal = ({ item, setOpen, setData }) => {
    const [name, setName] = useState(item.name)
    const [email, setEmail] = useState(item.email)
    const [phoneNumber, setPhoneNumber] = useState(item.phoneNumber)
    const [address, setAddress] = useState(item.address)    
    console.log(item)
    var name1 = name;
    var email1 = email;
    var phoneNumber1 = phoneNumber;
    var address1 = address;

    const updateData = (id) => {
        console.log(name)
        let dita = axios.put(`http://localhost:5000/updatestudent/${id}`, { name, email, phoneNumber, address })
            .then(() => console.log(dita));
        setOpen(false)
        axios.get("http://localhost:5000/readstudent").then((response) => {
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
                <div ><h2 style={{ color: "white", textAlign: "center" }}>Update Student</h2></div>
                <ul className='create_class'>
                    <li><span> Name</span><input name='name' value={name1} onChange={(e) => { setName(e.target.value) }}></input></li>
                    <li><span>Email</span><input name='email' value={email1} onChange={(e) => { setEmail(e.target.value) }}></input></li>
                    <li><span>Phone </span><input name='phoneNumber' value={phoneNumber1} onChange={(e) => { setPhoneNumber(e.target.value) }}></input></li>
                    <li><span>Address </span><input name='address' value={address1} onChange={(e) => { setAddress(e.target.value) }}></input></li>                    
                </ul>
                <button onClick={() => { updateData(item._id) }}>Update </button>





            </Box>
        </>
    )
}

export default StudentModal