import React from 'react';
import Layout from '../components/Layout';
import QuizCard from '../components/QuizCard';
import Data from '../data.json';


const Quiz = () => {
    const quizes = Data.quizes;
    return (
        <Layout title="Tests">
            <div className="col-span-7 flex flex-col gap-[20px] mt-[20px] pb-[40px]">
                <h3 className="text-[#555555] text-[25px] mb-[20px]">British Citizenship and History</h3>
                <div className="flex flex-col lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-[20px]">
                    { quizes.length > 0 ? quizes.map((quiz) => (
                        <QuizCard key={quiz.id} data={quiz} questionTotal={Data.questions[quiz.id].length} />
                    )) : ""}
                </div>
            </div>
        </Layout>
    )
}

export default Quiz;