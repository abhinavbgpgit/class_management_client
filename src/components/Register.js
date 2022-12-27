import React, { useState ,useEffect} from 'react'
import '../App.css';
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [password, setPassWorde] = useState("") 
    const[data,setData]=useState([])
    useEffect(() => {
      axios.get("http://localhost:5000/read").then((response)=>{
        setData(response.data);
         
      })
    
    
    }, [data])
    
    const sendData=()=>
    {
        console.log(name,email,password)
      axios.post("http://localhost:5000/reg",{name: name, email: email, password:password} ).then((response) => {
        console.log("first")
      });
    }

return (
    <>
    <div className='App'>
<input name="name" onChange={(e)=>{setName(e.target.value)}}/>
<input name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
<input name="password" onChange={(e)=>{setPassWorde(e.target.value)}}/>
<button onClick={()=>{sendData()}}>Register</button>

    </div>
    {
        data.map((item)=>
        {
            return(
                <ul>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.password}</li>
                </ul>
            )
        })
    }
    </>
  )
}

export default Register