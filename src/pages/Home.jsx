import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col  justify-end px-[20px] pb-[41px]">
      <h1 className="text-[28px] font-bold tracking-0 mb-[10px]">
        Welcome to PopX
      </h1>
      <h3 className="text-[18px] text-[#1D2226] opacity-[0.6] mb-[29px] w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </h3>
      <div className="flex flex-col gap-[10px]">
        <button
          className="bg-[#6C25FF] rounded-[6px] text-white font-semibold py-[13px]"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button
          className="bg-[#6C25FF4B] rounded-[6px] font-semibold  py-[13px]"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
