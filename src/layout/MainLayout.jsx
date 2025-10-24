import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/section/Footer";

const MainLayout = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col ">
      <Navbar />
      <div className="max-w-6xl flex-1 w-full mx-auto my-4 items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
