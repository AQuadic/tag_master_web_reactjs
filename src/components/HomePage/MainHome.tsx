import React from "react";
import DownloadApp from "../general/DownloadApp";
import HomeAboutUs from "./HomeAboutUs";
import HomeAchievements from "./HomeAchievements";
import HomeBestSelling from "./HomeBestSelling";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";
import HomeServices from "./HomeServices";
import HomeUserPicks from "./HomeUserPicks";
import HowItWorks from "./HowItWorks";
import HomeBlogs from "./HomeBlogs";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <HomeMarquee />
      <HomeAchievements />
      <HomeAboutUs />
      <HomeServices />
      <HowItWorks />
      <HomeBestSelling />
      <HomeUserPicks />
      <DownloadApp />
      <HomeBlogs />
    </div>
  );
};

export default MainHome;
