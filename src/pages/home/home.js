import React, { useContext, useEffect, useState } from "react";
// import { products } from '../../data/products'
import { Link } from "react-router-dom";
import ProductContext from "../../context/productContext";
import Crousel from "../../components/Crousel";

import "./home.css";

const Home = () => {
  const productContext = useContext(ProductContext);
  const { setProductsGlobally } = productContext;
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://lime-barnacle-yoke.cyclic.app/products/all");
    const data = await response.json();
    setProducts(data.products);
    setProductsGlobally(data.products);

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
      </div>
    </div>
  );
};

export default Home;

// <div className="maincontainer" key={index}>
// <img src={product.image} alt="" />
// <h2> {product.productName}</h2>
//  <h4>Rs.{product.price}</h4>
// <h5>{product.price}</h5>

// </div>
