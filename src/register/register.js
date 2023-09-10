import React, { useState ,useEffect} from 'react'
// import CartContext from '../context/cartContext'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import CartContext from '../context/cartContext'
// import { useContext,useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  const [password,setPassword]= useState("")

  


  const handleChange = (ev) =>{
    const {name,value} = ev.target;
   if(name === "userName"){
    setUserName(value)
   }
   if(name === "password"){
    setPassword(value)
   }
   
  }
  const handleSubmit = async ()=>{
    const userData = {userName,password}; 
    const response = await fetch("https://lime-barnacle-yoke.cyclic.app/users/register",{
      method:"POST",
          headers:{ 
            "Content-Type":"application/json",
    
          },body:JSON.stringify(userData) 
          // console.log("response",res)
        })
        const data = await response.json();
        console.log(data)        
    
        navigate("/login");
      };
      
     
   
    

  return (
<>
     <div className="textcontainer">
    <h2>Sing up</h2>
      <TextField
      className='input'
      fullWidth
      value={userName}
      onChange={handleChange}
      id="outlined-basic" 
      name='userName'
      label="userName" 
      variant="outlined" />

 
      <TextField 
      fullWidth
      className='input'
      value={password}
      onChange={handleChange}
      type='password'
      // id="outlined-basic" 
      label="password" 
      name='password'
      variant="outlined" />
      <Link to={'/login'}>
 <p className="account">Already have Account?</p>
      </Link>
      
 <button onClick={handleSubmit} className='animated-button loginButton' type="submit"> <span className='span'></span>Sing up</button>


</div>

      </>


  )
  }


export default Register