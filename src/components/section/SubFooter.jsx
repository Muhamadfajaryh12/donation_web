import React from "react";
import { FaEye, FaHeart, FaPhone, FaSearch } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const SubFooter = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full my-12 ">
      <div className="text-center">
        <FaHeart size={40} className="text-blue-600  mx-auto mb-4" />
        <h1 className="font-bold text-2xl">Bantu</h1>
        <p className="text-sm mt-2">Ayo bantu sesama yang membutuhkan</p>
      </div>{" "}
      <div className="text-center">
        <MdOutlinePhoneAndroid
          size={40}
          className="text-blue-600  mx-auto mb-4"
        />
        <h1 className="font-bold text-2xl">Praktis</h1>
        <p className="text-sm mt-2">
          Bantu sesama dari mana pun, cukup gunakan HP kita
        </p>
      </div>
      <div className="text-center">
        <FiTarget size={40} className="text-blue-600  mx-auto mb-4" />
        <h1 className="font-bold text-2xl">Tepat Sasaran</h1>
        <p className="text-sm mt-2">
          Program penggalangan dana dapat dipertanggungjawabkan kebenarannya
        </p>
      </div>
      <div className="text-center">
        <FaEye size={40} className="text-blue-600  mx-auto mb-4" />{" "}
        <h1 className="font-bold text-2xl">Transparan</h1>
        <p className="text-sm mt-2">
          Penyaluran dana dilakukan secara transparan
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
