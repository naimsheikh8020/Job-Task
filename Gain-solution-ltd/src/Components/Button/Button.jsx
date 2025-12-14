import React from "react";

const Button = ({text, onClick, type = "button",className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded border border-gray-300 bg-white cursor-pointer font-medium text-gray-700 hover:bg-gray-200 ${className}`}>

       {text}
    </button>
  );
};

export default Button;
