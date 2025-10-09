import React, { useEffect, useState } from "react";
import CardDonation from "../../components/card/CardDonation";
import { useAuth } from "../../context/AuthProvider";
import campaignAPI from "../../shared/CampaignAPI";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import DataTable from "react-data-table-component";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import StatusButton from "../../components/button/StatusButton";

const YayasanCampaign = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const dataCampaign = async () => {
    const response = await campaignAPI.getCampaignByYayasan(user.id);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    if (user?.id) {
      dataCampaign();
    }
  }, [user]);

  return (
    <div className="">
      <BreadCrumb data={["Yayasan", "Campaign"]} />
      <DataTable
        data={data}
        pagination
        columns={[
          {
            name: "Judul",
            selector: (row) => row.title,
          },
          {
            name: "Kategori",
            selector: (row) => row.category,
          },
          {
            name: "Hari Tersisa",
            selector: (row) => `${row.remaining_days} hari`,
          },
          {
            name: "Status",
            selector: (row) => (
              <StatusButton status={row.status.toLowerCase()} />
            ),
          },
          {
            name: "Aksi",
            selector: (row) => (
              <div className="flex gap-2 items-center">
                <button className="p-2 rounded-md bg-gray-300 hover:bg-gray-400 ">
                  <FaEye />
                </button>
                <button className="p-2 rounded-md bg-orange-500 hover:bg-orange-600 ">
                  <FaPencilAlt className="text-white" />
                </button>
                <button className="p-2 rounded-md bg-red-500 hover:bg-red-600">
                  <FaTrash className="text-white" />
                </button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default YayasanCampaign;
