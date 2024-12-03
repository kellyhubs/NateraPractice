'use client';

import React, { useState } from 'react';
import questions from '@/app/questions/questions'; // data for question form
import QuestionForm from '@/components/QuestionForm'; //question form component 


const Page = () => {
    // typescript syntax where formState is an object key: numbers, values: boolean
    //react hook to define a state variable (formState) and function to update (setFormState)
    // ({}) - inital value - empty object {}
    const [formState, setFormState] = useState<{ [key: number]: Boolean}>({});
    
    //checkbox event in the form
    const handleCheckboxChange = (id: number, checked: boolean) => {
        setFormState((prev) => ({...prev, [id]: checked}))
    };
    
    //submit button 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //catch 
        console.log('form values:', formState);
    };
    
    return (
        <div className="container my-5">
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h2>Form 2</h2>
                <button className='btn-close' aria-label='Close'></button>
            </div>
            
            <div className='row justify-content-center'>
                <div className='cold-md-6'>
                    <form onSubmit={handleSubmit} className='p-4 border rounded shadow'>
                        {questions.map((question) => (
                            <QuestionForm //adding question form components and the data objects
                                key={question.id}
                                title={question.title}
                                description={question.description}
                                checkboxLabel={question.checkboxLabel}
                                onChange={(checked) => handleCheckboxChange(question.id, checked)}
                            />
                        ))}
                    <button type='submit' className='btn btn-primary w-100 mt-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
