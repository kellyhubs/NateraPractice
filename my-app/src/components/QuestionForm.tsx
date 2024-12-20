// Question Form/Panel Component for Questions Page
import React, {useState} from 'react'
import questions from '@/app/questions/questions'; //importing questions data 

// Define the type for the questionform data state
//This tells TypeScript that data will be an object where the keys are numbers (representing question IDs) and the values are booleans.
type data = { [key: number]: boolean }; 


const QuestionForm = () => {

//initalize all the data as unchecked (false)
const [formData, setFormData] = useState<data>(
        questions.reduce((acc: data, question) => { //The reduce function processes the questions array and creates an initial value for the formData object
            acc[question.id] = false; //set the checkbox, question. id for the question to be false(unchecked)
            return acc; // return the updated acc object 
        }, {}) //acc object starts with empty object and question being process in the loop 
);

const toggleCheckbox = (id:number) => { //id:number unique identifer (which box to toggle) 
    setFormData({
        ...formData, // spread the current formData state
        [id]: !formData[id] //toggle the checkbox state with the given id
    });
};

// return (
// <div className='card'>
//         <div className='card-body'>
//             <h6 className='card-title'>Form 2</h6>
//             <button className='btn-close' aria-label='Close' id="CloseButton"></button>
//             {questions.map((question) =>(
//                 <div key={question.id}>
//                     <h5>{question.title}</h5>
//                     <p className="card-text">{question.description}</p>
//                 </div>
//             ))}
//         </div>
// </div>

// );

// }

return (
    <div className="container mt-4 w-75 p-3 border rounded-3 bg-white shadow">
        <h2 className="text-start mb-3" id="formTitle">Form 2 <button className="btn-close" aria-label='Close' id="CloseButton"></button></h2>
        
        
            {questions.map((question) => (
                <div key={question.id} className="d-flex p-3">
                    <div className="card-body">
                    <h5 className="card-title w-75 p-2 bg-gray-200 text-start">{question.title}</h5>
                    <p className="card-text fw-light" id="description">{question.description}</p>
                        {/* <div className="form-check "> */}
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`checkbox-${question.id}`}
                                checked={formData[question.id]}
                                onChange={() => toggleCheckbox(question.id)}/>
                                    <label className="form-check-label" htmlFor={`checkbox-${question.id}`}>
                                        {question.checkboxLabel}
                                    </label>
                        {/* </div> */}
                    </div>
                </div>
            ))}

    <div className="mb-3">
        <input type="text" className="form-control w-75" placeholder="Field number 1 - one line"/>
    </div>

    </div>
);

}



export default QuestionForm;





//<div className='row justify-content-center'>
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