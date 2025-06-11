import React from "react";

const HomeServices = () => {
  return (
    <section className="container flex w-full max-md:flex-col gap-5">
      <div className="flex-1">
        <h3>إدارة التواصل</h3>
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex-1">
          <h3>مسح الكتروني لبطاقات العمل</h3>
        </div>
        <div className="flex-1"> 
          <h3>ملفات شخصية معدلة</h3>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
