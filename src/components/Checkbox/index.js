import React from "react";

function Checkbox({ name, label, checked, onChange }) {
  return (
    <label>
      <input
        id={name}
        name={name}
        className="uk-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />{" "}
      {label}
    </label>
  );
}

export default Checkbox;
