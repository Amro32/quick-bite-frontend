import React from "react";
import "./About.scss";
import TeamMember from "../Team/TeamMember";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";

import BreadCrumb from "../AssetComponents/BreadCrumb/BreadCrumb";
import About from "./About";
import Faq from "../Faq/Faq";

function AboutPage() {
  return (
    <div className="about">
      <BreadCrumb pageName={"About"} title={"About Us"} />
      <About />

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
            <TeamMember name={"Full name"} role={"designation"} src={team1} />
            <TeamMember name={"Full name"} role={"designation"} src={team2} />
            <TeamMember name={"Full name"} role={"designation"} src={team3} />
            <TeamMember name={"Full name"} role={"designation"} src={team4} />
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
            <Faq q={"Are there aliens?"} a={"Why do you ask?"} />
            <Faq q={"Are there aliens?"} a={"Why do you ask?"} />
            <Faq q={"Are there aliens?"} a={"Why do you ask?"} />
            <Faq q={"Are there aliens?"} a={"Why do you ask?"} />
            <Faq q={"Are there aliens?"} a={"Why do you ask?"} />
            <Faq q={"Are there aliens?"} a={"Why do you ask?"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
