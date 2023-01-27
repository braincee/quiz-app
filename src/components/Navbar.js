import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center h-[150px]">
        <h2 className='text-white font-medium text-lg'>Life in the UK Test Web</h2>
      <Link to="/" className="text-white font-medium text-lg">
        Home
      </Link>
        <Link to="/test" className="text-white font-medium text-lg mr-4">
          Test
        </Link>
        <Link to="/about" className="text-white font-medium text-lg mr-4">
          About Us
        </Link>
        <Link to="/contact" className="text-white font-medium text-lg">
          Contact Us
        </Link>
    </nav>
  );
};

export default Navbar;
