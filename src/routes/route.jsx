import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Donation from "../pages/Donation";
import DetailDonation from "../pages/DetailDonation";
import DetailLayout from "../layout/DetailLayout";
import YayasanDashboard from "../pages/Yayasan/YayasanDashboard";
import CreateDonation from "../pages/Yayasan/CreateDonation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
    ],
  },
  {
    path: "/detail",
    element: <DetailLayout />,
    children: [
      {
        index: true,
        element: <DetailDonation />,
      },
    ],
  },
  {
    path: "/yayasan",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <YayasanDashboard />,
      },
      {
        path: "donation/form",
        element: <CreateDonation />,
      },
    ],
  },
]);
