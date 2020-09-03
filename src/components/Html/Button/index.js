import React from "react";

const Button = ({ type, label }) => {
  return (
    <button
      type={type ? type : "button"}
      className="uk-button uk-button-primary uk-button-large uk-width-expand"
      style={{
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {label}
    </button>
  );
};

export { Button };
