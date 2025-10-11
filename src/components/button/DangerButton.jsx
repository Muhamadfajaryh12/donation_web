import React from "react";

const DangerButton = ({ title, type, ...props }) => {
  return (
    <button
      className="p-2 rounded-md text-white tracking-widest bg-red-600 text-xs uppercase"
      type={type}
      {...props}
    >
      {title}
    </button>
  );
};

export default DangerButton;
