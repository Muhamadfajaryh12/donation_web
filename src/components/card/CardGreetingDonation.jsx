import React from "react";
import { useToIDR } from "../../hooks/useToIDR";

const CardGreetingDonation = ({ data }) => {
  const toIDR = useToIDR();
  return (
    <div className="p-2 border-b rounded-md border-gray-300">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-blue-600">{data.name}</h1>{" "}
        <span className=" text-gray-500 text-sm">13 Jam lalu</span>
      </div>
      <h1 className="text-sm">
        Memberikan <span className="font-bold">{toIDR(data.donation)}</span>
      </h1>
    </div>
  );
};

export default CardGreetingDonation;
