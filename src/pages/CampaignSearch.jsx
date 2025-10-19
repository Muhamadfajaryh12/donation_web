import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import campaignAPI from "../shared/CampaignAPI";
import CardDonation from "../components/card/CardDonation";

const CampaignSearch = ({ mode }) => {
  const [params] = useSearchParams();
  console.log(mode);
  const paramKey = params.get("q") || params.get("id");

  const [data, setData] = useState([]);
  const getCampaign = async (id) => {
    let response;
    if (mode == "category") {
      response = await campaignAPI.getCampaignByCategory(id);
    } else {
      response = await campaignAPI.getCampaignBySearch(id);
    }
    setData(response.data);
  };

  useEffect(() => {
    getCampaign(paramKey);
  }, [mode, paramKey]);
  return (
    <div>
      <h1>Hasil pencarian</h1>
      {data.map((item) => (
        <CardDonation data={item} />
      ))}
    </div>
  );
};

export default CampaignSearch;
