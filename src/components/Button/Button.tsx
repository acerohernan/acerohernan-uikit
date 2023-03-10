import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button type="button" style={{ cursor: "pointer", padding: "10px 20px", fontFamily: "monospace" }}>
      {label}
    </button>
  );
};

export default Button;
