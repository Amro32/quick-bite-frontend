import React from "react";
import { FaUtensils } from "react-icons/fa";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import about3 from "../../assets/about-3.jpg";
import about4 from "../../assets/about-4.jpg";

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src={about1}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={about2}
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={about3}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={about4}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start primaryColor fw-normal">
              About Us
            </h5>
            <h1 className="mb-4 title">
              Welcome to{" "}
              <i className="fa fa-utensils primaryColor me-2">
                <FaUtensils />
              </i>
              Quick Bite
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-5 primaryBorder px-3">
                  <h1
                    className="flex-shrink-0 display-5 prinmaryColor mb-0"
                    data-toggle="counter-up"
                  >
                    15
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-5 primaryBorder px-3">
                  <h1
                    className="flex-shrink-0 display-5 prinmaryColor mb-0"
                    data-toggle="counter-up"
                  >
                    50
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <a className="btn primaryBtn py-3 px-5 mt-2" href="">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
