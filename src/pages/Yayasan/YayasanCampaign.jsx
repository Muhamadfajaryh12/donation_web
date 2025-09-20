import React, { useState } from "react";
import CardDonation from "../../components/card/CardDonation";

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const YayasanCampaign = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;
  const dataPagination = test.slice(firstIndex, lastIndex);
  const paginationLen = Math.ceil(test.length / itemsPerPage);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        {dataPagination.map((item) => (
          <CardDonation />
        ))}
      </div>
      <div className="flex gap-2 items-center mt-5 justify-center">
        {Array.from({ length: paginationLen }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YayasanCampaign;
