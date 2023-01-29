import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/uk test logo.svg';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

 
function Navbar() {
   const [nav, setNav] = useState(false);


   const handleNav = () => {
     setNav(!nav)
   }

  return (
    <div className='relative top-0 w-full h-[150px] shadow-xl z-[100] bg-gray-800 border-red-600'>
     <div className="flex justify-between items-center w-full h-full p-10">
        <img src={Logo} alt='uk-logo' width='200px'/>
        <div className='hidden md:flex'>
              <Link to="/" className="text-white font-medium text-lg ml-10">
               Home
             </Link>
             <div className='group relative'>
                <Link to="/study" className='text-white font-medium text-lg ml-10'>Study Materials</Link>
                <ul className='absolute hidden group-hover:block pt-4 w-[80vw]'>
                    <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4'>Chapter 1: The value and Principle of the UK</li>
                    <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Chapter 2: What is the UK?</li>
                    <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Chapter 3: A Long Illustrious History</li>
                    <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Chapter 4: A Modern, Thriving Society</li>
                    <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Chapter 5: The UK Government, the Law and your Role</li>
                </ul>
             </div>
             <div className='group relative'>
              <Link to="/tests" className="text-white font-medium text-lg ml-10">
                Test
             </Link>
              <ul className='absolute hidden group-hover:block text-gray-800 pt-4 w-[60vw]'>
                <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Test 1</li>
                <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Test 2</li>
                <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Test 3</li>
              </ul>
             </div>
             <div className='relaltive group'>
                <Link to='/exams' className='text-white font-medium text-lg ml-10'>
                    Exams
                </Link>
                  <ul className='absolute hidden group-hover:block text-gray-800 pt-4'>
                   <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Exams 1 to 7</li>
                   <li className='bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full h-full'>Exams 8 to 16</li>
                 </ul>
             </div>
           <Link to="/about" className="text-white font-medium text-lg ml-10">
            About Us
          </Link>
          <Link to="/contact" className="text-white font-medium text-lg ml-10">
            Contact Us
          </Link>
          </div>
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
