import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Study from './pages/Study';
import Exams from './pages/Exams';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/study' element={<Study />} />
          <Route path="/tests" element={<Quiz />} />
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
