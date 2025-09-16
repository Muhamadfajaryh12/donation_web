import React from "react";
import TextForm from "../components/form/TextForm";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/button/PrimaryButton";

const Donation = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <h1 className="font-bold ">Pilih Jumlah Donasi</h1>
        <div className="">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 w-full  rounded-md shadow-md ">
              <h1>Rp.1.000.000</h1>
            </div>
            <div className="p-4 w-full  rounded-md shadow-md ">
              <h1>Rp.1.000.000</h1>
            </div>
            <div className="p-4 w-full  rounded-md shadow-md ">
              <h1>Rp.1.000.000</h1>
            </div>
            <div className="p-4 w-full  rounded-md shadow-md ">
              <h1>Rp.1.000.000</h1>
            </div>
            <div className="p-4 w-full  rounded-md shadow-md ">
              <h1>Rp.1.000.000</h1>
            </div>
            <div className="p-4 w-full  rounded-md shadow-md ">
              <h1>Rp.1.000.000</h1>
            </div>
          </div>
          <TextForm
            type={"text"}
            name={"nominal"}
            label={"Nominal"}
            register={(name) => register(name, { required: "nominal" })}
            errors={errors}
          />
        </div>
      </div>
      <div className="">
        <h1 className="font-bold">Berikan Pesan dan Doa</h1>
        <TextForm
          type={"text"}
          name={"asd"}
          label={"Pesan dan Doa"}
          register={(name) => register(name, { required: "asd" })}
          errors={errors}
        />
      </div>
      <PrimaryButton title={"Lanjutkan Pembayaran"} />
    </div>
  );
};

export default Donation;
