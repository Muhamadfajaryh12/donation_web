import React from "react";

const PrimaryButton = ({ title, type, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className=" p-2 rounded-md text-xs tracking-widest bg-blue-800 text-white uppercase"
    >
      {disabled ? (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      ) : (
        title
      )}
    </button>
  );
};

export default PrimaryButton;
