import Image from "next/image";
import React from "react";
import ProfileTabs from "./ProfileTabs";

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <section
      className="w-full md:max-w-[279px] flex flex-col items-center rounded-[12px] p-4"
      style={{ boxShadow: "0px 1px 2px 0px #00000040" }}
    >
      <div className="relative flex justify-center">
        <Image
          src="/images/profile/profileIMG.png"
          alt="profile image"
          width={112}
          height={112}
          className="rounded-full"
        />
        <Image
          src="/images/profile/uploadImg.svg"
          alt="upload"
          width={32}
          height={32}
          className="absolute bottom-0 right-0"
        />
      </div>
      <h1 className="text-[#000000] text-lg font-medium mt-2">وليد السيد</h1>
      <p className="text-[#4A4A4A] text-base mt-1">UI UX Designer</p>

      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
};

export default ProfileSidebar;
