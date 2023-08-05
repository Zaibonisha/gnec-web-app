import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import Footer from "./components/common/Footer"
import { Donation, About, Causes, Home, Contact } from './pages';
import Volunteer from "./components/volunteer/index";



const App = () => {
  return (
    
    <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path = "/donations" element={<Donation />} />
         <Route path = "/contacts" element={<Contact />} /> 
         <Route path = "/volunteers" element={<Volunteer />} /> 
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;