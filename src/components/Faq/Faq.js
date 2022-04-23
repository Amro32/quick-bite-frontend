import React, { useState } from "react";
import "./Faq.scss";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  const style = { cursor: "pointer", color: "var(--primary)" };
  return (
    <div className="faq">
      <div className="faq_question">
        <span>{q}</span>
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
      </div>
      {open && <div className="faq_answer">{a}</div>}
    </div>
  );
}

export default Faq;
