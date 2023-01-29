import React from 'react';
import Logo from '../../assets/uk-flag.webp'

function Home() {
  return (
    <div>
       <div className='flex justify-around items-center pt-[150px]'>
        <div className='max-w-[30%]'>
          <div className='flex items-center justify-center'>
            <p className='uppercase font-bold'>Life in the UK Test</p>
          </div>
         <div className='pt-5'>
         <p>
            Get Ready to pass your Life in the UK test for <span className='text-red-400'>FREE!</span>

             This website is designed to help you PASS the Life in the UK Test easily. 
            We have carefully selected all our questions from the Life in the UK: 
            A Guide for New Residents: 3rd edition Handbook used for the 2023 Life in 
            the UK exam. And it is completely <span className='text-red-500'>FREE!</span>
           </p>
         </div>
         </div>
         <div>
          <div>
            <img src={Logo} alt='uk-flag' width='340px'/>
          </div>
          <div className='pt-10'>
            <button className='bg-blue-400 px-20 py-5 rounded-full text-white font-bold'>START PRACTISING NOW</button>
          </div>
         </div>
      </div> 
    </div>
  );
}

export default Home;