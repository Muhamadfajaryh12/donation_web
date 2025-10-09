import React from "react";

const StatusButton = ({ status }) => {
  switch (status) {
    case "buka":
      return (
        <div className="bg-blue-400 p-2 rounded-md text-white font-semibold capitalize">
          <p>{status}</p>
        </div>
      );
    case "ditutup":
      return (
        <div className="bg-black p-2 rounded-md text-white font-semibold capitalize">
          <p>{status}</p>
        </div>
      );
    default:
      break;
  }
};

export default StatusButton;
