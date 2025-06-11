import { homeAchievementsData } from "@/constants/home/homeAchivementsData";
import Image from "next/image";
import React from "react";

const HomeAboutUs = () => {
  return (
    <section>
      <div className="py-8 sm:py-16">
        <h2 className="text-lg text-main-blue text-center">
          كن جزءًا من مجتمعنا
        </h2>
        <h3 className="text-2xl font-bold text-center">
          ثقة عالمية وانتشار واسع{" "}
        </h3>
        <div className="flex items-center justify-around my-6 sm:my-10">
          {homeAchievementsData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <Image width={68} height={68} src={item.image} alt={item.title} />
              <p className="text-main-blue font-bold text-4xl">
                +{item.number}
              </p>
              <p className="text-center w-[92px] text-white bg-black rounded-full p-1">
                {item.title}
              </p>
              <p className="w-[255px] text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
