import React from 'react'

function Contact() {
  return (
    <div>
       <div className='bg-blue-700 h-[80px]'>
            <div className='ml-[150px] text-white font-bold text-3xl p-5'>
              Contact US
            </div>
        </div>
      <div className='flex'>
        <div className='pt-[70px] ml-20'>
           <form>
              <div className='mb-4'>
                 <label className='text-xl font-medium'>Your Name (Required)</label>
                 <input 
                  type='text'
                  className='border border-gray-400 p-2 w-[900px]'
                 />
              </div>
              <div className='mb-4'>
                 <label className='text-xl font-medium'>Your Email (Required)</label>
                 <input 
                  type='text'
                  className='border border-gray-400 p-2 w-[900px]'
                 />
              </div>
              <div className='mb-4'>
                 <label className='text-xl font-medium'>Subject (Required)</label>
                 <input 
                  type='text'
                  className='border border-gray-400 p-2 w-[900px]'
                 />
              </div>
              <div className='mb-4'>
                 <label className='text-xl font-medium'>Your Message</label>
                 <textarea 
                  className='border border-gray-400 p-2 w-[900px] h-[200px]'
                 />
              </div>
              <button className="bg-blue-500 text-white py-5 px-10 rounded-full hover:bg-blue-600 text-2xl">
                 SEND
                </button>
           </form>
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

export default Contact;