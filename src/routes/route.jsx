import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Donation from "../pages/Donation";

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
]);
