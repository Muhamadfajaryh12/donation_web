import CardDonation from "../components/card/CardDonation";
import useFetch from "../hooks/useFetch";
import CardSkeleton from "../components/card/CardSkeleton";
import SubFooter from "../components/section/SubFooter";

const Dashboard = () => {
  const state = useFetch({ url: "/campaign" });

  return (
    <div className="w-full">
      <div className="my-4">
        <h1 className="font-bold  mb-4">Penggalangan Dana Mendesak</h1>
        <div className="flex gap-4">
          {state.loading
            ? Array.from({ length: 4 }, (_, index) => (
                <CardSkeleton key={index} />
              ))
            : state?.data?.urgent?.map((item) => <CardDonation data={item} />)}
        </div>
      </div>
      <div className="my-4 bg-blue-600 p-4 rounded-md">
        <h1 className="font-bold tracking-wide  mb-2 text-white">
          Penggalangan Dana
        </h1>
        <div className="flex gap-4 my-2">
          {state.loading
            ? Array.from({ length: 4 }, (_, index) => (
                <CardSkeleton key={index} />
              ))
            : state?.data?.all?.map((item) => <CardDonation data={item} />)}
        </div>
        <p className="text-white text-sm font-semibold">
          Tampilkan lebih banyak
        </p>
      </div>
      <SubFooter />
    </div>
  );
};

export default Dashboard;
