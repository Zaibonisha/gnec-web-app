import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import Home from './pages/Home.jsx';


const App = () => {
  return (
    
    <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;