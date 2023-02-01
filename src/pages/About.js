import React from 'react'
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="About US">
        <div className='col-span-7 mt-[10px] pb-[40px]'>
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
    </Layout>
  )
}

export default About;