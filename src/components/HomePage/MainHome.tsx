import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeAchievements from "./HomeAchievements";
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
    </div>
  );
};

export default MainHome;
