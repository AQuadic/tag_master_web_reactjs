import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeAchievements from "./HomeAchievements";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <HomeMarquee />
      <HomeAchievements />
      <HomeAboutUs />
    </div>
  );
};

export default MainHome;
