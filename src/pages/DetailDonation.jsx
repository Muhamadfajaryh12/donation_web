import React, { useEffect, useState } from "react";
import CardGreetingDonation from "../components/card/CardGreetingDonation";
import PrimaryButton from "../components/button/PrimaryButton";
import { Link, useParams } from "react-router-dom";
import { FaClock, FaTimes } from "react-icons/fa";
import { FaRegCircleCheck, FaUserGroup } from "react-icons/fa6";
import campaignAPI from "../shared/CampaignAPI";
import { useToIDR } from "../hooks/useToIDR";

const DetailDonation = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState(null);
  const [lastIndex, setLastIndex] = useState(5);
  const toIDR = useToIDR();
  const getData = async (value) => {
    const response = await campaignAPI.getDetailCampaign(value);
    setData(response.data);
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const dataDonation = data?.donation?.slice(0, lastIndex);
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <img src={data?.image} alt="" className="w-full h-72 rounded-md" />
        <div className="flex gap-2 items-center mt-4">
          <h1>{data?.name}</h1>
          {data?.is_verified && (
            <FaRegCircleCheck className="text-green-500" size={20} />
          )}
        </div>
        <h1 className="font-extrabold text-2xl">
          Mari berdonasi untuk siswa SDN XXX
        </h1>
        <div className="flex gap-2 items-center my-2">
          <div className="flex gap-1 items-center text-sm">
            <FaUserGroup className="text-blue-600" />
            <span>{data?.donation.length} Donatur</span>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <FaClock className="text-blue-600" />
            <span>{data?.remaining_days} hari lagi</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full" id="progress">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${Math.min(
                (data?.current_amount / data?.amount) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-blue-600 font-bold">
            <span className="text-sm text-gray-500 font-medium mr-1">
              Terkumpul
            </span>
            {toIDR(data?.current_amount)}
          </p>

          <p className="text-blue-600 font-bold">
            <span className="text-sm text-gray-500 font-medium mr-1">
              Tersisa
            </span>
            {toIDR(data?.amount - data?.current_amount)}
          </p>
        </div>
      </div>

      <h1 className="font-bold">Donatur</h1>
      {dataDonation?.length > 0 ? (
        <div className="">
          {dataDonation?.map((item) => (
            <CardGreetingDonation key={item.id} data={item} />
          ))}
          <button
            className="p-2 bg-gray-200 w-full mt-2 rounded-md text-sm  hover:bg-gray-300"
            onClick={() => setLastIndex((prev) => prev + 5)}
          >
            Tampilkan lebih banyak
          </button>
        </div>
      ) : (
        <div className="bg-gray-200 p-4 rounded-md text-center">
          <p className="text-sm text-gray-600">
            Belum ada yang memberikan donasi{" "}
          </p>
        </div>
      )}
      <Link
        to={`/donation/${id}`}
        className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md w-full text-white text-center"
      >
        Berikan donasi
      </Link>
    </div>
  );
};

export default DetailDonation;
