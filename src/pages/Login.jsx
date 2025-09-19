import React from "react";
import { useForm } from "react-hook-form";
import TextForm from "../components/form/TextForm";
import PrimaryButton from "../components/button/PrimaryButton";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <h1 className=" text-center font-extrabold text-blue-600 text-4xl">
        Masuk
      </h1>
      <p className="text-center my-5 text-sm text-gray-500">
        Masuk Kedalam Akun Anda
      </p>
      <form className="flex flex-col gap-4 w-lg">
        <TextForm
          type={"email"}
          name={"email"}
          label={"Email"}
          register={(name) => register(name, { required: "email required" })}
          errors={errors}
        />
        <TextForm
          type={"password"}
          name={"password"}
          label={"Password"}
          register={(name) => register(name, { required: "password required" })}
          errors={errors}
        />
        <PrimaryButton title={"Masuk"} />
      </form>
      <p className="text-sm mt-4 text-center">
        Belum Punya Akun?{" "}
        <Link to={"/register"} className="text-blue-600 font-semibold">
          Daftar
        </Link>
      </p>
    </div>
  );
};

export default Login;
