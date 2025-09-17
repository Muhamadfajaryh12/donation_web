import React from "react";
import CardGreetingDonation from "../components/card/CardGreetingDonation";
import PrimaryButton from "../components/button/PrimaryButton";
import { Link } from "react-router-dom";

const DetailDonation = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.omyx7hTmuxZhMBAXJ9AgogHaE8?pid=Api&P=0&h=180"
          alt=""
          className="w-xl rounded-md"
        />
        <h1>Penggalang Donasi</h1>
        <h1>Tersisa 30 hari lagi</h1>
        <h1>Target Dicapai</h1>
        <h1>Progress Tercapai</h1>
        <div className="w-full bg-gray-200 h-3 rounded-full" id="progress">
          <div className="w-32 bg-blue-600 h-3 rounded-full"></div>
        </div>
      </div>
      <h1>
        <h1>Donasi</h1>
        <div className="">
          <CardGreetingDonation />
        </div>
      </h1>
      <Link to={"/donation"} className="w-full">
        <PrimaryButton title={"Berikan Donasi"} />
      </Link>
    </div>
  );
};

export default DetailDonation;
