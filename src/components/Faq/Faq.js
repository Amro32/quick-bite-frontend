import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import DeleteModal from "../Modals/DeleteModal";
import { deleteFaq } from "../../redux/faq/faqActions";

function Faq({ q, a, id }) {
  const [open, setOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  const handleOpen = () => setDelOpen(true);
  const handleClose = () => setDelOpen(false);

  const { isAuthenticated, role } = useSelector((state) => state.userReducer);
  const style = { cursor: "pointer", color: "var(--primary)" };
  return (
    <div className="faq">
      <DeleteModal
        id={id}
        action={deleteFaq}
        showDelete={delOpen}
        handleDeleteClose={handleClose}
      />
      <div className="faq_question">
        <span>{q}</span>
        <div>
          {open ? (
            <AiOutlineMinusCircle
              style={style}
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <AiOutlinePlusCircle
              style={style}
              onClick={() => {
                setOpen(!open);
              }}
            />
          )}
          {isAuthenticated && role !== "client" && (
            <FaTrash onClick={handleOpen} />
          )}
        </div>
      </div>
      {open && <div className="faq_answer">{a}</div>}
    </div>
  );
}

export default Faq;
