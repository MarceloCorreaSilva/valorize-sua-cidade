import React from "react";

function Button({ type, label }) {
  return (
    <button
      type={type}
      className="form_submit uk-button uk-button-primary uk-width-expand uk-button-small uk-border-rounded"
    >
      {label}
    </button>
  );
}

export default Button;
