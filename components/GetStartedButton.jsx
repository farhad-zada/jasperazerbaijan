import React from "react";

const GetStartedButton = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-2xl p-4 w-full  md:hover:shadow-purple md:hover:ring-2 md:hover:shadow-lg md:hover:ring-purple transition-all duration-300`}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
