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
        <div className="mb-4 border-bottom pb-3">
            <h6 className='mb-2 text-uppercase text-secondary'>{title}</h6>
            <div className="form-check" id="form checkbox">
                <input //checkbox, event when clicked on
                    className='form-check-input'
                    type="checkbox"
                    id={`checkbox-${title}`} //id needed for styling & functionality
                    onChange={(e) => onChange(e.target.checked)}/> 
                <label className="form-check-label ms-2">
                    {checkboxLabel}
                </label>
            </div>
            <p className='text-muted mt-2'>{description}</p>
        </div>
    );
}

export default QuestionForm;