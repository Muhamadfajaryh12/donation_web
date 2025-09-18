import React, { useState } from "react";
import TextForm from "../components/form/TextForm";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/button/PrimaryButton";

const Donation = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const data = [1000000, 2000000, 3000000, 4000000, 5000000, 6000000];
  const [active, setActive] = useState(null);

  const handleDonation = (index, value) => {
    setActive(index);
    setValue("nominal", value);
  };

  const handleAnonym = (checked) => {
    if (checked) {
      setValue("nama_pengirim", "annonymus");
    } else {
      setValue("nama_pengirim", "");
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <h1 className="font-bold ">Pilih Jumlah Donasi</h1>
        <div className="">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {data.map((item, index) => (
              <button
                key={index}
                className={`p-4 w-full rounded-md shadow-md ${
                  index == active ? "border-blue-500 border-2" : ""
                }`}
                type="button"
                onClick={() => handleDonation(index, item)}
              >
                <h1>Rp.{item.toLocaleString("id-ID")}</h1>
              </button>
            ))}
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
        <TextForm
          type={"text"}
          name="nama_pengirim"
          label={"Nama Pengirim"}
          register={(name) => register(name, { required: false })}
          errors={errors}
        />
        <div className="flex items-center gap-2 mt-1">
          <input
            type="checkbox"
            onChange={(e) => handleAnonym(e.target.checked)}
          />
          <span className="text-sm">Kirim sebagai anonymus</span>
        </div>
      </div>
      <div className="">
        <TextForm
          type={"text"}
          name={"asd"}
          label={"Tuliskan pesan dan harapan"}
          register={(name) => register(name, { required: "asd" })}
          errors={errors}
        />
      </div>
      <PrimaryButton title={"Lanjutkan Pembayaran"} />
    </div>
  );
};

export default Donation;
