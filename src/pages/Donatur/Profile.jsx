import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
import TextForm from "../../components/form/TextForm";
import PrimaryButton from "../../components/button/PrimaryButton";
import DangerButton from "../../components/button/DangerButton";
import AuthAPI from "../../shared/AuthAPI";
import { useModal } from "../../context/ModalProvider";
import VerificationModal from "../../components/modal/VerificationModal";

const Profile = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState(null);
  const { openModal } = useModal();

  const getProfile = async () => {
    const response = await AuthAPI.getProfile();
    setData(response.data);
  };

  useEffect(() => {
    getProfile();
  }, []);
  const handleVerification = async () => {
    const response = await AuthAPI.sendVerification();
    if (response.status == 200) {
      openModal(<VerificationModal message={response.message} />);
    }
  };

  return (
    <div className="w-4xl">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-extrabold text-2xl text-blue-800 ">
          Profile Donatur
        </h1>
        <h5 className="font-bold">Kontribusi Anda</h5>
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="border-2 border-orange-500 px-4 py-2 rounded-lg bg-orange-200 text-orange-600">
            <h6 className="font-bold text-sm uppercase mb-2  ">Donasi</h6>
            <div className="flex items-center justify-start my-2 gap-2">
              <FaHandHoldingUsd size={40} />
              <h1 className="font-bold text-center text-xl">Rp.1.000.000</h1>
            </div>
          </div>
          <div className="border-2 border-green-500 px-4 py-2 rounded-lg bg-green-200 text-green-600">
            <h6 className="font-bold text-sm uppercase mb-2  ">Campaign</h6>
            <div className="flex items-center justify-start my-2 gap-2">
              <FaHandHoldingHeart size={40} className="" />
              <h1 className="font-bold text-center text-xl">10</h1>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <TextForm
            label={"Nama"}
            type={"text"}
            name={"nama"}
            errors={errors}
            register={(name) => register(name, { required: "" })}
          />
          <TextForm
            label={"Email"}
            type={"email"}
            name={"email"}
            errors={errors}
            register={(name) => register(name, { required: "" })}
          />
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold text-sm">Status Verifikasi : </h1>
            {data?.is_verified == 1 ? (
              <div className="p-2 rounded-md bg-green-200 text-xs flex gap-2 items-center">
                <FaCheck className="text-green-600" />
                <span className="font-semibold tracking-widest text-green-600">
                  Verifikasi
                </span>
              </div>
            ) : (
              <div className="p-2 rounded-md bg-gray-300 text-xs">
                <span>Belum terverifikasi</span>
              </div>
            )}
          </div>
        </form>
        <div className="flex gap-2">
          {data?.is_verified == 0 && (
            <PrimaryButton
              title={"Lakukan Verifikasi"}
              onClick={handleVerification}
              type={"button"}
            />
          )}
          <DangerButton title={"Ganti Password"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
