import React, { useEffect, useState } from "react";
import CardDonation from "../components/card/CardDonation";
import campaignAPI from "../shared/CampaignAPI";
import useFetch from "../hooks/useFetch";
import CardSkeleton from "../components/card/CardSkeleton";

const Dashboard = () => {
  const state = useFetch({ url: "/campaign" });

  return (
    <div className="w-full">
      <div className="my-4">
        <h1 className="font-bold  mb-4">Penggalangan Dana Mendesak</h1>
        <div className="flex gap-4">
          {state.loading
            ? Array.from({ length: 3 }, (_, index) => (
                <CardSkeleton key={index} />
              ))
            : state?.data?.urgent?.map((item) => <CardDonation data={item} />)}
        </div>
      </div>
      <div className="my-4">
        <h1 className="font-bold  mb-4">Penggalangan Dana</h1>
        <div className="flex gap-4">
          {state.loading
            ? Array.from({ length: 3 }, (_, index) => (
                <CardSkeleton key={index} />
              ))
            : state?.data?.all?.map((item) => <CardDonation data={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
