import React, { useState } from "react";
import { useModal } from "../../context/ModalProvider";
import { useForm } from "react-hook-form";
import TextForm from "../form/TextForm";
import PrimaryButton from "../button/PrimaryButton";
import AuthAPI from "../../shared/AuthAPI";
import MessageAlert from "../alert/MessageAlert";

const ChangePasswordModal = () => {
  const { closeModal } = useModal();
  const [message, setMessage] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleUpdatePassword = async (data) => {
    const response = await AuthAPI.updatePassword({
      old_password: data.old_password,
      new_password: data.new_password,
    });
    if (response.status == 200) {
      setMessage(response);
      reset();
    }
  };
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mb-2">
        Ganti Password
      </h1>
      {message && <MessageAlert data={message} />}
      <form
        className="flex gap-4 flex-col my-2"
        onSubmit={handleSubmit(handleUpdatePassword)}
      >
        <TextForm
          name={"old_password"}
          label={"Password lama"}
          type={"password"}
          register={(name) => register(name, { required: "Wajib diisi" })}
          errors={errors}
        />
        <TextForm
          name={"new_password"}
          label={"Password Baru"}
          type={"password"}
          register={(name) => register(name, { required: "Wajib diisi" })}
          errors={errors}
        />
        <PrimaryButton title={"Konfirmasi"} />
      </form>
    </div>
  );
};

export default ChangePasswordModal;
{
}
