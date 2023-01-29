import React from 'react'

const About = () => {
  return (
    <div>
      <div className='bg-blue-700 h-[80px]'>
            <div className='ml-[150px] text-white font-bold text-3xl p-5'>
              About US
            </div>
        </div>
      <div className='flex pt-5'>
        <div className='flex flex-col justify-center max-w-[60%] ml-10'>
           <p className='pt-5'>
           Lifeintheuktestweb has been created to help you pass the Life in the UK Test. 
           We have the experience of having undertaken and successfully passed the UK citizenship 
           test ourselves. Here we have gathered numerous questions that cover the contents of the 
           official ‘Life in the United Kingdom: A guide for new residents’ 3rd edition Handbook, 
           valid for the 2023 Life in the UK Test and that will get you ready for the official test.
           </p>
           <p className='pt-5'>
           We strive to keep the information presented here free and as up-to-date as possible 
           to get you prepared for the official test with confidence. We though it was important 
           to offer the option to practice for the test by chapter, so you can assess the knowledge 
           you have gained at the same time as you read the book. Also, we created tests that simulate 
           the real test with questions that cover the entire handbook, the same timing as the exam and with the 
           option to mark the questions you are unsure of to review or respond them at the end.
           </p>
           <p className='pt-5'>
           Many of the questions here have been asked in the official test, although the incorrect 
           answers may vary in some cases. We try to collect questions that have been recently asked 
           in the official citizenship test and we always appreciate candidate’s input. So, if you are 
           going to take the exam soon or you have taken it recently please email us and share it by contacting us 
           so future candidates get a better experience.
           </p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div>
            <p className='text-xl text-gray-600 italic'>Support this Project</p>
          </div>
          <div className='flex items-center justify-center'>
                <p className='pt-4 max-w-[50%]'>Lifeintheuktestweb has been created as 
                a free source to help migrants prepare for the British Citizenship 
                test. If you like this project and would like to help us maintain it 
                please donate. <span className='text-blue-600'>Thanks and good luck!</span>
            </p>
          </div>
             <div className='pt-4'>
               <button className='bg-yellow-400 rounded-full h-10 w-20 font-bold'>Donate</button>
             </div>
        </div>
      </div>
    </div>
  )
}

export default About;