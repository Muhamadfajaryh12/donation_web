import React, { useState } from "react";
import TextForm from "../components/form/TextForm";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/button/PrimaryButton";
import { Link } from "react-router-dom";
import AuthAPI from "../shared/AuthAPI";
import MessageAlert from "../components/alert/MessageAlert";

const Register = () => {
  const [alert, setAlert] = useState(null);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const submit = async (data) => {
    const response = await AuthAPI.register({
      email: data.email,
      password: data.password,
      name: data.nama_lengkap,
      role: "yayasan",
    });
    if (response) {
      setAlert(response);
    }
    console.log(response);
  };
  return (
    <div>
      <h1 className=" text-center font-extrabold text-blue-600 text-4xl">
        Daftar Akun
      </h1>
      <p className="text-center my-5 text-sm text-gray-500">
        Mendaftarkan Akun Anda
      </p>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-lg flex flex-col gap-2"
      >
        {alert && <MessageAlert data={alert} />}
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
        <PrimaryButton
          title={"Daftar"}
          type={"submit"}
          disabled={isSubmitting}
        />
      </form>
      <p className="text-center text-sm mt-4">
        Sudah punya Akun?{" "}
        <Link to="/login" className="font-semibold text-blue-600">
          Masuk
        </Link>
      </p>
    </div>
  );
};

export default Register;
