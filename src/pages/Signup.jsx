import React from "react";
import Input from "../components/Input";
import RadioInput from "../components/RadioInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[40px] min-h-screen px-[20px] flex flex-col justify-between ">
      <div>
        {" "}
        <h1 className="w-3/4 text-[28px] font-bold">
          Create your PopX account
        </h1>
        <div className="flex flex-col mt-[31px] gap-[29px]">
          <Input label={"Full Name"} mandatory={true} />
          <Input label={"Phone number"} mandatory={true} />
          <Input label={"Email address"} mandatory={true} />
          <Input label={"Password "} mandatory={true} />
          <Input label={"Company name"} mandatory={false} />
          <RadioInput />
        </div>
      </div>
      <button
        className="bg-[#6C25FF] rounded-[6px] text-white  py-[13px] w-full align-self-end mb-[30px]"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>{" "}
    </div>
  );
};

export default Signup;
