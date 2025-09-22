import React from "react";

const CardHistoryDonation = () => {
  return (
    <div className="rounded-xl shadow-md " id="card-donation">
      <div className="relative" id="card-header">
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
            <h6 className=" text-sm font-semibold text-gray-500">Memberi</h6>
            <h6 className="text-blue-600 font-bold">Rp.100.000.00</h6>
          </div>
          <h6 className="text-sm">Tanggal : 12-12-12</h6>
        </div>
      </div>
    </div>
  );
};

export default CardHistoryDonation;
