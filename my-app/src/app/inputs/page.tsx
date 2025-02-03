"use client";

import React, { useState } from "react";
import Notes from "@/components/Notes";
import FieldForm from "@/components/FieldForm";

const Page = () => {
  const [formData, setFormData] = useState({
    notes: "",
  });

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      notes: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Data submitted successfully:", formData.notes);
  };

  return (
    <div className="container mt-3 p-3">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <FieldForm />
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
