import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import AboutUs from './components/Aboutus';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


import EmployerJobPosting from './components/EmployerJobPosting.jsx';
function App() {

  return (
    <>
      

        <Router>

            <Navbar/>
          <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/homeemployer" element={<EmployerJobPosting />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/landing" element={<LandingPage />} />
            
          </Routes>
          <Footer/>
        </Router>

     

    </>
  )
}

export default App
