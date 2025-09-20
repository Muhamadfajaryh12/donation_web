import React from "react";
import { FaClock, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardDonation = () => {
  return (
    <Link to={"/detail"}>
      <div className="rounded-xl shadow-md " id="card-donation">
        <div className="relative" id="card-header">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.omyx7hTmuxZhMBAXJ9AgogHaE8?pid=Api&P=0&h=180"
            alt=""
            className="rounded-t-lg"
          />
          <div className="absolute bottom-0 flex  justify-between w-full">
            <div className="text-xs bg-white p-1 rounded-full m-2 w-14 text-center ">
              <p className="text-blue-600 font-semibold">Buka</p>
            </div>
            <div className="text-xs bg-white p-1 rounded-full m-2  text-center flex items-center gap-1  text-blue-600 font-semibold">
              <FaClock /> <p>30 hari</p>
            </div>
          </div>
        </div>
        <div className="p-3" id="card-body">
          <div className="mb-2 flex gap-2 items-center" id="">
            <p className="text-xs text-gray-500">Penggalang donasi</p>
          </div>
          <h6 className="text-sm font-bold">Wujudkan impian anak-anak</h6>
          <div className="mt-4">
            <div className="flex gap-1 items-end mb-1">
              <h6 className=" text-sm font-semibold text-gray-500">
                Terkumpul
              </h6>
              <h6 className="text-blue-600 font-bold">Rp.100.000.00</h6>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full" id="progress">
              <div className="w-32 bg-blue-600 h-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDonation;
