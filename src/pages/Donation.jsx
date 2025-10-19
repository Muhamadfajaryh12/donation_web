import React, { useEffect, useState } from "react";
import TextForm from "../components/form/TextForm";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/button/PrimaryButton";
import { useAuth } from "../context/AuthProvider";
import DonationAPI from "../shared/DonationAPI";
import { useParams } from "react-router-dom";

const Donation = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  const params = useParams();
  const data = [1000000, 2000000, 3000000, 4000000, 5000000, 6000000];
  const [active, setActive] = useState(null);
  const { user } = useAuth();

  const handleDonation = (index, value) => {
    setActive(index);
    setValue("donation", value);
  };

  const handleAnonym = (checked) => {
    if (checked) {
      setValue("name", "annonymus");
    } else {
      setValue("name", user.name);
    }
  };

  useEffect(() => {
    setValue("name", user?.name);
  }, [user]);

  const handleSubmitDonation = async (data) => {
    const response = await DonationAPI.createDonation({
      name: data.name,
      message: data.message,
      donation: data.donation,
      campaign_id: params.id,
    });
    if (response.status == 201) {
      const snapToken = response.data.transaction?.token;
      if (window.snap && snapToken) {
        window.snap.pay(snapToken, {
          onSuccess: function (result) {
            console.log("Pembayaran sukses:", result);
          },
          onPending: function (result) {
            console.log("Menunggu pembayaran:", result);
          },
          onError: function (error) {
            console.error("Pembayaran gagal:", error);
          },
          onClose: function () {
            console.log("Popup ditutup sebelum menyelesaikan pembayaran.");
          },
        });
      } else {
        console.error("Snap belum dimuat atau token tidak ditemukan");
      }
    }
  };
  return (
    <div className="mt-6">
      <form
        onSubmit={handleSubmit(handleSubmitDonation)}
        className="flex flex-col gap-4 "
      >
        <div className="">
          <h1 className="font-bold ">Pilih Jumlah Donasi</h1>
          <div className="">
            <div className="grid grid-cols-3 gap-4 my-4">
              {data.map((item, index) => (
                <button
                  key={index}
                  className={`p-4 w-full rounded-md shadow-md ${
                    index == active
                      ? "border-blue-500 border-2"
                      : "border-gray-200 border"
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
              name={"donation"}
              label={"Donation"}
              register={(name) => register(name, { required: "donation" })}
              errors={errors}
            />
          </div>
        </div>
        <div className="">
          <TextForm
            type={"text"}
            name="name"
            label={"Nama Pengirim"}
            register={(name) => register(name, { required: false })}
            errors={errors}
            disabled
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
            name={"message"}
            label={"Tuliskan pesan dan harapan"}
            register={(name) => register(name, { required: "" })}
            errors={errors}
          />
        </div>
        <PrimaryButton title={"Lanjutkan Pembayaran"} />
      </form>
    </div>
  );
};

export default Donation;
