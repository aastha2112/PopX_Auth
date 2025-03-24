import React from "react";
import camera from "../assets/camera.svg";
import profilePic from "../assets/profilePic.png";

const Profile = () => {
  return (
    <div className="min-h-screen ">
      <h2 className="px-[15px] text-[18px] text-[#1D2226] pt-[27px] pb-[19px] bg-[#FFFFFF] font-rubik">
        Account Settings
      </h2>
      <div className="pt-[30px] px-[20px] flex gap-[20px]">
        <div className="relative">
          <img src={profilePic} alt="Profile picture" className="h-[76px]" />
          <img
            src={camera}
            alt="camera icon"
            className="absolute bottom-0 right-0 h-[23px] w-[21px]"
          />
        </div>
        <div>
          <h1 className="font-semibold">Marry Doe</h1>
          <h2>Marry@Gmail.Com</h2>
        </div>
      </div>
      <div>
        <p
          className="pt-[30px] px-[20px] py-[20px] text-[14px] border-b-[#CBCBCB] border-b-1 border-dashed
"
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="w-full border-b-[#CBCBCB] border-b-1 border-dashed  bottom-[36px] fixed "></div>
    </div>
  );
};

export default Profile;
