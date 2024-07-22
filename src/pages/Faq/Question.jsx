import React from "react";
import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Question = ({ question }) => {

    const [isShowingFaq, setIsShowingFaq] = useState(false);

    const toggleShow = () => {
        setIsShowingFaq(!isShowingFaq);

    }

    return (
        <article onClick={toggleShow} className='pr-2'>
            <div className='grid grid-cols-12 bg-primary px-5'>
                <h3 className='col-span-11 font-workSans font-bold py-3  text-base cursor-pointer hover:text-Grayish-purple'>{question.question}</h3>
                <button className='col-span-1 place-self-center' >
                    {
                        isShowingFaq ? <FaAngleUp /> : <FaAngleDown />
                    }
                </button>
            </div>
            {isShowingFaq && <p className='font-workSans font-normal text-sm text-left lg:text-lg'>{question.answer}</p>}
        </article>
    );
};

export default Question;
