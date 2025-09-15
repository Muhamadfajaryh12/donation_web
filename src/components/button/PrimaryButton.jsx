import React from "react";

const PrimaryButton = ({ title, type }) => {
  return (
    <button
      type={type}
      className=" p-2 rounded-md text-sm bg-blue-400 text-white "
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
