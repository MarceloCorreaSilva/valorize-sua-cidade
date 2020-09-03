import React from "react";
import ReactSelect from "react-select";

const Select = ({
  name,
  placeholder,
  isMultiple,
  value,
  options,
  onChange,
}) => {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#D3D3D3",
      },
      borderRadius: false,
    };
  }

  return (
    <div className="uk-form-controls">
      <ReactSelect
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
};

export { Select };