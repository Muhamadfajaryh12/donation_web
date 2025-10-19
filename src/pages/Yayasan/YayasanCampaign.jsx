import React, { useEffect, useState } from "react";
import CardDonation from "../../components/card/CardDonation";
import { useAuth } from "../../context/AuthProvider";
import campaignAPI from "../../shared/CampaignAPI";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import DataTable from "react-data-table-component";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import StatusButton from "../../components/button/StatusButton";
import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalProvider";
import DeleteModal from "../../components/modal/DeleteModal";

const YayasanCampaign = () => {
  const [data, setData] = useState([]);
  const { openModal, closeModal } = useModal();
  const { user } = useAuth();
  const dataCampaign = async () => {
    const response = await campaignAPI.getCampaignByYayasan(user.id);
    setData(response.data);
    console.log(response);
  };

  useEffect(() => {
    if (user?.id) {
      dataCampaign();
    }
  }, [user]);

  const handleDeleteCampaign = async (param) => {
    const response = await campaignAPI.deleteCampaign(param);
    if (response.status == 200) {
      setData((prev) => prev.filter((item) => item.id != response.data.id));
      closeModal();
    }
  };

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
                <button className="p-2 rounded-md bg-gray-600 hover:bg-gray-800 flex gap-2 items-center text-white">
                  <FaEye />
                  <p>Lihat</p>
                </button>
                <Link
                  to={`/yayasan/campaign/form/${row.id}`}
                  className="p-2 rounded-md bg-orange-500 hover:bg-orange-600 flex gap-2 items-center text-white"
                >
                  <FaPencilAlt />
                  <p>Edit</p>
                </Link>
                <button
                  className="p-2 rounded-md bg-red-500 hover:bg-red-600 flex gap-1 items-center text-white"
                  onClick={() =>
                    openModal(
                      <DeleteModal
                        onDelete={() => handleDeleteCampaign(row.id)}
                      />
                    )
                  }
                >
                  <FaTrash />
                  <p>Hapus</p>
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
