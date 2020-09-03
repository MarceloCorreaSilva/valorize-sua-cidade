import React from "react";

const Checkbox = ({ name, label, checked, onChange }) => {
  return (
    <label
      style={{
        display: "block",
        verticalAlign: "top",
        height: "38px",
        lineHeight: "38px",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      <input
        id={name}
        name={name}
        className="uk-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          width: "38px",
          height: "38px",
          // margin: "0 auto",
          verticalAlign: "bottom",
        }}
      />{" "}
      {label}
    </label>
  );
};

export { Checkbox };
