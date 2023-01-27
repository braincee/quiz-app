import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/uk test logo.svg';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
 
function Navbar() {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
     setNav(!nav)
   }

  return (
    <div className='fixed w-full h-[150px] shadow-xl z-[100] bg-gray-800'>
     <div className="flex justify-between items-center w-full h-full p-10">
        <img src={Logo} alt='uk-logo' width='200px'/>
        <ul className='hidden md:flex'>
        <Link to="/" className="text-white font-medium text-lg ml-10">
          Home
        </Link>
        <Link to="/test" className="text-white font-medium text-lg ml-10">
          Test
        </Link>
        <Link to="/about" className="text-white font-medium text-lg ml-10">
          About Us
        </Link>
        <Link to="/contact" className="text-white font-medium text-lg ml-10">
          Contact Us
        </Link>
        </ul>
        <div className='md:hidden' onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
     </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
         <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
         : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <img src={Logo} alt='uk logo' width='100px'/>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3' onClick={handleNav}>
                     <AiOutlineClose />
                    </div>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link to='/'>
                      <li className='py-6 text-lg'>Home</li>
                    </Link>
                    <Link to='/test'>
                      <li className='py-6 text-lg'>Test</li>
                    </Link>
                    <Link to='/about'>
                      <li className='py-6 text-lg'>About US</li>
                    </Link>
                    <Link to='/contact'>
                      <li className='py-6 text-lg'>Contact US</li>
                    </Link>
                </ul>
            </div>
         </div>
      </div>
    </div>
   
  );
};

export default Navbar;
