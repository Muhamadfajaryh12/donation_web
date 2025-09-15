import React from "react";

const TextForm = ({ name, label, type, register, errors }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="font-medium block mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="block border w-full p-1 border-gray-300"
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-red-600 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextForm;
