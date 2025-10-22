import React from "react";
import { FaClock, FaTimes, FaTrash } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useToIDR } from "../../hooks/useToIDR";

const CardDonation = ({ data }) => {
  const toIDR = useToIDR();
  return (
    <Link to={`/campaign/${data.id}`} className="w-full max-w-96">
      <div className="rounded-xl shadow-md " id="card-donation">
        <div className="relative" id="card-header">
          <img src={data.image} alt="" className="rounded-t-lg w-full h-48" />
          <div className="absolute bottom-0 flex  justify-between w-full">
            <div className="text-xs bg-white p-1 rounded-full m-2 w-14 text-center ">
              <p className="text-blue-600 font-semibold">{data.status}</p>
            </div>
            <div className="text-xs bg-white p-1 rounded-full m-2  text-center flex items-center gap-1  text-blue-600 font-semibold">
              <FaClock /> <p>{data.remaining_days} hari</p>
            </div>
          </div>
        </div>
        <div className="p-3" id="card-body">
          <div className="mb-2 flex gap-2 items-center" id="">
            <p className="text-xs text-gray-500">{data.name}</p>
            {data?.is_verified && (
              <FaRegCircleCheck className="text-green-500" size={20} />
            )}
          </div>
          <h6 className="text-sm font-bold">{data.title}</h6>
          <div className="mt-4">
            <div className="flex gap-1  mb-1 items-center">
              <h6 className=" text-sm font-semibold text-gray-500">
                Terkumpul
              </h6>
              <h6 className="text-blue-600 font-bold">
                {toIDR(data.current_amount)}
              </h6>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full" id="progress">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${Math.min(
                    (data.current_amount / data.amount) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDonation;
