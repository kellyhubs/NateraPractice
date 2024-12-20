// notes component for Question Page
import React from "react";


const Page = () => {

    return(
        <div className="mt-4 h-75 w-75 p-3 border rounded-3 bg-white shadow">
        
            <div className="card-body">
            <h5 className="card-title"><i className="bi bi-stickies"></i> Notes</h5>
            <button className='btn-close' aria-label='Close' id="CloseButton"></button>

                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum">
                    </textarea>
                </div>
            </div>
        </div>
    );
};








export default Page;