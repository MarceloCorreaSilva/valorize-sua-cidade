import React from "react";
import Select from "react-select";

function Header({ name, placeholder, isMultiple, value, options, onChange }) {
  return (
    <div className="uk-form-controls">
      <Select
        id={name}
        name={name}
        placeholder={placeholder}
        isMulti={isMultiple}
        value={value}
        options={options}
        onChange={onChange}
        // className="basic-multi-select"
        // classNamePrefix="select"
      />
    </div>
  );
}

export default Header;
