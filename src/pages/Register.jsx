import React from "react";
import TextForm from "../components/form/TextForm";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/button/PrimaryButton";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submit = () => {
    console.log(errors);
  };
  return (
    <div>
      <h1 className="text-3xl font-extrabold ">Daftar Akun</h1>
      <div className="w-full h-1 my-3 bg-black"></div>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-xl flex flex-col gap-2"
      >
        <TextForm
          type={"email"}
          label={"Email"}
          name={"email"}
          register={(name) => register(name, { required: "Email wajib diisi" })}
          errors={errors}
        />
        <TextForm
          type={"text"}
          label={"Nama Lengkap"}
          name={"nama_lengkap"}
          register={(name) =>
            register(name, { required: "Nama Lengkap wajib diisi" })
          }
          errors={errors}
        />
        <TextForm
          type={"password"}
          label={"Password"}
          name={"password"}
          register={(name) =>
            register(name, { required: "Password wajib diisi" })
          }
          errors={errors}
        />
        <PrimaryButton title={"Daftar"} type={"submit"} />
      </form>
    </div>
  );
};

export default Register;
