import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const BreadCrumb = ({ data }) => {
  console.log(data);
  return (
    <div className="flex items-center gap-1 my-2 text-sm text-gray-500">
      {data.map((item, index) => (
        <>
          <p>{item}</p>
          {data.length - 1 == index ? "" : <FaChevronRight size={10} />}
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
