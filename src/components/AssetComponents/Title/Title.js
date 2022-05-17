import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
        {title}
      </h5>
      {subtitle && <h1 className="mb-5">{subtitle}</h1>}
    </div>
  );
}

export default Title;
