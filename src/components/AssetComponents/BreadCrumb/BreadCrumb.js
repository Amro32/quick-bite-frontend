import React from "react";

function BreadCrumb({ title, pageName }) {
  return (
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
      <div class="container text-center my-5 pt-5 pb-4">
        <h1 class="display-3 text-white mb-3 title">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center text-uppercase">
            <li class="breadcrumb-item">
              <a href="#" className="primaryColor">
                Home
              </a>
            </li>
            <li class="breadcrumb-item">
              <a href="#" className="primaryColor">
                Pages
              </a>
            </li>
            <li class="breadcrumb-item text-white active" aria-current="page">
              {pageName}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
