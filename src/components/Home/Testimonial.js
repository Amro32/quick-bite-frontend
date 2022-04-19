import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonial({ src, text, name }) {
  return (
    <div className="testimonial-item bg-transparent border rounded p-4">
      <i className="fa fa-2x primaryColor">
        <FaQuoteLeft size={30} className="mb-3" />
      </i>
      <p>{text}</p>
      <div className="d-flex align-items-center">
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={src}
          style={{ width: "50px", height: "50px" }}
        />
        <div className="ps-3">
          <h5 className="mb-1">{name}</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
