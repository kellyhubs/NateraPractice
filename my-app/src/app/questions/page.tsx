'use client';

import React from 'react';
import QuestionForm from '@/components/QuestionForm'; //question form component 
import Notes from '@/components/Notes'


const Page = () => {
    return (
        // <div className="container mt-5">
        //     <div className='d-flex justify-content-between align-items-center mb-3'>
        //         <h2>Form 2</h2>
        //         <button className='btn-close' aria-label='Close'></button>
        //     </div>
            
        //     <div className='row justify-content-center'>
        //         <div className='col-md-6'>
        //             <form onSubmit={handleSubmit} className='p-4 border rounded shadow-sm bg-white'>
        //                 {questions.map((question) => (
        //                     <QuestionForm //adding question form components and the data objects, rendering form
        //                         key={question.id}
        //                         title={question.title}
        //                         description={question.description}
        //                         checkboxLabel={question.checkboxLabel}
        //                         onChange={(checked) => handleCheckboxChange(question.id, checked)}
        //                     />
        //                 ))}

        //                 <div className='mb-4'>  
        //                     <input //input field 
        //                         className="form-control"
        //                         placeholder="Field number 1 - one line"
        //                     />
        //                 </div>
        //             </form>

<div className='container mt-5 p-3'>
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <QuestionForm/>
                </div>

                <div className="col-lg-4">
                    <Notes/>
                </div>
            </div>
        </div>

<div className="d-grid gap-2 col-2 mx-auto">
  <button className="btn btn-primary" type="button">Submit</button>
</div>

    </div>
    );
};

export default Page;


