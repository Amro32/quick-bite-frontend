import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import { useNavigate } from "react-router-dom";
import Loading from "../AssetComponents/Loading/Loading";
import food from "../../assets/food.jpg";
import ReactStars from "react-rating-stars-component";
import Title from "../AssetComponents/Title/Title";
import { useSelector } from "react-redux";

function Item() {
  const navigate = useNavigate();

  const { currency, currencyRate } = useSelector(
    (state) => state.currencyReducer
  );

  let { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [itemRating, setItemRating] = useState(0);
  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API + "/api/items/" + id)
      .then((res) => {
        console.log(res.data.item.images);
        setData(res.data.item);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        navigate("/");
      });
  }, []);
  return (
    <div className="item">
      <BreadCrumb title={data.name} pageName={"Item"} />
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* item details */}
          <Title title={"Item Details"} />
          <div className="itemDescription">
            {/* name */}
            <div className="row">
              <div className="col">Item Name : </div>
              <div className="col">{data.name}</div>
            </div>
            {/* details */}
            <div className="row">
              <div className="col">Details : </div>
              <div className="col">{data.details}</div>
            </div>
            {/* type */}
            <div className="row">
              <div className="col">Type : </div>
              <div className="col">{data.type}</div>
            </div>
            {/* price */}
            <div className="row">
              <div className="col">Price : </div>
              <div className="col">
                <small>{currency}</small>
                {data.sale ? (
                  <span>
                    {(currencyRate * (data.base_price - data.sale)).toFixed(2)}
                    &nbsp;
                    <strike>
                      {(data.base_price * currencyRate).toFixed(2)}
                    </strike>
                  </span>
                ) : (
                  (data.base_price * currencyRate).toFixed(2)
                )}
              </div>
            </div>
            {/* rating */}
            <div className="row">
              <div className="col">Average Rating : </div>
              <div className="col">
                <small>{data.average_rating}</small>/5
              </div>
            </div>
            <div className="row">
              <div className="col">Your Rating : </div>
              <div className="col">
                <ReactStars
                  value={itemRating}
                  onChange={(e) => setItemRating(e)}
                  count={5}
                  activeColor={"#fea116"}
                  name="rating"
                />
              </div>
            </div>
          </div>
          {/* item images */}
          <Title title={"Item Preview"} />
          <div className="itemImages">
            {data.images?.data?.map((im, i) => {
              return (
                <img
                  src={
                    process.env.REACT_APP_API +
                    "/storage/images/items/" +
                    im.path
                  }
                  className="itemImage"
                  alt=""
                  key={i}
                />
              );
            })}
          </div>
          <Title title={"Order Item"} />
          <div className="orderSection d-flex justify-content-center mt-3">
            <button className="btn primaryBtn">+ Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
