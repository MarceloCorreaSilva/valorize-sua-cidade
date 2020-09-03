import React from "react";

function Button({ type, label }) {
  return (
    <button
      type={type}
      className="uk-button uk-button-primary uk-button-large uk-width-expand"
      style={{
        fontSize: '20px',
        fontWeight: 'bold'
      }}
    >
      {label}
    </button>
  );
}

export default Button;
