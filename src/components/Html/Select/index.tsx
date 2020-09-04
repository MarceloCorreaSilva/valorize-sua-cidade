import React from "react";
import ReactSelect, { Props, Theme } from "react-select";

const Select: React.FC<Props> = ({
  name,
  placeholder,
  isMultiple,
  value,
  options,
  onChange,
}) => {
  function customTheme(theme: Theme): Theme {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#D3D3D3",
      },
      borderRadius: 0,
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
