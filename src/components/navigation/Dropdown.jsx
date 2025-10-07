import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, data }) => {
  const [open, setOpen] = useState([]);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>{title}</button>
      <div
        className={`${
          open ? "hidden" : "absolute"
        } bg-white w-48 border rounded-md border-gray-200 top-8 shadow-sm `}
      >
        <ul>
          {data.map((item) => (
            <li className="my-2 hover:bg-gray-100 p-2">{item.link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
