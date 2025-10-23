import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-72 bg-blue-900 flex justify-around p-4">
      <div className="text-white max-w-lg">
        <h1 className="font-bold text-2xl mb-4 ">Website Donasi</h1>
        <p className="text-sm">
          Kami telah memiliki Izin Pengumpulan Uang dan Barang untuk Non Bencana
          di Kementerian Sosial Republik Indonesia dengan no surat izin
          280/HUK-PS/2025
        </p>
      </div>
      <div className="">
        <h1 className="font-bold text-2xl mb-4 text-white">Tentang</h1>
      </div>
    </div>
  );
};

export default Footer;
