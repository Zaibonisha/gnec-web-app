import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Causes from './pages/Causes.jsx';



const App = () => {
  return (
    
    <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />

          
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;