"use client";

import React, { useState } from "react";
import QuestionForm from "@/components/QuestionForm"; //question form component
import Notes from "@/components/Notes";

const Page = () => {
  const [formData, setFormData] = useState({
    checkboxes: {},
    text: "",
    notes: "",
  });

  const handleCheckboxChange = (updatedCheckboxes: {
    [key: number]: boolean;
  }) => {
    setFormData((prevData) => ({
      ...prevData,
      checkboxes: updatedCheckboxes,
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      text: e.target.value,
    }));
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      notes: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Data submitted successfully:", formData.text);
    console.log("Data submitted successfully:", formData.notes);
  };

  return (
    <div className="container mt-5 p-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <QuestionForm
              checkboxChange={handleCheckboxChange}
              text={formData.text}
              textChange={handleTextChange}
            />
          </div>

          <div className="col-lg-4">
            <Notes notes={formData.notes} notesChange={handleNoteChange} />
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 col-2 mx-auto">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
