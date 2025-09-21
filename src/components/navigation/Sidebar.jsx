import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaDashcube,
  FaPlus,
} from "react-icons/fa";
import { GrFormUp } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const dataLink = [
  {
    link: "/yayasan/campaign",
    title: "Kampanye",
    icon: <FaDashcube />,
  },
  {
    link: "/yayasan/campaign/form",
    title: "Buat Kampanye",
    icon: <FaPlus />,
  },
];

const Sidebar = () => {
  const path = useLocation();
  const pathname = path.pathname;
  const [open, setOpen] = useState(true);
  return (
    <div
      className={` h-full border-r border-gray-300 p-4 ease-in duration-300 ${
        open ? "w-96" : "w-18"
      }`}
    >
      <div className={`flex ${open ? "justify-end" : "justify-center"}`}>
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? <FaBars /> : <FaArrowRight />}
        </button>
      </div>
      <h1
        className={`font-extrabold text-center uppercase text-2xl ${
          open ? "block" : "hidden"
        }`}
      >
        Yayasan
      </h1>
      <div className="mt-10">
        <ul>
          {dataLink.map((item) => (
            <li className="my-4">
              <Link to={item.link} className="flex gap-2 items-center">
                <div
                  className={`${
                    item.link == pathname ? "bg-blue-600 text-white" : ""
                  } p-2 rounded-md `}
                >
                  {item.icon}
                </div>
                {open && (
                  <p
                    className={`${
                      item.link == pathname
                        ? "text-blue-600 font-semibold "
                        : "text-black"
                    }  `}
                  >
                    {item.title}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <button className="flex gap-4 items-center p-2">
          <BiLogOut /> {open && <p>Keluar</p>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
