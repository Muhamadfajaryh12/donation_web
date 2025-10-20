import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import { useAuth } from "../../context/AuthProvider";
import dashboardAPI from "../../shared/DashboardAPI";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { useToIDR } from "../../hooks/useToIDR";

const YayasanDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const toIDR = useToIDR();
  const getData = async (id) => {
    const dataCampaign = await dashboardAPI.getSummayCampaign(id);
    setData(dataCampaign.data);
    console.log(dataCampaign);
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
          <p className="font-bold text-4xl my-4 ">
            {data?.data_campaign?.total_campaign}
          </p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Dibuka</h1>
          <p className="font-bold text-4xl my-4 ">
            {data?.data_campaign?.total_campaign_open}
          </p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Selesai</h1>{" "}
          <p className="font-bold text-4xl my-4 ">
            {data?.data_campaign?.total_campaign_close}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="w-full">
          <LineChart
            style={{ width: "100%", aspectRatio: 1.618 }}
            responsive
            data={data?.data_donation_day}
          >
            <CartesianGrid />
            <Line dataKey={"total_donation"} />
            <XAxis dataKey={"date"} />
            <YAxis />
          </LineChart>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border border-gray-300 w-full h-32 rounded-md p-4">
            <h1 className="tracking-wider font-semibold">Donatur Unik</h1>
            <p className="font-bold text-4xl my-4 ">
              {data?.data_total_donatur?.total_donatur}
            </p>
          </div>
          <div className="border border-gray-300 w-full h-32 rounded-md p-4">
            <h1 className="tracking-wider font-semibold">Rata-Rata Donasi</h1>
            <p className="font-bold text-4xl my-4 ">
              {toIDR(data?.data_total_donatur?.total_avg_donatur)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YayasanDashboard;
