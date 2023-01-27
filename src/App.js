import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Test from './components/pages/Test';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/test" element={Test} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
