import React from "react";
import Select from "react-select";

function Header({ name, placeholder, isMultiple, value, options, onChange }) {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#D3D3D3",
      },
      borderRadius: false
    };
  }

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
        theme={customTheme}
        // className="basic-multi-select"
        // classNamePrefix="select"
      />
    </div>
  );
}

export default Header;
