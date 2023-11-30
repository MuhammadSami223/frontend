import { useNavigate, useParams } from 'react-router-dom';
// import { products } from '../../data/products';
import CartContext from '../../context/cartContext';
import { useContext,useEffect, useState } from 'react';
import './product.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

// import ProductContext from '../../context/productContext';
const Product =() =>{
  const navigate = useNavigate()
  const [singleProduct,setSingleProduct] = useState({})
  const [user,setUser]=useState(null)
  const [loading, setLoading] = useState(false);
  const cartContext= useContext(CartContext)
  const {addToCart,removeFromCart} = cartContext
  const {id} = useParams();
  const token = JSON.parse(localStorage.getItem("token"))
  

    const fetchSingleProduct = async () =>{
      setLoading(true)
      const response = await fetch(`https://thoughtful-spacesuit-lamb.cyclic.app
/products/${id}`)
      const data = await response.json()
      console.log(response.json)
      setSingleProduct(data.product)
      setLoading(false)
    }
    useEffect(()=>{
      fetchSingleProduct()
      const isUser = JSON.parse(localStorage.getItem("user"))
      if(isUser){
        setUser(isUser)
      } 
    }, [])
   const handleDelete = async () =>{
    const response = await fetch(`https://thoughtful-spacesuit-lamb.cyclic.app
/products/${id}`,{
method: "DELETE",
headers:{
  Authorization:`Bearer ${token}`
}
  })
  console.log(token)
  
    const data = await response.json()
    console.log("data",data)
navigate("/")
   }

  return (
    <div>
      <div>
{user ? (

  <div>
 <button><EditIcon className='edit' onClick={() => navigate(`/products/edit/${id}`)}/></button>
 <DeleteOutlineIcon className='delete' onClick={handleDelete}/>
   </div> 
):(
  <></>
)
}

 

      </div>
<div className="container">
  {loading ? (<div className="spinner"><div class="spinner-grow my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
  ):<>
<div className="row">
  <div className="col-sm-12 col-lg-6 col-md-12 col-12">
<div>
    <img src={singleProduct.image} className="sproductimg" alt="..." />
    </div>
  </div>
  <div className="col-sm-12 col-lg-6 col-md-12 col-12">

    <div div className='singleName' >
<h1>{singleProduct.productName}</h1>
    <div className="singleDescription">
      <h5>{singleProduct.description}</h5>
      </div>
    <h5>Rs.{singleProduct.price}</h5>

<div className='buttons' > 
  
      <button className='animated-button'  onClick={()=>addToCart(singleProduct)} ><span className='span'></span>Add To Cart</button>
<button className='animated-button' onClick={()=>removeFromCart(singleProduct.name)}><span className='span'></span>Remove from Cart</button>
</div>
  </div>
  </div>
  </div>
  </>}
  </div>


</div>
  )
}

export default Product
