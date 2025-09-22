import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

const EmptyDonation = () => {
  return (
    <div className="w-full bg-gray-300 rounded-md h-32 flex justify-center items-center shadow-sm">
      <div className="text-center">
        <FaHandHoldingHeart className="mx-auto mb-4 text-gray-600" size={30} />
        <h1 className="text-gray-600">
          Anda belum memberikan bantuan donasi apapun.
        </h1>
      </div>
    </div>
  );
};

export default EmptyDonation;
