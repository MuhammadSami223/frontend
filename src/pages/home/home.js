import React, { useContext, useEffect, useState } from "react";
// import { products } from '../../data/products'
import { Link } from "react-router-dom";
import ProductContext from "../../context/productContext";
import Crousel from "../../components/Crousel";

import "./home.css";
import Footer from "../../footer/footer";


const Home = () => {
  const productContext = useContext(ProductContext);
  const { setProductsGlobally } = productContext;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true)
    const response = await fetch("https://lime-barnacle-yoke.cyclic.app/products/all");
    const data = await response.json();
    setProducts(data.products);
    setProductsGlobally(data.products);
<<<<<<< HEAD
    setLoading(false)
=======
setLoading(false)
>>>>>>> 9ebf74cd472d96c0ed9b86078cf83df3fff450e2
    // console.log(data.products)
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div>
        <Crousel/>
  
        <div>
          <h2 className="h2">Featured Products</h2>
        </div>
        <div className="hr"><hr /></div>
      
  
      {/* <div className="row"> */}
      {/* <div className="col-lg-3 col-md-3 col-sm-6 "> */}
      
      <div className="maincart">
    {loading ?(<div className="text-center"><div class="spinner-grow my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow my-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div> ):<>

        {products.map((product, index) => {
          return (
            <Link to={`/products/${product._id}`}>
             
       
               <div className="cardwidth">

         <div className="card maincontainer col-12 col-lg-3 col-sm-6"
      key={index}>
             
                    <img src={product.image} class="card-img-top" alt="..." />
            <div className="card-body">
                      <h2 className="card-title">{product.productName}</h2>
           <h4 className="card-title">Rs.{product.price}</h4>
                    </div>
                  </div>
        </div>
              
              
            </Link>
          );
        })}
        </>}
      </div>
      <Footer/>
           <div className="footer-basic">
    <footer>
        <div className="socials"><Link to="#"><FaFacebook/></Link><Link to="#"><FaInstagram/></Link><Link to="#"><FaLinkedin/></Link><Link to="#"><FaYoutube/></Link></div>
        <ul className="list-inline">
            <li className="list-inline-item"><Link to="">Home</Link></li>
            <li className="list-inline-item"><Link to="">Services</Link></li>
            <li className="list-inline-item"><Link to="">About</Link></li>
            <li className="list-inline-item"><Link to="">Contact us</Link></li>
        </ul>
        <p className="copyright">MS Developer © 2023</p>
    </footer>
    </div>

    </div>
  );
};

export default Home;
