import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ title, pageName }) {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 title">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/" className="primaryColor">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="primaryColor">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              {pageName}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
