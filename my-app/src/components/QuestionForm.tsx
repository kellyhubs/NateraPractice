// Question Form/Panel Component for Questions Page
import React, { useState } from "react";
import questions from "@/app/questions/questions"; //importing questions data

// Define the type for the questionform data state
//This tells TypeScript that data will be an object where the keys are numbers (representing question IDs) and the values are booleans.
type data = { [key: number]: boolean };

const QuestionForm = ({
  checkboxChange,
  text,
  textChange,
}: {
  checkboxChange: (updatedData: data) => void;
  text: string;
  textChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  //initalize state of the checkboxes as unchecked (false)
  const [formData, setFormData] = useState<data>(
    questions.reduce((acc: data, question) => {
      acc[question.id] = false;
      return acc;
    }, {})
  );

  //change of the check box and sent to smart compontent
  const toggleCheckbox = (id: number) => {
    const updatedCheckboxes = {
      ...formData,
      [id]: !formData[id],
    };
    setFormData(updatedCheckboxes);
    checkboxChange(updatedCheckboxes);
  };

  return (
    <div className="container mt-4 w-75 p-3 border rounded-3 bg-white shadow mr-5">
      <h2 className="text-start mb-3" id="formTitle">
        Form 2
        <button
          className="btn-close"
          aria-label="Close"
          id="CloseButton"
        ></button>
      </h2>

      {questions.map((question) => (
        <div key={question.id} className="d-flex p-3">
          <div className="card-body">
            <h5 className="card-title w-75 p-2 bg-gray-200 text-start">
              {question.title}
            </h5>
            <p className="card-text fw-light" id="description">
              {question.description}
            </p>

            <input
              className="form-check-input"
              type="checkbox"
              id={`checkbox-${question.id}`}
              checked={formData[question.id]}
              onChange={() => toggleCheckbox(question.id)}
            />
            <label
              className="form-check-label"
              htmlFor={`checkbox-${question.id}`}
            >
              {question.checkboxLabel}
            </label>
          </div>
        </div>
      ))}

      <div className="mb-3">
        <input
          type="text"
          className="form-control w-75"
          placeholder="Field number 1 - one line"
          value={text}
          onChange={textChange}
        />
      </div>
    </div>
  );
};

export default QuestionForm;
