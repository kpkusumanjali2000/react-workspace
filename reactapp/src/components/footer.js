import React from 'react';
import {FaWhatsapp, FaInstagram, FaFacebook} from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <div>
    <div className='footer'>
    <div className='socialMedia'><FaInstagram/><FaWhatsapp/><FaFacebook/></div>
    <p className='p'>&copy; 2023 smart.com</p>
    </div>
    </div>
  )
}

export default Footer;
