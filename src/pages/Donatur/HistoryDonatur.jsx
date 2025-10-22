import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import CardHistoryDonation from "../../components/card/CardHistoryDonation";
import EmptyDonation from "../../components/alert/EmptyDonation";
import DonationAPI from "../../shared/DonationAPI";

const HistoryDonatur = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const limitItem = 5;

  const getData = async () => {
    const response = await DonationAPI.getHistoryDonation();
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const firstIndex = (currentPage - 1) * limitItem;
  const lastIndex = currentPage * limitItem;
  const filterData = data?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data?.length / limitItem);
  return (
    <>
      <h1 className="font-bold mb-4">Riwayat Donasi</h1>
      {filterData.length > 0 ? (
        <>
          {filterData.map((item) => (
            <CardHistoryDonation data={item} />
          ))}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              onClick={() => {
                setCurrentPage(index + 1);
              }}
              className={`p-2 border rounded-md mx-2 w-10 ${
                currentPage == index + 1
                  ? "border-blue-500 text-blue-500 font-semibold"
                  : "border-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </>
      ) : (
        <EmptyDonation />
      )}
    </>
  );
};

export default HistoryDonatur;
