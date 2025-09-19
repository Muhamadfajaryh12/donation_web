import React from "react";
import { useForm } from "react-hook-form";
import TextForm from "../../components/form/TextForm";

const CreateDonation = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form action="">
        <TextForm
          type={"text"}
          name="title"
          label={"Judul Donasi"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
        <TextForm
          type={"text"}
          name="title"
          label={"Target Dana"}
          register={(name) => register(name, { required: "" })}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default CreateDonation;
