import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hero from "../../assets/hero.png";
import video from "../../assets/video.jpg";
import testimonial1 from "../../assets/testimonial-1.jpg";
import { FaUserTie, FaUtensils, FaCartPlus, FaHeadset } from "react-icons/fa";
import Testimonial from "./Testimonial";
import About from "../About/About";
import TeamMember from "../Team/TeamMember";
import { Link } from "react-router-dom";
import { getFeedbacks } from "../../redux/feedback/feedbackActions";
import { getMenus, getTrendingItems } from "../../redux/menu/menuActions";
import { getTeamMembers } from "../../redux/team/teamActions";
import Loading from "../AssetComponents/Loading/Loading";
import Title from "../AssetComponents/Title/Title";
import { getCurrencies } from "../../redux/currency/currencyActions";
import Menu from "../Menu/Menu";
import AddTeamMember from "../Team/AddTeamMember";
import { useNavigate } from "react-router-dom";
import team1 from "../../assets/team-1.jpg";
import MenuItem from "../Menu/MenuItem";

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
  const { menus, loadingMenus, trending, loadingTrending } = useSelector(
    (state) => state.menuReducer
  );
  // team members data
  const { team, loadingTeam } = useSelector((state) => state.teamReducer);
  //visit feedbacks or testimonials
  const { feedbacks, loadingTestimonials } = useSelector(
    (state) => state.feedbackReducer
  );
  //currencies
  const { currencies, loadingCurrencies, currency, currencyRate } = useSelector(
    (state) => state.currencyReducer
  );
  //authentication
  const { isAuthenticated, role } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (feedbacks.length === 0) dispatch(getFeedbacks());
    if (menus.length === 0) dispatch(getMenus());
    if (team.length === 0) dispatch(getTeamMembers());
    if (currencies.length === 0) dispatch(getCurrencies());
    if (trending.length === 0) dispatch(getTrendingItems());
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
          <Title title={"Food Menu"} subtitle={"Most Popular Items"} />
          <div className="row g-4">
            {trending.map((item, j) => {
              return (
                <MenuItem
                  src={
                    process.env.REACT_APP_API +
                    "/storage/images/items/" +
                    item.images?.data[0]?.path
                  }
                  currency={currency}
                  currencyRate={currencyRate}
                  key={j}
                  item={item}
                  menuid={0}
                />
              );
            })}
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
                  <div className="col-12">
                    <button
                      className="btn primaryBtn w-100 py-3"
                      type="button"
                      onClick={() => navigate("/book")}
                    >
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
                  src={video}
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                  title="book"
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
          <Title title="Team Members" subtitle={"Our Master Chefs"} />

          {loadingTeam ? (
            <Loading />
          ) : (
            <div className="row g-4">
              {team.map((member, i) => {
                return (
                  <TeamMember
                    name={member.full_name}
                    role1={member.position}
                    src={
                      member.image != 0
                        ? process.env.REACT_APP_API +
                          "/storage/images/employees/" +
                          member.image
                        : team1
                    }
                    fb={member.fb_link}
                    twitter={member.twitter_link}
                    insta={member.ig_link}
                    id={member.id}
                    key={i}
                  />
                );
              })}
              {isAuthenticated && role !== "client" && <AddTeamMember />}
            </div>
          )}
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <Title title="Testimonials" subtitle={"What Our Clients Say!"} />
          {loadingTestimonials ? (
            <Loading />
          ) : (
            <Carousel responsive={responsive} autoPlay={false}>
              {feedbacks.map((f, i) => {
                return (
                  <Testimonial
                    src={testimonial1}
                    name={f.user?.first_name + " " + f.user?.last_name}
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
