import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextForm from "../../components/form/TextForm";
import SelectForm from "../../components/form/SelectForm";
import PrimaryButton from "../../components/button/PrimaryButton";
import FileUpload from "../../components/form/FileUpload";
import DangerButton from "../../components/button/DangerButton";

const data = [
  {
    id: 1,
    title: "Sosial",
  },
  {
    id: 2,
    title: "Pendidikan",
  },
];
const CreateCampaign = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);

  const handleImage = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="font-extrabold text-2xl text-blue-800 ">
          Formulir Pembuatan Kampanye
        </h1>
        <p className="text-sm text-gray-500 font-semibold">
          Silahkan mengisi formulir pembuatan Kampanye dengan benar !
        </p>
      </div>
      <form action="" className="w-4xl flex flex-col gap-4">
        <TextForm
          type={"text"}
          name="title"
          label={"Judul Kampanye"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="description"
          label={"Deskripsi"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <SelectForm
          name={"category"}
          label={"Kategori"}
          data={data}
          labelField={"title"}
          valueField={"id"}
          placeholder={"Pilih kategori"}
        />
        <TextForm
          type={"text"}
          name="target_amount"
          label={"Target Dana"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <div className="grid grid-cols-2 gap-2">
          <TextForm
            type={"date"}
            name="start_date"
            label={"Tanggal Mulai"}
            register={(name) => register(name, { required: "" })}
            errors={errors}
          />{" "}
          <TextForm
            type={"date"}
            name="end_date"
            label={"Tanggal Berakhir"}
            register={(name) => register(name, { required: "" })}
            errors={errors}
          />
        </div>

        {!image ? (
          <FileUpload handleImage={handleImage} />
        ) : (
          <div className="">
            <label className="font-medium block mb-1 text-sm">
              Unggah Banner / Gambar
            </label>
            <div className="w-full relative">
              <button
                className="w-8 h-8 rounded-full text-white bg-red-500  absolute -right-3 -top-3 hover:bg-red-600 "
                type="button"
                onClick={() => setImage(null)}
              >
                X
              </button>
              <div
                className="w-full h-48 rounded-md bg-cover"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          </div>
        )}
        <PrimaryButton title={"Buat Kampanye"} />
      </form>
    </div>
  );
};

export default CreateCampaign;
