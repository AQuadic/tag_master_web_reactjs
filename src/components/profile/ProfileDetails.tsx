"use client"
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/userStore";
import { updateUser } from "@/api/auth/updateUser";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const ProfileDetails = () => {
  const t = useTranslations("profile");
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    job: "",
  });

  console.log(user)

    useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        job: user.job || ""
      });
    }
  }, [user]);

const handleUpdate = async () => {
  try {
    const updatedUser = await updateUser({
      name: formData.name,
      phone: formData.phone,
      phone_country: "EG",
    });

    setUser(updatedUser.user);

    toast.success("تم تحديث البيانات بنجاح");
  } catch (error: any) {
    toast.error(
      error?.response?.data?.message || "حدث خطأ أثناء تحديث البيانات"
    );
    console.error("Update failed:", error);
  }
};


  return (
    <section className="mt-10">
      <div className="grid lg:grid-cols-2 gap-[43px]">
        <div className="flex flex-col relative ">
          <div className="relative w-full max-w-[358px]">
            <label
              htmlFor="name"
              className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
            >
              {t('name')}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="وليد السيد"
              className="w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col relative ">
          <label
            htmlFor="phone"
            className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
          >
            {t('phone')}
          </label>
          <input
            type="text"
            name="tel"
            id="tel"
            placeholder="123 4434 543"
            className="lg:w-[358px] w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col relative ">
          <label
            htmlFor="name"
            className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
          >
            {t('email')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Walid Elsayed22@Gmail.com"
            className="lg:w-[358px] w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
            value={formData.email}
            readOnly
          />
          <p className="text-[#4A4A4A] text-sm mt-2">
            {t('emailNotChanged')}
          </p>
        </div>
        <div className="flex flex-col relative ">
          <label
            htmlFor="name"
            className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
          >
            {t('job')}
          </label>
          <input
            type="text"
            name="job"
            id="job"
            placeholder="UI UX Designer"
            className="lg:w-[358px] w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
            value={formData.job}
            onChange={(e) => setFormData({ ...formData, job: e.target.value })}
          />
        </div>
      </div>
      <button
      onClick={handleUpdate}
      className="w-[200px] h-12 bg-[#007EC1] hover:bg-[#005f95] transition-all duration-200 rounded-[39px] text-[#FFFFFF] text-lg flex items-center justify-center mx-auto mt-12"
    >
      {t('save')}
    </button>
    </section>
  );
};

export default ProfileDetails;
