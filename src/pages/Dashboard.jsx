import React, { useEffect, useState } from "react";
import CardDonation from "../components/card/CardDonation";
import campaignAPI from "../shared/CampaignAPI";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const dataCampaign = async () => {
    const response = await campaignAPI.getCampaign();

    setData(response.data);
  };

  useEffect(() => {
    dataCampaign();
  }, []);
  return (
    <div className="w-full">
      <div className="my-4">
        <h1 className="font-bold text-2xl mb-2">Penggalangan Dana Mendesak</h1>
        <div className="flex gap-4 "></div>
      </div>
      <div className="my-4">
        <h1 className="font-bold text-2xl mb-2">Penggalangan Dana</h1>
        <div className="flex gap-4">
          {data.map((item) => (
            <CardDonation data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
