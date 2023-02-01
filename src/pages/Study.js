import React from 'react'
import Layout from '../components/Layout';

const Study = () => {
  return (
    <Layout title="Study Materials">
        <div className='col-span-7 flex flex-col mt-[20px] pb-[40px]'>
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
    </Layout>
  );
}

export default Study;