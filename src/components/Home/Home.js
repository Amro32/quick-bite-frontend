import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hero from "../../assets/hero.png";
import menu1 from "../../assets/menu-1.jpg";
import menu2 from "../../assets/menu-2.jpg";
import menu3 from "../../assets/menu-3.jpg";
import menu4 from "../../assets/menu-4.jpg";
import menu5 from "../../assets/menu-5.jpg";
import menu6 from "../../assets/menu-6.jpg";
import menu7 from "../../assets/menu-7.jpg";
import menu8 from "../../assets/menu-8.jpg";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";
import testimonial1 from "../../assets/testimonial-1.jpg";
import testimonial2 from "../../assets/testimonial-2.jpg";
import testimonial3 from "../../assets/testimonial-3.jpg";
import testimonial4 from "../../assets/testimonial-4.jpg";

import {
  FaUserTie,
  FaUtensils,
  FaCartPlus,
  FaHeadset,
  FaHamburger,
  FaCoffee,
} from "react-icons/fa";
import Testimonial from "./Testimonial";
import About from "../About/About";
import TeamMember from "../Team/TeamMember";
import MenuTitle from "../Menu/MenuTitle";
import MenuItem from "../Menu/MenuItem";
import { Link } from "react-router-dom";
import { getFeedbacks } from "../../redux/feedback/feedbackActions";
import { getMenus } from "../../redux/menu/menuActions";
import { getTeamMembers } from "../../redux/team/teamActions";
import Loading from "../AssetComponents/Loading/Loading";

function Home() {
  // Carousel configuration
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // menus data
  const { menus, loadingMenus } = useSelector((state) => state.menuReducer);
  // team members data
  const { team, loadingTeam } = useSelector((state) => state.teamReducer);
  //visit feedbacks or testimonials
  const { feedbacks, loadingTestimonials } = useSelector(
    (state) => state.feedbackReducer
  );

  // const menus = [
  //   {
  //     id: 1,
  //     type: "Popular",
  //     name: "Breakfast",
  //     icon: FaCoffee,
  //   },
  //   {
  //     id: 2,
  //     type: "Special",
  //     name: "Launch",
  //     icon: FaHamburger,
  //   },
  //   {
  //     id: 3,
  //     type: "Lovely",
  //     name: "Dinner",
  //     icon: FaUtensils,
  //   },
  // ];

  const dispatch = useDispatch();

  useEffect(() => {
    if (feedbacks.length === 0) dispatch(getFeedbacks());
    if (menus.length === 0) dispatch(getMenus());
    if (team.length === 0) dispatch(getTeamMembers());
  }, []);

  return (
    <>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white title">
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                to="/book"
                className="btn btn-primary primaryBtn py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Book A Table
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaUserTie size={50} className="primaryColor mb-4" />
                  <h5>Master Chefs</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaUtensils size={50} className="primaryColor mb-4" />
                  <h5>Quality Food</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaCartPlus size={50} className="primaryColor mb-4" />
                  <h5>Online Order</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FaHeadset size={50} className="primaryColor mb-4" />
                  <h5>24/7 Service</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      <About />

      {/* <!-- Menu Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              {menus.map((menu, i) => {
                return (
                  <MenuTitle
                    href={"#tab-" + i}
                    title={menu.type}
                    subtitle={menu.name}
                    active={i === 0 ? "active" : null}
                    key={i}
                  />
                );
              })}
            </ul>
            <div className="tab-content">
              {loadingMenus ? (
                <Loading />
              ) : (
                menus.map((menu, i) => {
                  return (
                    <div
                      id={"tab-" + i}
                      className={`tab-pane fade show p-0 ${
                        i === 0 ? "active" : ""
                      }`}
                      key={i}
                    >
                      <div className="row g-4">
                        {menu?.items?.data?.map((item, j) => {
                          return (
                            <MenuItem
                              src={menu1}
                              name={item.name}
                              description={item.details}
                              price={item.base_price}
                              currency={"$"}
                              key={j}
                              sale={item.sale}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Menu End --> */}

      {/* <!-- Reservation Start --> */}
      <div
        className="container-xxl py-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start primaryColor fw-normal">
                Reservation
              </h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        id="datetime"
                        placeholder="Date &#38; Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date &#38; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select" id="select1">
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                      </select>
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
                    <button className="btn primaryBtn w-100 py-3" type="submit">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
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
      {/* <!-- Reservation Start --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>

          {loadingTeam ? (
            <Loading />
          ) : (
            <div className="row g-4">
              {team.map((member, i) => {
                return (
                  <TeamMember
                    name={member.full_name}
                    role={member.position}
                    src={team1}
                    fb={member.fb_link}
                    twitter={member.twitter_link}
                    insta={member.ig_link}
                    key={i}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          {loadingTestimonials ? (
            <Loading />
          ) : (
            <Carousel responsive={responsive} autoPlay={false}>
              {feedbacks.map((f, i) => {
                return (
                  <Testimonial
                    src={testimonial1}
                    name={f.user.first_name + " " + f.user.last_name}
                    text={f.details}
                    rating={f.rating}
                    key={i}
                  />
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}

export default Home;
