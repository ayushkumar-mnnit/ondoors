

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Error from './Components/Error';
import Contact from './Components/Contact';



const App = () => {
  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='*' element={<Error/>}/>
  
    </Routes>
  </Router>
  );
};

export default App;
