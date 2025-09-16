import React from "react";
import CardDonation from "../components/card/CardDonation";

const Dashboard = () => {
  return (
    <div>
      <div className="my-4">
        <h1 className="font-bold text-2xl mb-2">Kategori</h1>
        <div className="flex gap-2">
          <div className="border-2 border-blue-500 rounded-full p-2 flex justify-center items-center size-20">
            <p className="text-xs font-bold text-blue-500">Sosial</p>
          </div>
          <div className="border-2 border-blue-500 rounded-full p-2 flex justify-center items-center size-20">
            <p className="text-xs font-bold text-blue-500">Bangunan</p>
          </div>
          <div className="border-2 border-blue-500 rounded-full p-2 flex justify-center items-center size-20">
            <p className="text-xs font-bold text-blue-500">Hewan</p>
          </div>
          <div className="border-2 border-blue-500 rounded-full p-2 flex justify-center items-center size-20">
            <p className="text-xs font-bold text-blue-500">Pendidikan</p>
          </div>
          <div className="border-2 border-blue-500 rounded-full p-2 flex justify-center items-center size-20">
            <p className="text-xs font-bold text-blue-500">Bencana</p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h1 className="font-bold text-2xl mb-2">Penggalangan Dana Mendesak</h1>
        <div className="flex gap-4 ">
          <CardDonation />
          <CardDonation /> <CardDonation /> <CardDonation />
        </div>
      </div>
      <div className="my-4">
        <h1 className="font-bold text-2xl mb-2">Penggalangan Dana</h1>
        <div className="flex gap-4">
          <CardDonation /> <CardDonation /> <CardDonation /> <CardDonation />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
