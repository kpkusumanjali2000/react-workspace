import React from 'react';
import BannerImage from "../assets/cartbg.png";
import "../styles/home.css"

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>S MART</h1>
            <p>For all kind of Shopping!!!!</p>
        </div>
    </div>
  )
}

export default Home
