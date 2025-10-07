import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Dropdown from "./Dropdown";
import CategoryAPI from "../../shared/CategoryAPI";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { token, logout, user } = useAuth();

  const [dataCategory, setDataCategory] = useState([]);
  const navigation = useNavigate();
  const getDataCategory = async () => {
    const response = await CategoryAPI.getCategory();
    setDataCategory(response.data);
  };

  useEffect(() => {
    getDataCategory();
  }, []);

  const dataDropdownCategory = dataCategory.map((item) => ({
    link: <Link to={`/campaign/category?id=${item.id}`}>{item.category}</Link>,
  }));

  const dataDropdownUser = [
    {
      link: <Link to={`/profile`}>Profile</Link>,
    },
    {
      link: <Link to={`/history`}>Riwayat</Link>,
    },
  ];
  return (
    <div className="flex w-full p-2 border-b border-gray-300 justify-between items-center">
      <h1>Donation</h1>
      <Dropdown title={"Kategori"} data={dataDropdownCategory} />
      <SearchBar />
      {token ? (
        <>
          <Dropdown title={user?.name} data={dataDropdownUser} />
          <button
            className="p-2 rounded-full border-blue-400 border text-xs text-blue-400 font-semibold w-18 text-center"
            onClick={() => {
              logout(), navigation("/login");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <div className="flex justify-center gap-2">
          <Link
            to={"/login"}
            className="p-2 rounded-full border-blue-400 border text-xs text-blue-400 font-semibold w-18 text-center"
          >
            Masuk
          </Link>
          <Link
            to={"/register"}
            className="p-2 rounded-full bg-blue-400 text-white border-2 text-xs w-18 text-center"
          >
            Daftar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
