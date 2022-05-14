import React from "react";
import { useNavigate } from "react-router-dom";

function MenuItem({
  name,
  description,
  src,
  price,
  currency,
  sale,
  id,
  currencyRate,
}) {
  const navigate = useNavigate();

  return (
    <div className="col-lg-6 itemDiv" onClick={() => navigate("/item/" + id)}>
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
              <small>{currency}</small>
              {sale ? (
                <span>
                  {(currencyRate * (price - sale)).toFixed(2)}&nbsp;
                  <strike>{(price * currencyRate).toFixed(2)}</strike>
                </span>
              ) : (
                (price * currencyRate).toFixed(2)
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
