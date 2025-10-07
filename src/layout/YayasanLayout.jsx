import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../components/navigation/BreadCrumb";

const YayasanLayout = () => {
  return (
    <div className=" min-h-screen flex gap-2">
      <Sidebar />
      <div className="m-5 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default YayasanLayout;
