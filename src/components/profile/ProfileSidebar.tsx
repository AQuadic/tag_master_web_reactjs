import { updateUser } from "@/api/auth/updateUser";
import Image from "next/image";
import React, { useRef } from "react";
import { toast } from "sonner";
import { useAuthStore } from "../stores/userStore";
import ProfileTabs from "./ProfileTabs";

interface ProfileSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("يرجى اختيار ملف صورة صالح");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("حجم الصورة يجب أن يكون أقل من 5 ميجابايت");
        return;
      }

      try {
        const updatedUser = await updateUser({
          profile_image: file,
        });

        setUser(updatedUser.user);
        toast.success("تم تحديث الصورة الشخصية بنجاح");
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "حدث خطأ أثناء تحديث الصورة"
        );
        console.error("Image update failed:", error);
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      className="w-full md:max-w-[279px] h-full flex flex-col items-center rounded-[12px] p-4"
      style={{ boxShadow: "0px 1px 2px 0px #00000040" }}
    >
      <div className="relative flex justify-center">
        <Image
          src={user?.image?.url || "/images/profile/profileIMG.png"}
          alt="profile image"
          width={112}
          height={112}
          className="rounded-full object-cover w-28 h-28"
        />
        <button
          onClick={handleUploadClick}
          className="absolute bottom-0 right-0 cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <Image
            src="/images/profile/uploadImg.svg"
            alt="upload"
            width={32}
            height={32}
          />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </div>
      <h1 className="text-[#000000] text-lg font-medium mt-2">{user?.name}</h1>
      <p className="text-[#4A4A4A] text-base mt-1">UI UX Designer</p>

      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
};

export default ProfileSidebar;
