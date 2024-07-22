import React from "react";
import { questionFaq } from './questionFaq.js';
import Question from './Question.jsx';
import { useState } from 'react';

const FaqsView = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='min-h-screen relative'>
            <div className='bg-White rounded-md shadow-2xl px-5 lg:px-10 top-2 z-50 w-[90%] mx-auto'>
                <div className='flex gap-2 lg:gap-4 my-5 items-center justify-center'>
                    <h2 className='text-3xl lg:text-5xl'>FAQs</h2>
                </div>
                <div className='grid gap-2 md:grid-cols-2 p-2'>
                    {questionFaq.map((question, index) => (
                        <Question
                            question={question}
                            key={index}
                            isOpen={openIndex === index}
                            toggleQuestion={() => toggleQuestion(index)}
                            className='md:w-1/2 w-full'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqsView;
