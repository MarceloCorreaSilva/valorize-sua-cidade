import React from "react";
import Select from "react-select";

function Header({ options, placeholder, isMulti, id, name }) {

  return (
    <div className="uk-form-controls">
      <Select
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
        id={id}
        name={name}
        // className="basic-multi-select"
        // classNamePrefix="select"
      />
    </div>
  );
}

export default Header;
