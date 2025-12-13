import React from "react";

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded border border-gray-300 bg-white  font-medium text-gray-700 hover:bg-gray-50"
        >
            {text}
        </button>
    );
};

export default Button;
