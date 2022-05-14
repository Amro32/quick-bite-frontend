import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function TeamMember({ name, role, src, fb, twitter, insta }) {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src={src} alt="" />
        </div>
        <h5 className="mb-0">{name}</h5>
        <small>{role}</small>
        <div className="d-flex justify-content-center mt-3">
          <a
            className="btn btn-square primaryBtn mx-1"
            href={fb.includes("http") ? fb : "http://" + fb}
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="btn btn-square primaryBtn mx-1"
            href={twitter.includes("http") ? twitter : "http://" + twitter}
            target="_blank"
          >
            <i className="fab">
              <FaTwitter />
            </i>
          </a>
          <a
            className="btn btn-square primaryBtn mx-1"
            href={insta.includes("http") ? insta : "http://" + insta}
            target="_blank"
          >
            <i className="fab">
              <FaInstagram />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
