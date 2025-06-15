import Image from "next/image";
import React from "react";

const UserPickCard = () => {
  return (
    <div className="w-full relative border p-4 sm:p-10 ">
      <Image
        src="/images/userPick.png"
        alt="user pick"
        width={112}
        height={112}
        className="absolute -top-8 -left-8"
      />
      <Image
        src="/images/quotes.png"
        alt="user pick"
        width={71}
        height={71}
        className="absolute -top-8 right-8"
      />
      <p className="text-2xl font-bold">أمل محمد</p>
      <p className="text-secondary-text text-lg max-w-[520px]">
        موقع تاج ماستر رائع وسهل الاستخدام! أنشأت بطاقة تعريف رقمية خلال دقائق
        وشاركتها عبر كود NFC بكل سهولة. التصميم أنيق والخدمة ممتازة، أنصح به لكل
        من يريد إبراز هويته الرقمية باحترافية.
      </p>
    </div>
  );
};

export default UserPickCard;
