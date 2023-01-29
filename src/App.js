import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Study from './components/pages/Study';
import Exams from './components/pages/Exams';
import Test from './components/pages/Test';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/study' element={<Study />} />
          <Route path="/test" element={<Test />} />
          <Route path='/exams' element={<Exams />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
