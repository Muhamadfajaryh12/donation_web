import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextForm from "../../components/form/TextForm";
import SelectForm from "../../components/form/SelectForm";
import PrimaryButton from "../../components/button/PrimaryButton";
import FileUpload from "../../components/form/FileUpload";
import DangerButton from "../../components/button/DangerButton";
import CategoryAPI from "../../shared/CategoryAPI";
import campaignAPI from "../../shared/CampaignAPI";
import { useAuth } from "../../context/AuthProvider";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import MessageAlert from "../../components/alert/MessageAlert";

const CreateCampaign = () => {
  const { user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [alert, setAlert] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  const categoryData = async () => {
    const response = await CategoryAPI.getCategory();
    setCategory(response.data);
  };

  useEffect(() => {
    categoryData();
  }, []);

  const handleImage = (img) => {
    if (img) {
      setImage(URL.createObjectURL(img));
      setFile(img);
    }
  };

  const submit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("amount", data.amount);
    formData.append("expired_date", data.expired_date);
    formData.append("category_id", data.category);
    formData.append("user_id", user.id);
    formData.append("image", file);

    const response = await campaignAPI.createCampaign(formData);
    if (response.status == 201) {
      setAlert(response);
      reset();
      setFile(null);
      setImage(null);
    }
  };
  return (
    <div>
      <BreadCrumb data={["Yayasan", "Campaign", "Formulir"]} />
      <div className="mb-4">
        <h1 className="font-extrabold text-2xl text-blue-800 ">
          Formulir Pembuatan Kampanye
        </h1>
        <p className="text-sm text-gray-500 font-semibold">
          Silahkan mengisi formulir pembuatan Kampanye dengan benar !
        </p>
      </div>
      {alert && <MessageAlert data={alert} />}
      <form
        action=""
        className="w-4xl flex flex-col gap-4"
        onSubmit={handleSubmit(submit)}
      >
        <TextForm
          type={"text"}
          name="title"
          label={"Judul Kampanye"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="location"
          label={"Lokasi"}
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
          data={category}
          labelField={"category"}
          valueField={"id"}
          placeholder={"Pilih kategori"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="amount"
          label={"Target Dana"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <TextForm
          type={"date"}
          name="expired_date"
          label={"Tanggal Berakhir"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
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
                onClick={() => {
                  setImage(null), setFile(null);
                }}
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
        <PrimaryButton title={"Buat Kampanye"} type={"submit"} />
      </form>
    </div>
  );
};

export default CreateCampaign;
