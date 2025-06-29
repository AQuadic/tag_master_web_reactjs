"use client";
import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileDetails from "./ProfileDetails";
import FavoriteDetails from "./FavoriteDetails";

const MainProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileDetails />;
      case "favorite":
        return <FavoriteDetails />;
      //   case 'bookmarks':
      //     return <BookmarksDetails />;
      //   case 'products':
      //     return <MyProductsDetails />;
      //   case 'logout':
      //     return <LogoutDetails />;
      default:
        return null;
    }
  };

  return (
    <section className="my-10 flex gap-8 flex-col md:flex-row">
      <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="">{renderTabContent()}</div>
    </section>
  );
};

export default MainProfile;
