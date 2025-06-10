import { homeMarqueeImages } from "@/constants/home/homeMarqueeImages";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        speed={40}
        gradient={false}
        play={true}
        direction="left"
        autoFill
      >
        {homeMarqueeImages.map((image, idx) => (
          <div key={idx} className="mx-8">
            <Image src={image} width={44} height={44} alt="marquee" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
