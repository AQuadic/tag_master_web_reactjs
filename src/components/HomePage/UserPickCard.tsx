import Image from "next/image";
import React from "react";

const UserPickCard = () => {
  return (
    <div dir="rtl" className="w-full relative border p-4 sm:p-14 rounded-md">
      <Image
        src="/images/userPick.png"
        alt="user pick"
        width={112}
        height={112}
        className="absolute -top-12  sm:-top-8 -left-6"
      />
      <Image
        src="/images/quotes.png"
        alt="user pick"
        width={71}
        height={71}
        className="absolute -top-10 right-2 md:right-8"
      />
      <p className="text-2xl font-bold">أمل محمد</p>
      <p className="text-secondary-text text-lg max-w-[490px] mt-[14px]">
        موقع تاج ماستر رائع وسهل الاستخدام! أنشأت بطاقة تعريف رقمية خلال دقائق
        وشاركتها عبر كود NFC بكل سهولة. التصميم أنيق والخدمة ممتازة، أنصح به لكل
        من يريد إبراز هويته الرقمية باحترافية.
      </p>
    </div>
  );
};

export default UserPickCard;
