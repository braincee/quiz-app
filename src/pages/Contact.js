import React from 'react'
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout title="Contact US">
        <div className='col-span-7 mt-[20px] pb-[40px]'>
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
    </Layout>
  )
}

export default Contact;