import React from "react";

const PrimaryButton = ({ title, type }) => {
  return (
    <button
      type={type}
      className=" p-2 rounded-md text-sm bg-blue-800 text-white uppercase"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
