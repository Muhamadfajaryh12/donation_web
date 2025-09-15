import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
