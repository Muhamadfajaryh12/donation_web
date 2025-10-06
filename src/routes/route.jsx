import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Donation from "../pages/Donation";
import DetailDonation from "../pages/DetailDonation";
import DetailLayout from "../layout/DetailLayout";
import YayasanDashboard from "../pages/Yayasan/YayasanDashboard";
import CreateCampaign from "../pages/Yayasan/CreateCampagin";
import YayasanLayout from "../layout/YayasanLayout";
import YayasanCampaign from "../pages/Yayasan/YayasanCampaign";
import Profile from "../pages/Donatur/Profile";
import HistoryDonatur from "../pages/Donatur/HistoryDonatur";
import PrivateLayout from "../layout/PrivateLayout";
import CampaignSearch from "../pages/CampaignSearch";

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
        element: (
          <PrivateLayout>
            <Donation />
          </PrivateLayout>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/history",
        element: <HistoryDonatur />,
      },
      {
        path: "/campaign/category",
        element: <CampaignSearch mode={"category"} />,
      },
      {
        path: "/campaign/search",
        element: <CampaignSearch mode={"search"} />,
      },
    ],
  },
  {
    path: "/detail/:id",
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
    element: (
      <PrivateLayout>
        <YayasanLayout />
      </PrivateLayout>
    ),
    children: [
      {
        index: true,
        element: <YayasanDashboard />,
      },
      {
        path: "campaign",
        element: <YayasanCampaign />,
      },
      {
        path: "campaign/form",
        element: <CreateCampaign />,
      },
    ],
  },
]);
