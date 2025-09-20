import React from "react";
import { FaDashcube, FaPlus } from "react-icons/fa";
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
  return (
    <div className="w-72 h-full border-r border-gray-300 p-4">
      <h1 className="font-extrabold text-center uppercase text-2xl">Yayasan</h1>
      <div>
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
                <p
                  className={`${
                    item.link == pathname
                      ? "text-blue-600 font-semibold "
                      : "text-black"
                  }  `}
                >
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
