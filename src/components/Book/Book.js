import React, { useState } from "react";
import { addReservation } from "../../redux/reservation/reservationActions";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../AssetComponents/Loading/Loading";

function Book() {
  const [data, setData] = useState({});

  const { loadingReservation, reservation, error } = useSelector(
    (state) => state.reservationReducer
  );

  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    dispatch(addReservation(data));
  };

  return (
    <div>
      <BreadCrumb title={"Booking"} pageName={"Booking"} />
      <div
        className="container-xxl py-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">

            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start primaryColor fw-normal">
                Reservation
              </h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>
              {loadingReservation ? (
                <Loading />
              ) : (
                <form onSubmit={handle}>
                  <div
                    className="row g-3 mb-3"
                    style={{ color: "var(--primary)" }}
                  >
                    {error}
                    {reservation}
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div
                        className="form-floating date"
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="datetime-local"
                          className="form-control datetimepicker-input"
                          id="datetime"
                          placeholder="Date &#38; Time"
                          required
                          onChange={(e) =>
                            setData({ ...data, date: e.target.value })
                          }
                        />
                        <label htmlFor="datetime">Date &#38; Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          required
                          onChange={(e) =>
                            setData({
                              ...data,
                              number_of_people: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="select1">No Of People</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn primaryBtn w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
