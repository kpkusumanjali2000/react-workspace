import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Home/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

  
