import React from "react";

function MenuTitle({ href, title, subtitle, Icon, active }) {
  return (
    <li className="nav-item">
      <a
        className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${
          active ? "active" : ""
        }`}
        data-bs-toggle="pill"
        href={href}
      >
        <i className="fa fa-2x primaryColor">
          <Icon size={30} />
        </i>
        <div className="ps-3">
          <small className="text-body">{title}</small>
          <h6 className="mt-n1 mb-0">{subtitle}</h6>
        </div>
      </a>
    </li>
  );
}

export default MenuTitle;
