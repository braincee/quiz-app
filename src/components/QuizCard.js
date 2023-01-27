import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const QuizCard = () => {
    const [status, setStatus] = useState('Take the test');
    const [statusIcon, setStatusIcon] = useState(faArrowAltCircleRight);
    return (
        <main>
            <section className="">
                <h2>Quizes</h2>
            </section>
            <section>
                <div>
                    <h3>British Citizenship and History</h3>
                    <div>
                        <h4>{status}</h4>
                        <FontAwesomeIcon icon={status} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default QuizCard;