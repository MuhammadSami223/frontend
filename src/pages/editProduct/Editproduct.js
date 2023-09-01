import React, { useState,useEffect} from 'react'
// import CartContext from '../context/cartContext'
import './Addproduct.css'
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';


// import CartContext from '../context/cartContext'
// import { useContext,useState } from 'react'

const Editproduct = () => {
  const {id}= useParams()
  const navigate = useNavigate()
  const [singleProduct,setSingleProduct] = useState({})

  const fetchSingleProduct = async () =>{
const response = await fetch(`https://lime-barnacle-yoke.cyclic.app/products/${id}`)
    const data = await response.json()
    setSingleProduct(data.product)
    
  }
 useEffect(()=>{
  fetchSingleProduct()
 },[])
  console.log(singleProduct)

  
  const handleChange = (ev) =>{
    const {name,value} = ev.target;
    setSingleProduct(()=>{
      return{
        ...singleProduct,
        [name]:value
      }
    })
  }
  // const handleUpload = async (ev)=>{
  //   const file = ev.target.files[0]
  //   const formData = new FormData()
  //    formData.append("image",file)
  //   const response = await fetch("http://localhost:8000/uploads",{
  //     method:"POST",
  //     body:formData
  //   })
  //   console.log("response",response)
  // }
  const handleSubmit = async ( )=>{
    const productData = {...singleProduct}
    const response = await fetch(`https://lime-barnacle-yoke.cyclic.app/products/edit/${id}`,
    {
      method:"PUT",
      headers:{ 
        "Content-Type":"application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRjNTNlYWI2MTA0MjE4MjllMTYxZTciLCJpYXQiOjE2OTIxNjEwMTUsImV4cCI6MTY5NDc1MzAxNX0.EtFcio-2ovBsF_vQHkXPDBc2PBChUgF3KSDof09icy8"
      },
      body:JSON.stringify(productData)
    })
    navigate('/')
    console.log("response",response)
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
      fullWidth
  className='input'
      value={singleProduct.productName}
      onChange={handleChange}
      id="outlined-basic" 
      name='productName'
      // label="productName" 
      variant="outlined" />

 
      <TextField 
      fullWidth
className='input'
      value={singleProduct.price}
      onChange={handleChange}
      id="outlined-basic" 
      // label="price" 
      name='price'
      variant="outlined" />
      <TextField 
fullWidth
className='input'
     value={singleProduct.description}
     onChange={handleChange}
      multiline
      rows={4}
      id="outlined-basic" 
      name='description'
      // label="description" 
      variant="outlined" />
    
      <TextField 
      fullWidth
className='input'
      value={singleProduct.image}
      onChange={handleChange}
      id="outlined-basic" 
      name='image'

      variant="outlined" /> 
      
 <button onClick={handleSubmit} className='animated-button loginButton' type="submit"> <span className='span'></span>Submit</button>



</div>

      </>


  )

}

export default Editproduct
