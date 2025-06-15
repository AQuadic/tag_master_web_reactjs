import React from "react";
import DownloadApp from "../general/DownloadApp";
import HomeAboutUs from "./HomeAboutUs";
import HomeAchievements from "./HomeAchievements";
import HomeBestSelling from "./HomeBestSelling";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";
import HomeServices from "./HomeServices";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <HomeMarquee />
      <HomeAchievements />
      <HomeAboutUs />
      <HomeServices />
      <HomeBestSelling />
      <DownloadApp />
    </div>
  );
};

export default MainHome;
