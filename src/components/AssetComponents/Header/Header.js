import React from "react";
import "./Header.scss";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 customNav">
        <a href="" className="navbar-brand p-0">
          <h1 className="primaryColor m-0 title logo">
            <FaUtensils
              color={"var(--primary)"}
              style={{ marginRight: "1rem" }}
            />
            <div>Restoran</div>
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to="/book" className="btn btn-primary primaryBtn py-2 px-4">
            Book A Table
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
