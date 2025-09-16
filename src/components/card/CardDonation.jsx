import React from "react";
import { Link } from "react-router-dom";

const CardDonation = () => {
  return (
    <Link to={"/donation"}>
      <div className="rounded-xl shadow-md " id="card-donation">
        <div className="" id="card-header">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.omyx7hTmuxZhMBAXJ9AgogHaE8?pid=Api&P=0&h=180"
            alt=""
            className="rounded-t-lg"
          />
        </div>
        <div className="p-3" id="card-body">
          <div className="mb-2 flex gap-2 items-center" id="">
            <p className="text-xs text-gray-500">Penggalang donasi</p>
          </div>
          <h6 className="text-sm font-bold">Wujudkan impian anak-anak</h6>
          <div className="mt-4">
            <div className="flex gap-1 items-end mb-1">
              <h6 className=" text-sm font-semibold">Tersedia</h6>
              <h6 className="text-blue-600 font-semibold">Rp.100.000.00</h6>
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
