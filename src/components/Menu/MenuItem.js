import React from "react";

function MenuItem({ name, description, src, price, currency, sale }) {
  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <img
          className="flex-shrink-0 img-fluid rounded"
          src={src}
          alt=""
          style={{ width: "80px" }}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{name}</span>
            <span className="primaryColor">
              {currency}
              {sale ? (
                <span>
                  {(price - sale).toFixed(2)}&nbsp;<strike>{price}</strike>
                </span>
              ) : (
                price
              )}
            </span>
          </h5>
          <small className="fst-italic">{description}</small>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
