import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn bg-pink-600 border-0 text-white hover:bg-pink-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;