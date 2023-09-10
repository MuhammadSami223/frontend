import React, { useState,useEffect} from 'react'
// import CartContext from '../context/cartContext'

import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


// import CartContext from '../context/cartContext'
// import { useContext,useState } from 'react'

const Order = () => {
  const navigate = useNavigate()
  const [productName,setProductName] = useState("")
  const [price,setprice]= useState("")
  const [description,setdescription]= useState("")
  const [image,setimage]= useState("")



  
  const handleChange = (ev) =>{
    const {name,value} = ev.target;
   if(name === "productName"){
    setProductName(value)
   }
   if(name === "price"){
    setprice(value)
   }
   if(name === "description"){
    setdescription(value)
   }
   if(name === "image"){
    setimage(value)
  }
  }
  const handleSubmit = async ()=>{
    const productData = {productName,price:+price,description,image}
    const response = await fetch("https://lime-barnacle-yoke.cyclic.app/products/add",
    {
      method:"POST",
      headers:{ 
        "Content-Type":"application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRjNTNlYWI2MTA0MjE4MjllMTYxZTciLCJpYXQiOjE2OTIxNjEwMTUsImV4cCI6MTY5NDc1MzAxNX0.EtFcio-2ovBsF_vQHkXPDBc2PBChUgF3KSDof09icy8"
      },
      body:JSON.stringify(productData)
    })
    console.log("response",response)
    navigate('/')
  }
  useEffect(()=>{
    const user = localStorage.getItem('user');
    if(!user){
      navigate("/login")
    }
  })
  return (
<>
     <div className="textcontainer">
    <h2>Add Product</h2>
      <TextField
      className='input'
      fullWidth
      value={productName}
      onChange={handleChange}
      id="outlined-basic" 
      name='productName'
      label="productName" 
      variant="outlined" />

 
      <TextField 
      fullWidth
      className='input'
      value={price}
      onChange={handleChange}
      id="outlined-basic" 
      label="price" 
      name='price'
      variant="outlined" />
      <TextField 
fullWidth
className='input'
     value={description}
     onChange={handleChange}
      multiline
      rows={4}
      id="outlined-basic" 
      name='description'
      label="description" 
      variant="outlined" />
    
      <TextField 
      fullWidth
      className='input'
      onChange={handleChange}
      id="outlined-basic"
      label="image" 
      name='image'
      variant="outlined" /> 
      
 <button onClick={handleSubmit} className='animated-button loginButton' type="submit"> <span className='span'></span>Submit</button>



</div>

      </>


  )

}

export default Order