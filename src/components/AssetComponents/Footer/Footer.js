import React from "react";
import "./Footer.scss";
import {
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div
      className="container-fluid bg-dark2 text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
            <h4 className="section-title ff-secondary text-start primaryColor fw-normal mb-4">
              Company
            </h4>
                      <Link to="/about" className="btn btn-link">
                          About Us
                      </Link>
                      <Link to="/contact" className="btn btn-link">
                          Contact Us
                      </Link>
                      <Link to="/book" className="btn btn-link">
                          Reservation
                      </Link>
                      <Link to="/privacy" className="btn btn-link">
              Privacy Policy
                      </Link>
                      <Link to="/terms" className="btn btn-link">
                          Terms &#38; Condition
                      </Link>
          </div>
                  <div className="col-lg-4 col-md-6">
            <h4 className="section-title ff-secondary text-start primaryColor fw-normal mb-4">
              Contact
            </h4>
            <p className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-3" />
                          City Center, Beirut, Lebanon
            </p>
            <p className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="me-3" />
                          +961 12 345 678            </p>
            <p className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-3" />
                          quickbite@keybase.com
            </p>
            <div className="d-flex pt-2">
                          <a className="btn btn-outline-light btn-social" href="https://www.twitter.com">
                <i className="fab">
                  <FaTwitter />
                </i>
              </a>
                          <a className="btn btn-outline-light btn-social" href="https://www.facebook.com">
                <i className="fab">
                  <FaFacebookF />
                </i>
              </a>
                          <a className="btn btn-outline-light btn-social" href="https://www.youtube.com">
                <i className="fab">
                  <FaYoutube />
                </i>
              </a>
                          <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com">
                <i className="fab">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>
                  <div className="col-lg-4 col-md-6">
            <h4 className="section-title ff-secondary text-start primaryColor fw-normal mb-4">
              Opening
            </h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
                  </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Quick Bite
              </a>
                          , All Right Reserved. Designed By
                          <br /> Mohammad Amro and Nidal Jaafar
              <br />
                          <br />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
