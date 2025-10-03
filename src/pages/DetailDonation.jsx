import React from "react";
import CardGreetingDonation from "../components/card/CardGreetingDonation";
import PrimaryButton from "../components/button/PrimaryButton";
import { Link, useSearchParams } from "react-router-dom";
import { FaClock, FaTimes } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const DetailDonation = () => {
  const params = useSearchParams();
  const { id } = params;
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.omyx7hTmuxZhMBAXJ9AgogHaE8?pid=Api&P=0&h=180"
          alt=""
          className="w-xl rounded-md"
        />
        <h1>Penggalang Donasi</h1>
        <h1 className="font-extrabold text-2xl">
          Mari berdonasi untuk siswa SDN XXX
        </h1>
        <div className="flex gap-2 items-center my-2">
          <div className="flex gap-1 items-center text-sm">
            <FaUserGroup className="text-blue-600" />
            <span>30 Donatur</span>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <FaClock className="text-blue-600" />
            <span>30 hari lagi</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full my-2" id="progress">
          <div className="w-32 bg-blue-600 h-3 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-blue-600 font-bold">
            <span className="text-sm text-gray-500 font-medium mr-1">
              Terkumpul
            </span>
            Rp.1.000.000
          </p>

          <p className="text-blue-600 font-bold">
            <span className="text-sm text-gray-500 font-medium mr-1">
              Tersisa
            </span>
            Rp.1.000.000
          </p>
        </div>
      </div>
      <h1>
        <h1 className="font-bold">Donatur</h1>
        <div className="">
          <CardGreetingDonation /> <CardGreetingDonation />
          <CardGreetingDonation />
        </div>
      </h1>
    </div>
  );
};

export default DetailDonation;
