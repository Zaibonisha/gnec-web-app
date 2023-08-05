import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import { Donation, About, Causes, Home } from './pages';
import VolunteerPage from './pages/Volunteer';



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
          <Route path = "/volunteers" element={<VolunteerPage />} />
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;