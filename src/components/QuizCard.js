import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const QuizCard = ({ number }) => {
    const [status, setStatus] = useState('Take the test');
    const [statusIcon, setStatusIcon] = useState(faArrowAltCircleRight);
    const [iconColor, setIconColor] = useState('blue');

    /* To dos
        1. Get the score for a test and set status to the score and appropriate text
        2. Set status icon according to the following
            Unsolved test: Default
            Failed test: setStatus to Eg. 5/30 correct answers,
                         setStatusIcon to faTimesCircle
                         setIconColor to red
            Passed test: setStatus to Eg. 26/30 correct answers
                         setStatusIcon to faCheckCircle
                         setIconColor to green
    */
    return (
        <Link to="/test" className="max-w-[350px]">
            <section className="flex flex-col gap-3 border-[1px] p-2 border-[#0066cc]">
                <div className="flex justify-center">
                    <h4 className="p-2 border-b-[1px] font-bold">British Citizenship and History Test {number}</h4>
                </div>
                <div className="flex justify-between ml-3 mr-2">
                    <h4>{status}</h4>
                    <FontAwesomeIcon icon={statusIcon} size="2x" color={iconColor}/>
                </div>
            </section>
        </Link>
    )
}

export default QuizCard;
