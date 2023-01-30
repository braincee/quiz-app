import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const QuizCard = ({ data, questionTotal }) => {
    const [quizStatus, setQuizStatus] = useState('Take the test');
    const [statusIcon, setStatusIcon] = useState(faArrowAltCircleRight);
    const [iconColor, setIconColor] = useState('blue');
    const { id, title, status, score } = data;

    useEffect(() => {
        if (status === 'failed') {
            setStatusIcon(faTimesCircle);
            setQuizStatus(`${score} / ${questionTotal} correct answers`);
            setIconColor('red')
        } else if (status === 'passed') {
            setStatusIcon(faCheckCircle);
            setQuizStatus(`${score} / ${questionTotal} correct answers`);
            setIconColor('green')
        }
    }, [status, questionTotal, score])
                

    return (
        <Link to={`/tests/${id}`} className="max-w-[350px]">
            <section className="flex flex-col gap-3 border-[1px] p-2 border-[#0066cc]">
                <div className="flex justify-center">
                    <h4 className="p-2 border-b-[1px] text-center font-bold">{title}</h4>
                </div>
                <div className="flex justify-between ml-3 mr-2">
                    <h4>{quizStatus}</h4>
                    <FontAwesomeIcon icon={statusIcon} size="2x" color={iconColor}/>
                </div>
            </section>
        </Link>
    )
}

export default QuizCard;
