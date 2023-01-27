import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/Test';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      </Router>
    </div>
    
  );
}

export default App;
