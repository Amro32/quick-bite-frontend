import React, { useState, useEffect } from "react";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import "./Item.scss";

function Item() {
  useEffect(() => {});
  return (
    <div className="item">
      <BreadCrumb title={"Item"} pageName={"Item"} />
    </div>
  );
}

export default Item;
