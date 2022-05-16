import React, { useEffect, useState } from "react";
import "./About.scss";
import TeamMember from "../Team/TeamMember";
import team1 from "../../assets/team-1.jpg";
import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import About from "./About";
import Faq from "../Faq/Faq";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembers } from "../../redux/team/teamActions";
import { getFaqs } from "../../redux/faq/faqActions";
import Loading from "../AssetComponents/Loading/Loading";
import AddTeamMember from "../Team/AddTeamMember";
import { FaPlusCircle } from "react-icons/fa";
import AddFaqModal from "../Modals/AddFaqModal";

function AboutPage() {
  const dispatch = useDispatch();

  const { team, loadingTeam } = useSelector((state) => state.teamReducer);
  const { faqs, loadingFaqs } = useSelector((state) => state.faqReducer);
  const { isAuthenticated, role } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (team.length === 0) dispatch(getTeamMembers());
    if (faqs.length === 0) dispatch(getFaqs());
  }, []);

  const [addOpen, setAddOpen] = useState(false);
  const handleOpen = () => setAddOpen(true);
  const handleClose = () => setAddOpen(false);
  return (
    <div className="about">
      <BreadCrumb pageName={"About"} title={"About Us"} />
      <About />
      <AddFaqModal show={addOpen} handleClose={handleClose} />
      {/* Team Members */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            {loadingTeam ? (
              <Loading />
            ) : (
              <>
                {team.map((member, i) => {
                  return (
                    <TeamMember
                      name={member.full_name}
                      role1={member.position}
                      src={
                        process.env.REACT_APP_API +
                        "/storage/images/employees/" +
                        member.image
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
              </>
            )}
          </div>
        </div>
      </div>
      {/* FAQ's */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center primaryColor fw-normal">
              FAQ's
            </h5>
            <h1 className="mb-5">Frequently Asked Questions</h1>
          </div>
          <div>
            {loadingFaqs ? (
              <Loading />
            ) : (
              faqs.map((faq, i) => {
                return (
                  <Faq q={faq.question} a={faq.answer} key={i} id={faq.id} />
                );
              })
            )}
            {isAuthenticated && role !== "client" && (
              <div className="w-100 d-flex justify-content-center">
                <button onClick={handleOpen} className="btn primaryBtn">
                  + Add FAQ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
