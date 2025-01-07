// notes component for Question Page
import React from "react";

const Page = ({
  notes,
  notesChange,
}: {
  notes: string;
  notesChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="mt-4 h-75 w-50 p-3 border rounded-3 bg-white shadow">
      <div className="card-body">
        <h5 className="card-title text-start mb-6">
          <i className="bi bi-stickies" id="icon"></i> Notes
          <button
            className="btn-close"
            aria-label="Close"
            id="CloseButton"
          ></button>
        </h5>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            value={notes}
            onChange={notesChange} //sent to the smart compontent
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
