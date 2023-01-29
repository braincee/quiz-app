import React from 'react'

const Study = () => {
  return (
    <div>
        <div className='bg-blue-700 h-[80px]'>
            <div className='ml-[150px] text-white font-bold text-3xl p-5'>
              Study Materials
            </div>
        </div>
        <div className='flex justify-around items-center pt-5'>
          <div className='flex flex-col ml-10 '>
            <p>
            The contents of the study materials used by Life in the UK Test Web are based on the Life 
            in the United Kingdom: <span className='text-blue-600'>A Guide for New Residents: 3rd edition Handbook used to examine individuals</span>
            who want to become permanent residents or British citizens.
            </p>
            <p>
             The topics of study are divided into the following Chapters:
            </p>
            <ol>
                <li>Chapter 1: <span className='text-blue-600'>The values and principles of the UK</span></li>
                <li>Chapter 2: <span className='text-blue-600'>What is the UK?</span></li>
                <li>Chapter 3: <span className='text-blue-600'>A Long and Illustrious History</span></li>
                <li>Chapter 4: <span className='text-blue-600'>A Modern, Thriving Society</span></li>
                <li>Chapter 5: <span className='text-blue-600'>The UK Government, the Law and Your Role</span></li>
            </ol>
            <div className='pt-5'>
                <button className='rounded-full text-gray-100 bg-blue-600 w-[200px] h-10 font-extrabold'>Test Your Knowledge</button>
            </div>
         </div>
            <div className='flex flex-col justify-center items-center'>
            <div>
                <p className='text-xl text-gray-600 italic'>Support this project</p>
            </div>
              <div className='flex items-center justify-center'>
                <p className='pt-4 max-w-[40%]'>Lifeintheuktestweb has been created as 
                  a free source to help migrants prepare for the British Citizenship 
                  test. If you like this project and would like to help us maintain it 
                  please donate. <span className='text-blue-600'>Thanks and good luck!</span></p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Study;