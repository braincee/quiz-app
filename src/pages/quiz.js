import React from 'react';
import QuizCard from '../components/QuizCrad';

const Quiz = () => {
    return (
        <main>
            <section className="">
                <h2>Quizes</h2>
            </section>
            <section>
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </section>
        </main>
    )
}

export default Quiz;