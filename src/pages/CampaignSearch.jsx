import { useSearchParams } from "react-router-dom";
import CardDonation from "../components/card/CardDonation";
import useFetch from "../hooks/useFetch";
import CardSkeleton from "../components/card/CardSkeleton";
import { useState } from "react";

const CampaignSearch = () => {
  const [itemPage, setItemPage] = useState(9);
  const [page, setPage] = useState(1);
  const [params] = useSearchParams();
  const paramKey = params.get("q") || params.get("id");
  const url = params.get("id")
    ? `/campaign?category_id=${paramKey}`
    : `/campaign?search=${paramKey}`;
  const state = useFetch({ url });

  const lengthPagination = Math.ceil(state?.data?.length / itemPage);
  const firstIndex = (page - 1) * itemPage;
  const lastIndex = firstIndex + itemPage;
  const dataPagination = state?.data?.slice(firstIndex, lastIndex);
  console.log(dataPagination);
  return (
    <div className="w-full">
      <h1 className="text-sm mb-4">
        Hasil pencarian ditemukan{" "}
        <span className="font-bold">{state?.data?.length} Campaign</span>
      </h1>
      <div className="grid grid-cols-3 gap-6 w-full">
        {state.loading
          ? Array.from({ length: 10 }, (_, index) => (
              <CardSkeleton key={index} />
            ))
          : dataPagination?.map((item) => <CardDonation data={item} />)}
      </div>
      <div className="my-4 flex gap-2 items-center">
        {Array.from({ length: lengthPagination }, (_, index) => (
          <button className="p-2 rounded  border text-xs">{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default CampaignSearch;
