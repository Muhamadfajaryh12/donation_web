import React from "react";

const Modal = ({ content, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4 z-10">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
