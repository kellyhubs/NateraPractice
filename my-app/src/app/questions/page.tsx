'use client';

import React from 'react';
import QuestionForm from '@/components/QuestionForm'; //question form component 
import Notes from '@/components/Notes'


const Page = () => {
    return (
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


