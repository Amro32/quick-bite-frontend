import React from "react";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import { FaEnvelopeOpen } from "react-icons/fa";
import Title from "../AssetComponents/Title/Title";

function Admin() {
  return (
    <div className="contact">
      <BreadCrumb title={"Admin Page"} pageName={"Admin"} />
      <div className="container-xxl py-5">
        <div className="container">
          <Title title="Admins" subtitle={"Manage website administrators"} />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
