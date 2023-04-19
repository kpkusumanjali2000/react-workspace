import React from 'react';
import {Link} from "react-router-dom";
import "../styles/navbar.css";
import CartImg from "../assets/cart1.png";

function Navbar() {
  return (
    <div className='navbar'>
        <img src={CartImg} />
        <h1 className='h1'>S MART</h1>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/content">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;
