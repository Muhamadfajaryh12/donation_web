import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import { Outlet } from "react-router-dom";

const YayasanLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="w-full flex justify-center items-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default YayasanLayout;
