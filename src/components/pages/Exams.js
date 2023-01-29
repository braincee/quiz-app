import React from 'react'

const Exams = () => {
  return (
    <div>
         <div className='bg-blue-700 h-[80px]'>
            <div className='ml-[150px] text-white font-bold text-3xl p-5'>
              Exams
            </div>
        </div>
        <div className='grid grid-cols-5'>
           <div className='ml-[80px] mt-[60px] col-span-3'>
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
           <div className='col-span-2 mt-20'>
          <div className='flex items-center justify-center'>
            <p className='text-xl text-gray-600 italic'>Support this Project</p>
          </div>
          <div className='flex items-center justify-center'>
                <p className='pt-4 max-w-[50%]'>Lifeintheuktestweb has been created as 
                a free source to help migrants prepare for the British Citizenship 
                test. If you like this project and would like to help us maintain it 
                please donate. <span className='text-blue-600'>Thanks and good luck!</span>
            </p>
          </div>
             <div className='flex items-center justify-center pt-4'>
               <button className='bg-yellow-400 rounded-full h-10 w-20 font-bold'>Donate</button>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Exams