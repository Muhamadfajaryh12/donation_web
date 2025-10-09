import React from "react";

const SelectForm = ({
  label,
  data,
  labelField,
  valueField,
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="font-medium block mb-1 text-sm">
        {label}
      </label>
      <select
        name={name}
        id=""
        className="block border w-full p-2 border-gray-300 rounded-md focus:outline-blue-500"
        {...register(name)}
      >
        <option value="">{placeholder}</option>
        {data.map((item) => (
          <option value={item[valueField]}>{item[labelField]}</option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-600 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectForm;
