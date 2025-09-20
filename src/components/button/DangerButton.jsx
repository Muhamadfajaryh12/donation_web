import React from "react";

const DangerButton = ({ title, type }) => {
  return (
    <button
      className="p-2 rounded-md text-white bg-red-600 text-xs uppercase"
      type={type}
    >
      {title}
    </button>
  );
};

export default DangerButton;
