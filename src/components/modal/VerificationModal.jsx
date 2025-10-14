import React from "react";
import { useModal } from "../../context/ModalProvider";
import PrimaryButton from "../button/PrimaryButton";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const VerificationModal = ({ message }) => {
  const { closeModal } = useModal();
  return (
    <div>
      <FaCheckCircle className="text-green-600 mx-auto" size={40} />
      <h1 className="text-center my-4">{message}</h1>
      <div className="flex justify-center">
        <PrimaryButton title={"Tutup"} onClick={closeModal} />
      </div>
    </div>
  );
};

export default VerificationModal;
