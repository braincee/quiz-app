import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <Link to="/" className="text-white font-medium text-lg">
        Home
      </Link>
      <div className="flex">
        <Link to="/test" className="text-white font-medium text-lg mr-4">
          Test
        </Link>
        <Link to="/about" className="text-white font-medium text-lg mr-4">
          About Us
        </Link>
        <Link to="/contact" className="text-white font-medium text-lg">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
