import React from "react";

const GetStartedButton = ({ className }) => {
  return (
    <button
      className={`rounded-2xl p-4 w-full ${className} md:hover:shadow-purple md:hover:ring-2 md:hover:shadow-lg md:hover:ring-purple transition-all duration-300`}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
