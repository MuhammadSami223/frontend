import React from 'react'

function Crousel() {
  return (
    <div><div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
        <h4 className='crousel-h4'>Headset for all Styles</h4>
        <h5 className='crousel-h5'>STARTING $20</h5>
        <buton className="crousel-btn">Shop Now</buton>
      <div className="carousel-item active">
        <img src="	https://multikart-react-reactpixelstrap.vercel.app/assets/images/home-banner/8.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="	https://multikart-react-reactpixelstrap.vercel.app/assets/images/home-banner/12.jpg" className="d-block w-100" alt="..."/>
      </div>
    
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Crousel