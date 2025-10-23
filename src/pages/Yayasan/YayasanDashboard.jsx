import BreadCrumb from "../../components/navigation/BreadCrumb";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { useToIDR } from "../../hooks/useToIDR";
import useFetch from "../../hooks/useFetch";
const YayasanDashboard = () => {
  const toIDR = useToIDR();
  const state = useFetch({ url: "/dashboard", auth: true });
  return (
    <div>
      <BreadCrumb data={["Yayasan", "Dashboard"]} />
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Campaign</h1>
          <p className="font-bold text-4xl my-4 ">
            {state?.data?.data_campaign?.total_campaign}
          </p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Dibuka</h1>
          <p className="font-bold text-4xl my-4 ">
            {state?.data?.data_campaign?.total_campaign_open}
          </p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Selesai</h1>{" "}
          <p className="font-bold text-4xl my-4 ">
            {state?.data?.data_campaign?.total_campaign_close}
          </p>
        </div>
      </div>
      <div className="w-full my-4">
        <LineChart
          style={{
            width: "100%",
            height: 300,
            padding: 0,
          }}
          responsive
          data={state?.data?.data_donation_day}
        >
          <CartesianGrid />
          <Line dataKey={"total_donation"} />
          <XAxis dataKey={"date"} />
          <YAxis />
        </LineChart>
      </div>

      <div className="flex  gap-4">
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Donatur Unik</h1>
          <p className="font-bold text-4xl my-4 ">
            {state?.data?.data_total_donatur?.total_donatur}
          </p>
        </div>
        <div className="border border-gray-300 w-full h-32 rounded-md p-4">
          <h1 className="tracking-wider font-semibold">Rata-Rata Donasi</h1>
          <p className="font-bold text-4xl my-4 ">
            {toIDR(state?.data?.data_total_donatur?.total_avg_donatur)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YayasanDashboard;
