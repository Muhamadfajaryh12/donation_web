import React from "react";
import { Link, Outlet } from "react-router-dom";
import PrimaryButton from "../components/button/PrimaryButton";
import Navbar from "../components/navigation/Navbar";

const DetailLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <Outlet />
      </div>
      <div className="fixed z-10 w-full bottom-0 bg-white">
        <Link to={"/donation"} className=" mx-auto w-32 relative">
          <PrimaryButton title={"Berikan Donasi"} />
        </Link>
      </div>
    </div>
  );
};

export default DetailLayout;
