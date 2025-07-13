import { ProductsResponseTypes } from "@/types/product";
import React from "react";
import DownloadApp from "../general/DownloadApp";
import HomeContact from "../icons/home/HomeContact";
import HomeAboutUs from "./HomeAboutUs";
import HomeAchievements from "./HomeAchievements";
import HomeBestSelling from "./HomeBestSelling";
import HomeBlogs from "./HomeBlogs";
import HomeFaq from "./HomeFaq";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";
import HomeServices from "./HomeServices";
import HomeUserPicks from "./HomeUserPicks";
import HowItWorks from "./HowItWorks";

interface MainHomeProps {
  data: ProductsResponseTypes;
}

const MainHome = ({ data }: MainHomeProps) => {
  console.log(data);
  return (
    <div>
      <HomeHero />
      <HomeMarquee />
      <HomeAchievements />
      <HomeAboutUs />
      <HomeServices />
      <HowItWorks />
      <HomeBestSelling data={data.data} />
      <HomeUserPicks />
      <DownloadApp />
      <HomeBlogs />
      <HomeFaq />
      <HomeContact />
    </div>
  );
};

export default MainHome;
