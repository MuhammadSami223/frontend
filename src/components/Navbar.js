import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom'
import CartContext from '../context/cartContext'
import { useContext } from 'react'

function Navbar() {
 
    const cartContext=useContext(CartContext)
    const {cartItems} = cartContext;
 
  return (
    <div>
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MS E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-center">
       
        <li className="nav-item">
        <Link className='addtocart' to={'/cart'}>
        <Badge badgeContent={String(cartItems.length)} color="primary">
                  <FaShoppingCart  color="action" />  
                  </Badge>
                  </Link >  
                      </li>
                      <Link  to={'/register'}>
        <li className="nav-item">
<button className='span2'>Sing Up</button>
        </li>
        </Link>
        <Link  to={'/login'}>
        <li className="nav-item">
<button className='span2'>login</button>
        </li>
        </Link>
      
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar


//  <h2>E-commerce</h2>
//  <Link to={'/cart'}>
// <div className='shoppingCart'>
// <Badge badgeContent={String(cartItems.length)} color="primary">
// <FaShoppingCart  color="action" />
// </Badge>
// </div>
// </Link >