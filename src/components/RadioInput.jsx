import React from "react";

const RadioInput = () => {
  return (
    <div>
      <label className="block text-sm  font-medium mb-[10px]">
        Are you an Agency? <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center space-x-4">
        {["Yes", "No"].map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name="isAgency"
              value={option.toLowerCase()}
              className="text-purple-600 focus:ring-purple-500  scale-150"
              defaultChecked={option === "Yes"}
            />
            <span className="text-gray-800">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
