// Question Form/Panel Component for Questions Page

import React from 'react'

//defining props for question form 
interface QuestionFormProps { 
    title: string;
    description: string;
    checkboxLabel: string;
    onChange: (checked: boolean) => void; //checkbox
}

function QuestionForm({ title, description, checkboxLabel, onChange }: QuestionFormProps){
    return (
        <div className="mb-4 p-3 border rounded">
            <h5 className='fw-bold'>{title}</h5>
            <div className="form-check" id="form checkbox">
                <input //checkbox, event when clicked on
                    className='form-check-input'
                    type="checkbox"
                    onChange={(e) => onChange(e.target.checked)}/> 
                <label className="form-check-label ms-2">
                    {checkboxLabel}
                </label>
            </div>
            <span className='form-test text-muted'>{description}</span>
        </div>
    );
}

export default QuestionForm;