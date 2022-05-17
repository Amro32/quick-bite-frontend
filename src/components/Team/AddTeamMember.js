import React, { useState } from "react";
import { useSelector } from "react-redux";
import plus from "../../assets/plus.jpg";
import AddTeamModal from "../Modals/AddTeamModal";

function AddTeamMember() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AddTeamModal show={open} handleClose={handleClose} />
      <div
        className="col-lg-3 col-md-6 wow fadeInUp"
        data-wow-delay="0.1s"
        onClick={() => handleOpen()}
      >
        <div className="team-item text-center rounded overflow-hidden">
          <div className="rounded-circle overflow-hidden m-4">
            <img className="img-fluid" src={plus} alt="" />
          </div>
          <h5 className="mb-0">Add Team Member</h5>
        </div>
      </div>
    </>
  );
}

export default AddTeamMember;
