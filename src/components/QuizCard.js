import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const QuizCard = ({ number }) => {
    const [status, setStatus] = useState('Take the test');
    const [statusIcon, setStatusIcon] = useState(faArrowAltCircleRight);

    return (
        <Link to="/test">
            <section className="flex flex-col gap-3 border-[1px] border-[#0066cc] p-2 max-w-[350px]">
                <div className="flex justify-center">
                    <h4 className="p-2 border-b-[1px] font-bold">British Citizenship and History Test {number}</h4>
                </div>
                <div className="flex justify-between ml-3 mr-2">
                    <h4>{status}</h4>
                    <FontAwesomeIcon icon={statusIcon} size="2x" color="blue"/>
                </div>
            </section>
        </Link>
    )
}

export default QuizCard;
