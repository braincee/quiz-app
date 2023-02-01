import React from 'react'
import Layout from '../components/Layout';

const Study = () => {
  return (
    <Layout title="Study Materials">
        <section className="grid grid-cols-10 justify-items-start px-[10%] pt-[10px]">
          <div className='col-span-7 flex flex-col mt-[20px] pb-[40px] '>
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
         <aside className='col-span-2 mt-10 col-start-9'>
            <div>
                <p className='text-[13px] font-bold text-[#333333]'>Support this Project</p>
            </div>
            <div className="font-bold">
                    <p className='pt-4'>Lifeintheuktestweb has been created as 
                    a free source to help migrants prepare for the British Citizenship 
                    test. If you like this project and would like to help us maintain it 
                    please donate. <span className='text-blue-600'>Thanks and good luck!</span>
                </p>
            </div>
            <div className='flex items-center justify-center pt-4'>
                <button className='bg-yellow-400 rounded-full h-10 w-20 font-bold'>Donate</button>
            </div>
          </aside>
        </section>
    </Layout>
  );
}

export default Study;