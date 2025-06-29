import React from "react";

const ProfileDetails = () => {
  return (
    <section className="">
      <div className="grid lg:grid-cols-2 gap-[43px]">
        <div className="flex flex-col relative ">
          <div className="relative w-full max-w-[358px]">
            <label
              htmlFor="name"
              className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
            >
              الاسم
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="وليد السيد"
              className="w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4 pr-14"
            />
          </div>
        </div>
        <div className="flex flex-col relative ">
          <label
            htmlFor="phone"
            className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
          >
            الهاتف
          </label>
          <input
            type="text"
            name="tel"
            id="tel"
            placeholder="123 4434 543"
            className="lg:w-[358px] w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
          />
        </div>
        <div className="flex flex-col relative ">
          <label
            htmlFor="name"
            className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
          >
            الايميل
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Walid Elsayed22@Gmail.com"
            className="lg:w-[358px] w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
          />
          <p className="text-[#4A4A4A] text-sm mt-2">
            لا يمكن تغيير البريد الإلكتروني المستخدم لتسجيل الدخول
          </p>
        </div>
        <div className="flex flex-col relative ">
          <label
            htmlFor="name"
            className="text-[#4A4A4A] text-base absolute -top-2 right-10 bg-white px-1 z-10"
          >
            الوظيفة
          </label>
          <input
            type="text"
            name="job"
            id="job"
            placeholder="UI UX Designer"
            className="lg:w-[358px] w-full h-16 border border-[#9C9C9C] rounded-[12px] px-4"
          />
        </div>
      </div>
      <div className="w-[200px] h-12 bg-[#9C9C9C] rounded-[39px] text-[#FFFFFF] text-lg flex items-center justify-center mx-auto mt-12">
        حفظ التعديلات
      </div>
    </section>
  );
};

export default ProfileDetails;
