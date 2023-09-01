import React, { useState } from 'react'
// import Snackbar from '@mui/material/Snackbar';     
// import CartContext from '../context/cartContext'
import './login.css'
import TextField from '@mui/material/TextField';
import { useNavigate ,Link} from 'react-router-dom';


// import CartContext from '../context/cartContext'
// import { useContext,useState } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  const [password,setPassword]= useState("")
  // const [open,setopen]= useState(false)



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
    const response = await fetch("https://lime-barnacle-yoke.cyclic.app/login",{
      method:"POST",
          headers:{ 
            "Content-Type":"application/json",
    
          },body:JSON.stringify(userData) 
          // console.log("response",res)
        })
        const data = await response.json()
        console.log("response",data)
      localStorage.setItem( "user", JSON.stringify(data.user))
      localStorage.setItem ("token", JSON.stringify(data.token))
navigate('/addproduct')

  }
  // setopen(true)
  return (
<>
     <div className="textcontainer">
    <h2>Login</h2>
      <TextField
      fullWidth
      className='input'
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
      <Link to={'/register'}>
 <div className='account'><p>Craete New Account?</p></div>
      </Link>
      
 <button onClick={handleSubmit} className='animated-button loginButton' type="submit"> <span className='span'></span>Login</button>
 {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="login failed"
        // action={action}
      /> */}


</div>

      </>

)
}
  


export default Login