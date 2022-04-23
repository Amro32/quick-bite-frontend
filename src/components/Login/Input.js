import React from "react";

const Input = ({ name, label, type, placeholder, handleChange, style }) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="input"
        placeholder={placeholder}
        required
        onChange={handleChange}
        style={style ? style : {}}
      />
    </div>
  );
};

export default Input;
