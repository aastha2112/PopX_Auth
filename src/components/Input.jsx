import React from "react";

const Input = ({ label, mandatory, placehold }) => {
  return (
    <div className="flex flex-col relative">
      <label className="absolute -top-2 left-3 bg-[#F7F8F9] pr-3  flex pl-[5px]  text-[#6C25FF] text-[13px]">
        {label} {mandatory && <span className="text-[#DD4A3D]">*</span>}
      </label>
      <input
        type="text"
        value={placehold ? undefined : "Marry Doe"}
        placeholder={placehold || undefined}
        className="peer border border-[#CBCBCB] rounded-[6px] py-[12px] px-[17px]"
      />
    </div>
  );
};

export default Input;
