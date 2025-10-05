import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const MessageAlert = ({ data }) => {
  switch (data.status) {
    case "error":
      return (
        <div className="p-3 bg-red-200 rounded-md flex gap-2 items-center text-red-500  text-sm ">
          <FiAlertTriangle />
          <p>{data.message}</p>
        </div>
      );
    case "success":
      return <div>{data.message}</div>;
    default:
      break;
  }
};

export default MessageAlert;
