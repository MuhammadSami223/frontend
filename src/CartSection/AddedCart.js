import React from 'react'
import './Addedcart.css'
import CartContext from '../context/cartContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { FaRegTrashAlt } from 'react-icons/fa';// import { products } from '../data/products'
function AddedCart() {
  const cartContext=useContext(CartContext)
  const{cartItems,removeFromCart}=cartContext

  return (
    <div>

      {cartItems.length? cartItems.map((item)=>{
        return(
          <div className="main-cart">
           <div> <img src={item.image} alt="" /></div>
            <div className='itemname'><h5>{item.productName}</h5></div>
            <div className='itemprice'> <h5>Rs{item.price}</h5></div>
            <div className='counter-container'>
           

              <div className='itemicon' onClick={()=>removeFromCart(item.productName)}><FaRegTrashAlt/></div>
            </div>
      </div>
        )}
      ):"No Cart Items available"}
      <Link  className='animated-button back-home' to='/'><span className='span'></span>Back to home</Link>
    </div>
  )
}

export default AddedCart
