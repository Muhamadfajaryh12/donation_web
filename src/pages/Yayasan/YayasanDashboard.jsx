import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import { useAuth } from "../../context/AuthProvider";
import dashboardAPI from "../../shared/DashboardAPI";

const YayasanDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  console.log(user);
  const getData = async (id) => {
    const dataCampaign = await dashboardAPI.getSummayCampaign(id);
    setData(dataCampaign.data[0]);
  };

  useEffect(() => {
    if (user) {
      getData(user.id);
    }
  }, [user]);
  return (
    <div>
      <BreadCrumb data={["Yayasan", "Dashboard"]} />
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Campaign</h1>
          <p className="font-bold text-4xl my-4 ">{data.total_campaign}</p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Dibuka</h1>
          <p className="font-bold text-4xl my-4 ">{data.total_campaign_open}</p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Selesai</h1>{" "}
          <p className="font-bold text-4xl my-4 ">
            {data.total_campaign_close}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YayasanDashboard;
