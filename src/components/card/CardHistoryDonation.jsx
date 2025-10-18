import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useToIDR } from "../../hooks/useToIDR";

const CardHistoryDonation = ({ data }) => {
  const toIDR = useToIDR();
  return (
    <div
      className="rounded-xl shadow-md flex gap-2 my-2 items-center border border-gray-200"
      id="card-donation"
    >
      <div id="card-header">
        <img src={data.image} alt="" className="w-48 h-36 rounded-md " />
      </div>
      <div className="p-3" id="card-body">
        <div className="mb-2 flex gap-2 items-center" id="">
          <p className="text-xs text-gray-500">{data.name}</p>
          {data?.is_verified && (
            <FaRegCircleCheck className="text-green-500" size={20} />
          )}
        </div>
        <h6 className="text-sm font-bold">{data.title}</h6>
        <div className="">
          <div className="flex gap-1 items-end mb-1">
            <h6 className=" text-sm font-semibold text-gray-500">Memberi</h6>
            <h6 className="text-blue-600 font-bold">{toIDR(data.donation)}</h6>
          </div>
          <h6 className="text-sm">Tanggal : 12-12-12</h6>
        </div>
      </div>
    </div>
  );
};

export default CardHistoryDonation;
