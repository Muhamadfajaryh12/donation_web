import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextForm from "../../components/form/TextForm";
import SelectForm from "../../components/form/SelectForm";
import PrimaryButton from "../../components/button/PrimaryButton";
import FileUpload from "../../components/form/FileUpload";
import CategoryAPI from "../../shared/CategoryAPI";
import campaignAPI from "../../shared/CampaignAPI";
import { useAuth } from "../../context/AuthProvider";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import MessageAlert from "../../components/alert/MessageAlert";
import { useParams } from "react-router-dom";

const CreateCampaign = () => {
  const { user } = useAuth();
  const path = useParams();
  const { id } = path;
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      location: "",
      description: "",
      amount: "",
      expired_date: "",
      category: "",
    },
  });

  const [alert, setAlert] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  const categoryData = async () => {
    const response = await CategoryAPI.getCategory();
    setCategory(response.data);
  };

  const getDataCampaign = async (param) => {
    const response = await campaignAPI.getDetailCampaign(param);
    const dataCampaign = response.data;
    console.log(dataCampaign);
    setValue("title", dataCampaign.title);
    setValue("location", dataCampaign.location);
    setValue("description", dataCampaign.description);
    setValue("category", dataCampaign.category_id);
    setValue("amount", dataCampaign.amount);
    setValue(
      "expired_date",
      new Date(dataCampaign.expired_date).toISOString().split("T")[0]
    );
    setImage(dataCampaign.image);
  };

  useEffect(() => {
    categoryData();
    if (id) {
      getDataCampaign(id);
    }
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

    if (id) {
      const response = await campaignAPI.updateCampaign({
        id: id,
        formData: formData,
      });
      if (response.status == 200) {
        setAlert(response);
      }
    } else {
      const response = await campaignAPI.createCampaign(formData);
      if (response.status == 201) {
        setAlert(response);
        reset();
        setFile(null);
        setImage(null);
      }
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
      <form
        action=""
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(submit)}
      >
        {alert && <MessageAlert data={alert} />}
        <TextForm
          type={"text"}
          name="title"
          label={"Judul Kampanye"}
          register={(name) =>
            register(name, { required: "Judul wajib diisi!" })
          }
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="location"
          label={"Lokasi"}
          register={(name) =>
            register(name, { required: "Lokasi wajib diisi!" })
          }
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="description"
          label={"Deskripsi"}
          register={(name) =>
            register(name, { required: "Deskripsi wajib diisi!" })
          }
          errors={errors}
        />
        <SelectForm
          name={"category"}
          label={"Kategori"}
          data={category}
          labelField={"category"}
          valueField={"id"}
          placeholder={"Pilih kategori"}
          register={(name) =>
            register(name, { required: "Kategori wajib diisi!" })
          }
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="amount"
          label={"Target Dana"}
          register={(name) =>
            register(name, { required: "Target dana wajib diisi!" })
          }
          errors={errors}
        />
        <TextForm
          type={"date"}
          name="expired_date"
          label={"Tanggal Berakhir"}
          register={(name) =>
            register(name, { required: "Tanggal berakhir wajib diisi!" })
          }
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
                className="w-full h-96 rounded-md bg-cover"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          </div>
        )}
        <PrimaryButton
          title={"Buat Kampanye"}
          type={"submit"}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default CreateCampaign;
