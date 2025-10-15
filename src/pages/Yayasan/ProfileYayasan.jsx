import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/navigation/BreadCrumb";
import AuthAPI from "../../shared/AuthAPI";
import CardStatusVerfy from "../../components/card/CardStatusVerfy";
import PrimaryButton from "../../components/button/PrimaryButton";
import DangerButton from "../../components/button/DangerButton";

const ProfileYayasan = () => {
  const [dataProfile, setDataProfile] = useState(null);

  const getDataProfile = async () => {
    const response = await AuthAPI.getProfile();
    setDataProfile(response.data);
  };

  useEffect(() => {
    getDataProfile();
  }, []);
  return (
    <div>
      <BreadCrumb data={["Yayasan", "Profile"]} />
      <div className="w-xl flex flex-col gap-3 mt-4">
        <div className="grid grid-cols-2 gap-2 items-center">
          <h6 className="font-bold">Nama Yayasan</h6>
          <h6 className="capitalize">: {dataProfile?.name}</h6>
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <h6 className="font-bold">Email</h6>
          <h6>: {dataProfile?.email}</h6>
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <h6 className="font-bold">Verifikasi</h6>
          <CardStatusVerfy status={dataProfile?.is_verified} />
        </div>
        <div className="flex gap-2 items-center">
          {!dataProfile.is_verified && (
            <PrimaryButton title={"Lakukan verifikasi"} />
          )}
          <DangerButton title={"Ganti Password"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileYayasan;
