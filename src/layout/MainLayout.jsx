import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <div className="max-w-6xl mx-auto my-4 items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
