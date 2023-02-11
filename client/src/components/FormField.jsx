import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#e1e3ec]"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-black border border-slate-300 text-[#e1e3ec] text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
