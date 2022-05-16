import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import DeleteModal from "../Modals/DeleteModal";
import { deleteTeam } from "../../redux/team/teamActions";

function TeamMember({ name, role1, src, fb, twitter, insta, id }) {
  const { isAuthenticated, role } = useSelector((state) => state.userReducer);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <DeleteModal
        id={id}
        handleDeleteClose={handleDeleteClose}
        showDelete={deleteOpen}
        action={deleteTeam}
      />
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src={src} alt="" />
        </div>
        <h5 className="mb-0">{name}</h5>
        <small>{role1}</small>
        <div className="d-flex justify-content-center mt-3">
          {fb && (
            <a
              className="btn btn-square primaryBtn mx-1"
              href={fb.includes("http") ? fb : "http://" + fb}
              target="_blank"
            >
              <FaFacebookF />
            </a>
          )}
          {twitter && (
            <a
              className="btn btn-square primaryBtn mx-1"
              href={twitter.includes("http") ? twitter : "http://" + twitter}
              target="_blank"
            >
              <i className="fab">
                <FaTwitter />
              </i>
            </a>
          )}
          {insta && (
            <a
              className="btn btn-square primaryBtn mx-1"
              href={insta.includes("http") ? insta : "http://" + insta}
              target="_blank"
            >
              <i className="fab">
                <FaInstagram />
              </i>
            </a>
          )}
          {isAuthenticated && role !== "client" && (
            <div>
              <FaTrash size={30} onClick={handleDeleteOpen} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
