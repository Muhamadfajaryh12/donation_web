import React from "react";
import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

const MessageAlert = ({ data }) => {
  switch (data.status) {
    case 400:
      return (
        <div className="p-3 bg-red-200 rounded-md flex gap-2 items-center text-red-500  text-sm ">
          <FiAlertTriangle />
          <p>{data.message}</p>
        </div>
      );
    case 200:
    case 201:
      return (
        <div className="p-3 bg-green-200 rounded-md flex gap-2 items-center text-green-600 text-sm">
          <FiCheckCircle />
          <p>{data.message}</p>
        </div>
      );
    default:
      break;
  }
};

export default MessageAlert;
