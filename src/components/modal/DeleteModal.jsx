import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import DangerButton from "../button/DangerButton";
import { useModal } from "../../context/ModalProvider";

const DeleteModal = ({ onDelete }) => {
  const { closeModal } = useModal();
  console.log(closeModal);
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-center">Apakah anda ingin menghapus ini ?</h1>
        <div className="flex gap-2 items-center justify-center mt-4">
          <PrimaryButton
            type={"button"}
            title={"Batalkan"}
            onClick={closeModal}
          />
          <DangerButton type={"button"} title={"Hapus"} onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
