import React, { useEffect, useState } from "react";
import CardDonation from "../../components/card/CardDonation";
import { useAuth } from "../../context/AuthProvider";
import campaignAPI from "../../shared/CampaignAPI";

const YayasanCampaign = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(user);
  const dataCampaign = async () => {
    const response = await campaignAPI.getCampaignByYayasan(user.id);
    setData(response.data);
  };

  useEffect(() => {
    if (user?.id) {
      dataCampaign();
    }
  }, [user]);
  const itemsPerPage = 6;
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;
  const dataPagination = data.slice(firstIndex, lastIndex);
  const paginationLen = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        {dataPagination.map((item) => (
          <CardDonation data={item} key={item.id} />
        ))}
      </div>
      <div className="flex gap-2 items-center mt-5 justify-center">
        {Array.from({ length: paginationLen }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YayasanCampaign;
