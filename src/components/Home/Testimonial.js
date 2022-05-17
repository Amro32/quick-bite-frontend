import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import Avatar from "@mui/material/Avatar";

function Testimonial({ text, name, rating }) {
  const [rating2, setRating] = useState(rating);
  useEffect(() => {
    setRating(rating);
  }, [rating]);
  return (
    <div className="testimonial-item bg-transparent border rounded p-4">
      <i className="fa fa-2x primaryColor">
        <FaQuoteLeft size={30} className="mb-3" />
      </i>
      <p>{text}</p>
      <div className="d-flex align-items-center">
        {/* <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={src}
          style={{ width: "50px", height: "50px" }}
          alt=""
        /> */}
        <Avatar sx={{ bgcolor: "var(--primary)", color: "white" }}>
          {name.split(" ")[0][0]}
          {name.split(" ")[1][0]}
        </Avatar>
        <div className="ps-3">
          <h5 className="mb-1">{name}</h5>
          <ReactStars
            value={parseFloat(rating2)}
            count={5}
            activeColor={"#fea116"}
            name="rating"
            edit={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
