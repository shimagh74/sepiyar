import React from "react";
import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Question = ({ question }) => {

    const [isShowingFaq, setIsShowingFaq] = useState(false);

    const toggleShow = () => {
        setIsShowingFaq(!isShowingFaq);

    }

    return (
        <article  >
            <div onClick={toggleShow} className='grid grid-cols-12 bg-primary px-3 rounded-md shadow-md'>
                <h3 className='col-span-11 font-workSans font-semibold py-3  text-base cursor-pointer hover:text-Grayish-purple'>{question.question}</h3>
                <button className='col-span-1 place-self-center' >
                    {
                        isShowingFaq ? <FaAngleUp /> : <FaAngleDown />
                    }
                </button>
            </div>
            <div 
                className={`transition-all duration-300 overflow-hidden ${isShowingFaq ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
            >
                <p className='text-sm lg:text-lg'>{question.answer}</p>
            </div>
        </article>
    );
};

export default Question;
