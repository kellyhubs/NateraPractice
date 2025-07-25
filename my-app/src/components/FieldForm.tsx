import React from "react";

const FieldForm = ({
  field1,
  field2,
  field1Change,
  field2Change,
}: {
  field1: string;
  field2: string;
  field1Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  field2Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="container mt-8 p-3 w-75 border rounded-3 bg-white shadow mr-5">
      <h2 className="text-start mb-4" id="formTitle">
        Form 1
        <button
          className="btn-close"
          aria-label="Close"
          id="CloseButton"
        ></button>
      </h2>

      <div className="mb-8">
        <input
          type="text"
          name="field1"
          className="form-control w-75"
          placeholder="Field number 1 - one line"
          value={field1}
          onChange={field1Change}
        />
      </div>

      <div className="mb-8">
        <input
          type="text"
          name="field2"
          className="form-control w-75"
          placeholder="Field number 2 - one line"
          value={field2}
          onChange={field2Change}
        />
      </div>
    </div>
  );
};

export default FieldForm;
