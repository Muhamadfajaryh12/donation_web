import { useAuth } from "../../context/AuthProvider";
import campaignAPI from "../../shared/CampaignAPI";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import DataTable from "react-data-table-component";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import StatusButton from "../../components/button/StatusButton";
import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalProvider";
import DeleteModal from "../../components/modal/DeleteModal";
import useFetch from "../../hooks/useFetch";
import { useToIDR } from "../../hooks/useToIDR";

const YayasanCampaign = () => {
  const { openModal, closeModal } = useModal();
  const { user } = useAuth();
  const url = user ? `/campaign/yayasan/${user.id}` : null;

  const toIDR = useToIDR();

  const state = useFetch({ url: url, auth: true });
  const handleDeleteCampaign = async (param) => {
    const response = await campaignAPI.deleteCampaign(param);
    if (response.status == 200) {
      state?.data?.filter((item) => item.id != response.data.id);
      closeModal();
    }
  };
  return (
    <div className="">
      <BreadCrumb data={["Yayasan", "Campaign"]} />
      <DataTable
        data={state?.data}
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
            name: "Terkumpul",
            selector: (row) => toIDR(row.current_donation),
          },
          {
            name: "Target",
            selector: (row) => toIDR(row.amount),
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
                </button>
                <Link
                  to={`/yayasan/campaign/form/${row.id}`}
                  className="p-2 rounded-md bg-orange-500 hover:bg-orange-600 flex gap-2 items-center text-white"
                >
                  <FaPencilAlt />
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
