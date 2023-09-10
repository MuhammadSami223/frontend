import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div> <div className="footer-basic">
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
  )
}

export default Footer
