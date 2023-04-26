import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Home/>
        <About/>
        <Menu/>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

  
