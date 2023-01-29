import React from 'react';
import QuizCard from '../components/QuizCard';
import Data from '../data.json';


const Quiz = () => {
    const quizes = Data.quizes;
    return (
        <main>
            <section className="flex bg-[#2874fc] text-white text-[25px] py-[20px] pl-[10%] ">
                <h2>Quizes</h2>
            </section>
            <section className="flex flex-col gap-[20px] mt-[20px] px-[10%] pt-[10px] pb-[40px]">
                <h3>British Citizenship and History</h3>
                <div className="flex flex-col lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-[20px]">
                    { quizes.length > 0 ? quizes.map((quiz) => (
                        <QuizCard key={quiz.id} data={quiz} questionTotal={Data.questions[quiz.id].length} />
                    )) : ""}
                </div>
            </section>
        </main>
    )
}

export default Quiz;