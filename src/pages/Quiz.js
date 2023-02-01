import React from 'react';
import Layout from '../components/Layout';
import QuizCard from '../components/QuizCard';
import Data from '../data.json';


const Quiz = () => {
    const quizes = Data.quizes;
    return (
        <Layout title="Tests">
            <section className="grid grid-cols-10 justify-items-start px-[10%] pt-[10px]">
                <div className="col-span-7 flex flex-col gap-[20px] mt-[20px] pb-[40px]">
                    <h3 className="text-[#555555] text-[25px] mb-[20px]">British Citizenship and History</h3>
                    <div className="flex flex-col lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-[20px]">
                        { quizes.length > 0 ? quizes.map((quiz) => (
                            <QuizCard key={quiz.id} data={quiz} questionTotal={Data.questions[quiz.id].length} />
                        )) : ""}
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
    )
}

export default Quiz;