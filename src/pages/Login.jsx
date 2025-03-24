import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[20px]">
      <h1 className="w-2/3 mt-[40px] font-bold text-[28px] mb-[14px]">
        Signin to your PopX account
      </h1>
      <h2 className="w-3/4  text-[18px] opacity-[0.6] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </h2>
      <div className="mt-[33px] flex flex-col gap-[23px]">
        <Input
          label={"Email Address"}
          mandatory={false}
          placehold="Enter email address"
        />
        <Input
          label={"Password"}
          mandatory={false}
          placehold={"Enter password"}
        />
      </div>
      <button
        className="bg-[#CBCBCB] text-white rounded-[6px] font-semibold  py-[13px] mt-[14px] w-full"
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
