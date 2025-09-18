import React from "react";

const CardGreetingDonation = () => {
  return (
    <div className="p-2 border-b rounded-md border-gray-300">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-blue-600">Nama Pengirim</h1>{" "}
        <span className=" text-gray-500 text-sm">13 Jam lalu</span>
      </div>
      <h1 className="text-sm">
        Donasi <span className="font-bold">Rp.1.000.000</span>
      </h1>
    </div>
  );
};

export default CardGreetingDonation;
