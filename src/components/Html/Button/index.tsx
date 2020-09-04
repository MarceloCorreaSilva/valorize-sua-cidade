import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, type, ...rest }) => {
  return (
    <button
      type={type}
      className="uk-button uk-button-primary uk-button-large uk-width-expand"
      {...rest}
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
