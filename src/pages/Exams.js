import React from 'react'
import Layout from '../components/Layout'

const Exams = () => {
  return (
      <Layout title="Exams">
         <div className='col-span-7 mt-[20px] pb-[40px]'>
            <div className='mb-[80px]'>
               <p className='text-2xl'>The following tests are a <span className='font-bold'>compilation of exam questions</span> reported by candidates.</p>
            </div>
            <div className='grid grid-cols-4 gap-10'>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 1</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 2</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 3</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 4</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 5</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 6</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 7</button>
            </div>
            <div>
               <button className='bg-blue-400 px-14 py-3 text-white rounded-full text-xl font-medium'>Exam 8</button>
            </div>
            </div>
         </div>
      </Layout>
  )
}

export default Exams