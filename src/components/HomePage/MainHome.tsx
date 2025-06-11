import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeAchievements from "./HomeAchievements";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";
import HomeServices from "./HomeServices";
import HomeBestSelling from "./HomeBestSelling";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <HomeMarquee />
      <HomeAchievements />
      <HomeAboutUs />
      <HomeServices />
      <HomeBestSelling />
    </div>
  );
};

export default MainHome;
