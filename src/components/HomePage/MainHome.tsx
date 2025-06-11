import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <HomeMarquee />
      <HomeAboutUs />
    </div>
  );
};

export default MainHome;
