import React from "react";
import { FaClock } from "react-icons/fa";
import CardHistoryDonation from "../../components/card/CardHistoryDonation";
import EmptyDonation from "../../components/alert/EmptyDonation";

const HistoryDonatur = () => {
  return (
    <div className="w-xl">
      <h1 className="font-extrabold text-2xl text-blue-800 mb-4">
        Riwayat Donasi
      </h1>
      {/* <CardHistoryDonation /> */}
      <EmptyDonation />
    </div>
  );
};

export default HistoryDonatur;
