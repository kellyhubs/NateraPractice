import React, { useState } from "react";

const Fieldform = () => {
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
          className="form-control w-75"
          placeholder="Field number 1 - one line"
          //   value={text}
          //   onChange={textChange}
        />
      </div>

      <div className="mb-20">
        <input
          type="text"
          className="form-control w-75"
          placeholder="Field number 2 - one line"
          //   value={text}
          //   onChange={textChange}
        />
      </div>
    </div>
  );
};

export default Fieldform;
