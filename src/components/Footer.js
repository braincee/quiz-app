import React from 'react'
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';

function Footer() {
  return (
    <div className='flex justify-around items-center h-[100px] bg-gray-800 w-full mt-[250px]'>
      <p className='text-white text-[20px] max-w-[45%]'>Copyright 2023 Life in the UK Test Web | All Rights Reserved | Terms and Conditions| Privacy Policy</p>
       <div className='flex justify-around items-center gap-2'>
          <img src={Facebook} alt='facebook-logo' width='60px'/>
          <img src={Twitter} alt='twitter-logo' width='60px'/>
          <img src={Youtube} alt='youtube-logo' width='60px'/>
       </div>
    </div>
 );
};

export default Footer;