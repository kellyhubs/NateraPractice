"use client";

import React, { useState } from "react";
import Notes from "@/components/Notes";
import FieldForm from "@/components/FieldForm";

const Page = () => {
  const [formData, setFormData] = useState({
    notes: "",
    field1: "",
    field2: "",
  });

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      notes: e.target.value,
    }));
  };

  const handleField1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      field1: e.target.value,
    }));
  };

  const handleField2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      field2: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Data submitted successfully for Field 1:", formData.field1);
    console.log("Data submitted successfully for Field 2:", formData.field2);
    console.log("Data submitted successfully for Notes:", formData.notes);
  };

  return (
    <div className="container mt-3 p-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <FieldForm
              field1={formData.field1} // need it own seprate handler for each field
              field2={formData.field2}
              field1Change={handleField1Change}
              field2Change={handleField2Change}
            />
          </div>

          <div className="col-lg-4">
            <Notes notes={formData.notes} notesChange={handleNoteChange} />
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 p-3 col-2 mx-auto">
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
