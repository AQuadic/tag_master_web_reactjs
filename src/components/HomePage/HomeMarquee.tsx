import { homeMarqueeImages } from "@/constants/home/homeMarqueeImages";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import StarIcon from "../icons/home/StarIcon";

const HomeMarquee = () => {
  return (
    <div className="w-full overflow-hidden my-10 sm:my-20" dir="ltr">
      <Marquee speed={40} gradient={false} play={true} autoFill>
        {homeMarqueeImages.map((image, idx) => (
          <div key={idx} className="flex items-center">
            <Image
              src={image}
              width={44}
              height={44}
              alt="marquee"
              className="mx-20"
            />
            <StarIcon />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
