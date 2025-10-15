import React from "react";

const CardStatusVerfy = ({ status }) => {
  switch (status) {
    case 1:
      return (
        <div className="bg-green-200 w-48 p-2 rounded-md text-xs">
          <p className="text-center text-green-500 tracking-wider font-semibold">
            Terverifikasi
          </p>
        </div>
      );
    default:
      return (
        <div className="bg-gray-200 w-48 p-2 rounded-md text-xs">
          <p className="text-center text-gray-500 tracking-wider font-semibold">
            Belum terverifikasi
          </p>
        </div>
      );
  }
};

export default CardStatusVerfy;
