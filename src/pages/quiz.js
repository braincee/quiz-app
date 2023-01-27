import React from 'react';
import QuizCard from '../components/QuizCard';

const Quiz = () => {
    return (
        <main>
            <section className="flex bg-[#2874fc] text-white text-[25px] py-[20px] pl-[10%] ">
                <h2>Quizes</h2>
            </section>
            <section className="flex flex-col gap-[20px] mt-[20px] px-[10%] pt-[10px] pb-[40px]">
                <h3>British Citizenship and History</h3>
                <div className="flex gap-[20px]">
                    <QuizCard number={1} />
                    <QuizCard number={2} />
                    <QuizCard number={3} />
                </div>
            </section>
        </main>
    )
}

export default Quiz;