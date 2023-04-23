import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Home/>
        <About/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

  
